# Mapping Templates

## 1. Use Lambda Proxy integration in Integration Request

- Disable (default): event = request body
  - Recommend with [mapping template](https://docs.aws.amazon.com/apigateway/latest/developerguide/api-gateway-mapping-template-reference.html) to make Lambda focus on logic
- Enable: event = raw request & some AWS information

## 2. Mapping Template in Integration Request/Response

[Lambda code](lambda/kalin-compare_yourself-create_comparison/index.js)

### API Gateway Mapping Template (request)

- Request body passthrough: Never
- Content-Type: application/json
- Template:

```
{
  "reqBody" : $input.json('$')
}
```

### API Gateway Mapping Template (reqponse)

```
{
  "yourAge" : $input.json('$.payload.age')
}
```

### Verify

```
// Request header:
Content-type:application/json;charset=utf8

// Request body:
{ "name": "Mary", "age": 16 }

// Response body:
{ "yourAge": 16 }
```

## 3. Template Example

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

- Also see: [Apache Velocity Language](http://velocity.apache.org/)
