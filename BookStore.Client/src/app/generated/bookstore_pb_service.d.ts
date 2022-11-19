// package: BookService.v1
// file: bookstore.proto

import * as bookstore_pb from "./bookstore_pb";
import * as google_protobuf_empty_pb from "google-protobuf/google/protobuf/empty_pb";
import {grpc} from "@improbable-eng/grpc-web";

type BookStoreServiceGetBooks = {
  readonly methodName: string;
  readonly service: typeof BookStoreService;
  readonly requestStream: false;
  readonly responseStream: true;
  readonly requestType: typeof google_protobuf_empty_pb.Empty;
  readonly responseType: typeof bookstore_pb.BookResponse;
};

type BookStoreServiceGetBook = {
  readonly methodName: string;
  readonly service: typeof BookStoreService;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof bookstore_pb.BookRequest;
  readonly responseType: typeof bookstore_pb.BookResponse;
};

export class BookStoreService {
  static readonly serviceName: string;
  static readonly GetBooks: BookStoreServiceGetBooks;
  static readonly GetBook: BookStoreServiceGetBook;
}

export type ServiceError = { message: string, code: number; metadata: grpc.Metadata }
export type Status = { details: string, code: number; metadata: grpc.Metadata }

interface UnaryResponse {
  cancel(): void;
}
interface ResponseStream<T> {
  cancel(): void;
  on(type: 'data', handler: (message: T) => void): ResponseStream<T>;
  on(type: 'end', handler: (status?: Status) => void): ResponseStream<T>;
  on(type: 'status', handler: (status: Status) => void): ResponseStream<T>;
}
interface RequestStream<T> {
  write(message: T): RequestStream<T>;
  end(): void;
  cancel(): void;
  on(type: 'end', handler: (status?: Status) => void): RequestStream<T>;
  on(type: 'status', handler: (status: Status) => void): RequestStream<T>;
}
interface BidirectionalStream<ReqT, ResT> {
  write(message: ReqT): BidirectionalStream<ReqT, ResT>;
  end(): void;
  cancel(): void;
  on(type: 'data', handler: (message: ResT) => void): BidirectionalStream<ReqT, ResT>;
  on(type: 'end', handler: (status?: Status) => void): BidirectionalStream<ReqT, ResT>;
  on(type: 'status', handler: (status: Status) => void): BidirectionalStream<ReqT, ResT>;
}

export class BookStoreServiceClient {
  readonly serviceHost: string;

  constructor(serviceHost: string, options?: grpc.RpcOptions);
  getBooks(requestMessage: google_protobuf_empty_pb.Empty, metadata?: grpc.Metadata): ResponseStream<bookstore_pb.BookResponse>;
  getBook(
    requestMessage: bookstore_pb.BookRequest,
    metadata: grpc.Metadata,
    callback: (error: ServiceError|null, responseMessage: bookstore_pb.BookResponse|null) => void
  ): UnaryResponse;
  getBook(
    requestMessage: bookstore_pb.BookRequest,
    callback: (error: ServiceError|null, responseMessage: bookstore_pb.BookResponse|null) => void
  ): UnaryResponse;
}

