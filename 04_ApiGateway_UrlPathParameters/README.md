# URL Path Parameters

- GET /dev/books: to list all books
- GET /dev/books/{isbn}: to get one book by ISBN

## 1. [Lambda service] Create a Lambda function

- Function name: kalin-bookshop-get_one_book
- Runtime: Node.js 8.10
- [Lambda code](lambda/kalin-bookshop-get_one_book/index.js)

## 2. [API Gateway] Create {isbn} resource

- Resource Name: {isbn}
- Resource Path: /books/{isbn}
- Enable API Gateway CORS: checked

## 3-1. [API Gateway] Create GET Method (Use Lambda Proxy integration)

- Integration type: Lambda Function
- Use Lambda Proxy integration: checked
- Lambda Function: kalin-bookshop-get_one_book

## 3-2. [API Gateway] Create GET Method (Use [Mapping Template](https://docs.aws.amazon.com/apigateway/latest/developerguide/api-gateway-mapping-template-reference.html))

- Integration type: Lambda Function
- Use Lambda Proxy integration: unchecked
- Lambda Function: kalin-bookshop-get_one_book
- Integration Request:
  - Mapping Templates > Request body passthrough > Never > application/json:
  ```
  {
    "isbn": "$input.params('isbn')",
    "reqBody" : $input.json('$')
  }
  ```

## 4. [API Gateway] Check URL Path Parameters in 'Method Request'

- URL Path Parameters:
  - Name: isbn

## 5. Verify on browser

```
Request URL:
https://API.execute-api.ap-northeast-1.amazonaws.com/dev/books/xyz

Response body:
{
  isbn: "xyz"
}
```
