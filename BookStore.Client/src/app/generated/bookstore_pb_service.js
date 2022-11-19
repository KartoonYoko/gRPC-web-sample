// package: BookService.v1
// file: bookstore.proto

var bookstore_pb = require("./bookstore_pb");
var google_protobuf_empty_pb = require("google-protobuf/google/protobuf/empty_pb");
var grpc = require("@improbable-eng/grpc-web").grpc;

var BookStoreService = (function () {
  function BookStoreService() {}
  BookStoreService.serviceName = "BookService.v1.BookStoreService";
  return BookStoreService;
}());

BookStoreService.GetBooks = {
  methodName: "GetBooks",
  service: BookStoreService,
  requestStream: false,
  responseStream: true,
  requestType: google_protobuf_empty_pb.Empty,
  responseType: bookstore_pb.BookResponse
};

BookStoreService.GetBook = {
  methodName: "GetBook",
  service: BookStoreService,
  requestStream: false,
  responseStream: false,
  requestType: bookstore_pb.BookRequest,
  responseType: bookstore_pb.BookResponse
};

exports.BookStoreService = BookStoreService;

function BookStoreServiceClient(serviceHost, options) {
  this.serviceHost = serviceHost;
  this.options = options || {};
}

BookStoreServiceClient.prototype.getBooks = function getBooks(requestMessage, metadata) {
  var listeners = {
    data: [],
    end: [],
    status: []
  };
  var client = grpc.invoke(BookStoreService.GetBooks, {
    request: requestMessage,
    host: this.serviceHost,
    metadata: metadata,
    transport: this.options.transport,
    debug: this.options.debug,
    onMessage: function (responseMessage) {
      listeners.data.forEach(function (handler) {
        handler(responseMessage);
      });
    },
    onEnd: function (status, statusMessage, trailers) {
      listeners.status.forEach(function (handler) {
        handler({ code: status, details: statusMessage, metadata: trailers });
      });
      listeners.end.forEach(function (handler) {
        handler({ code: status, details: statusMessage, metadata: trailers });
      });
      listeners = null;
    }
  });
  return {
    on: function (type, handler) {
      listeners[type].push(handler);
      return this;
    },
    cancel: function () {
      listeners = null;
      client.close();
    }
  };
};

BookStoreServiceClient.prototype.getBook = function getBook(requestMessage, metadata, callback) {
  if (arguments.length === 2) {
    callback = arguments[1];
  }
  var client = grpc.unary(BookStoreService.GetBook, {
    request: requestMessage,
    host: this.serviceHost,
    metadata: metadata,
    transport: this.options.transport,
    debug: this.options.debug,
    onEnd: function (response) {
      if (callback) {
        if (response.status !== grpc.Code.OK) {
          var err = new Error(response.statusMessage);
          err.code = response.status;
          err.metadata = response.trailers;
          callback(err, null);
        } else {
          callback(null, response.message);
        }
      }
    }
  });
  return {
    cancel: function () {
      callback = null;
      client.close();
    }
  };
};

exports.BookStoreServiceClient = BookStoreServiceClient;

