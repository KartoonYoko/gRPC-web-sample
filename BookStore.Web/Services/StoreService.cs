using BookStore.Web.Protos;
using Google.Protobuf.WellKnownTypes;
using Grpc.Core;

namespace BookStore.Web.Services;

public class StoreService : BookStore.Web.Protos.BookStoreService.BookStoreServiceBase
{
    private Book[] _books = new Book[]{
        new(){ 
            Id = 1,
            Title= "Title1",
        },
        new(){ Id = 2, Title= "Title2", },
        new(){ Id = 3, Title= "Title3", },
    };
    public override Task<BookResponse?> GetBook(BookRequest request, ServerCallContext context)
    {
        var book = _books.FirstOrDefault(b => b.Id == request.Id);
        return Task.FromResult(book?.ToGrpc());
    }

    public override async Task GetBooks(Empty request, IServerStreamWriter<BookResponse> responseStream, ServerCallContext context)
    {
        foreach(var book in _books)
        {
            await responseStream.WriteAsync(book.ToGrpc());
        }
    }
}


public class Book { 
    public long Id { get; set; }
    public string Title { get; set; }

    public BookResponse ToGrpc() => new() { Id = Id, Title = Title };
}