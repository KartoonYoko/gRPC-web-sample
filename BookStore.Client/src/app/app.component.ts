import { Component } from '@angular/core';
import { grpc } from '@improbable-eng/grpc-web';
import { Request } from '@improbable-eng/grpc-web/dist/typings/invoke';
import { Empty } from 'google-protobuf/google/protobuf/empty_pb';
import { BookRequest, BookResponse } from './generated/bookstore_pb';
import { BookStoreService } from './generated/bookstore_pb_service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'BookStore.Client';

  grpcClient: Request | null = null;

  streamMessages: string[] = [];

  byIdMessage: string = '';
  constructor(){
    // const request = new BookRequest();
    
  }


  onStartClick(){
    this.streamMessages = [];
    this.grpcClient = grpc.invoke(BookStoreService.GetBooks, {
        request: new Empty(),
        host: 'http://localhost:7000',
        onMessage: (message: BookResponse) => {
            console.log(message.toObject());
            this.streamMessages.push(JSON.stringify(message.toObject()));
        },
        onEnd: (code: grpc.Code, msg: string | undefined, trailers: grpc.Metadata) => {
            // This section works when server close connection.
    
            if (code == grpc.Code.OK) {
              console.log('request finished wihtout any error');
            } else {
              console.log('an error occured', code, msg, trailers);
            }
    
          },
    })
  }

  getById(){
    const request = new BookRequest();
    request.setId(1);
    grpc.invoke(BookStoreService.GetBook, {
        request: request,
        host: 'http://localhost:7000',
        onMessage: (message: BookResponse) => {

            this.byIdMessage = message.toObject().title;
        },
        onEnd: (code: grpc.Code, msg: string | undefined, trailers: grpc.Metadata) => {
            // This section works when server close connection.
    
            if (code == grpc.Code.OK) {
              console.log('request finished wihtout any error');
            } else {
              console.log('an error occured', code, msg, trailers);
            }
    
          },
    });
  }

  onEndClick(){
    if (this.grpcClient) this.grpcClient.close();
  }

}
