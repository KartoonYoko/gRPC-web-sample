
## Sample
protoc --plugin=protoc-gen-ts="{ABSOLUTE_PATH}/node_modules/.bin/ 
protoc-gen-ts.cmd" 
--js_out="import_style=commonjs,binary:./app/generated"
--ts_out="service=grpc-web:./app/generated" country.browser.proto country.shared.proto
--proto_path="{ABSOLUTE_PATH}/src/protos/v1"
--proto_path="C:/Protobufs"

## Current
protoc --plugin=protoc-gen-ts="C:\Users\crash\Desktop\delete\grpc web\BookStore\BookStore.Client\node_modules\.bin\protoc-gen-ts.cmd" --js_out="import_style=commonjs,binary:./src/app/generated" --ts_out="service=grpc-web:./src/app/generated" bookstore.proto --proto_path="C:\Users\crash\Desktop\delete\grpc web\BookStore\BookStore.Client\src\protos" --proto_path="C:/Protobuffs"