# Mapping Templates & Model

## Mapping Templates

Lambda only gets the raw request body via 'event'. How to get headers or the necessary parameters which Lambda needs?

- Solution 1: Use Lambda Proxy integration in Integration Request

  - Enable: event = raw request & some AWS information
  - Disable (default): event = request body
    - Recommend with [mapping template](https://docs.aws.amazon.com/apigateway/latest/developerguide/api-gateway-mapping-template-reference.html) to make Lambda focus on logic

- Solution 2: Mapping Template in Integration Request/Response
  - [Lambda code](lambda/kalin-bookshop-create_book/index.js)

## Transform input/output interface by Mapping Template

### 1. API Gateway Mapping Template (request)

- Request body passthrough: Never
- Content-Type: application/json
- Template:

```
{
  "reqBody" : $input.json('$')
}
```

### 2. API Gateway Mapping Template (response)

```
{
  "book" : $input.json('$.payload')
}
```

### 3. Verify in Postman

```
// Request header:
Content-type:application/json;charset=utf8

// Request body:
{
  "name": "Refactoring: Improving the Design of Existing Code",
  "authors": ["Martin Fowler", "Kent Beck"]
}

// Response body:
{
    "book": {
        "name": "Refactoring: Improving the Design of Existing Code",
        "authors": [
            "Martin Fowler",
            "Kent Beck"
        ]
    }
}
```

### More Template Examples

```
// Use this template
{
  "personName": "$input.json('$.person.name')",
  "personAge": $input.json('$.person.age'),
  "orderId": "$input.json('$.order.id')"
}

// to transform the input
{
    person: {
        name: "Max",
        age: 28
    },
    order: {
        id: "6asdf821ssa"
    }
}

// to
{
  personName: "Max",
  personAge: 28,
  orderId: "6asdf821ssa"
}

```

- Also see: Java-based template engine: [Apache Velocity Language](http://velocity.apache.org/)

## Model

Using Model to define and validate the request/response interface.
