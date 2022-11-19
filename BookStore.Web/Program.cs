using BookStore.Web.Services;

var builder = WebApplication.CreateBuilder(args);

builder.Services.AddGrpc();
builder.Services.AddCors(options => {
    options.AddPolicy("AllowAll", policy =>
    {
        policy
        .AllowAnyMethod()
        .AllowAnyHeader()
        .WithExposedHeaders("Grpc-Status", "Grpc-Message", "Grpc-Encoding", "Grpc-Accept-Encoding", "x-grpc-web")
        .AllowAnyOrigin();
    });
});

var app = builder.Build();
app.UseCors("AllowAll");
app.UseGrpcWeb();
app.MapGrpcService<StoreService>().EnableGrpcWeb();

app.Run();
