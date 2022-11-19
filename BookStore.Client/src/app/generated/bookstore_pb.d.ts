// package: BookService.v1
// file: bookstore.proto

import * as jspb from "google-protobuf";
import * as google_protobuf_empty_pb from "google-protobuf/google/protobuf/empty_pb";

export class BookResponse extends jspb.Message {
  getId(): number;
  setId(value: number): void;

  getTitle(): string;
  setTitle(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): BookResponse.AsObject;
  static toObject(includeInstance: boolean, msg: BookResponse): BookResponse.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: BookResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): BookResponse;
  static deserializeBinaryFromReader(message: BookResponse, reader: jspb.BinaryReader): BookResponse;
}

export namespace BookResponse {
  export type AsObject = {
    id: number,
    title: string,
  }
}

export class BookRequest extends jspb.Message {
  getId(): number;
  setId(value: number): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): BookRequest.AsObject;
  static toObject(includeInstance: boolean, msg: BookRequest): BookRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: BookRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): BookRequest;
  static deserializeBinaryFromReader(message: BookRequest, reader: jspb.BinaryReader): BookRequest;
}

export namespace BookRequest {
  export type AsObject = {
    id: number,
  }
}

