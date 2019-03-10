# Hello API Gateway

Create a Mock API

## 1. Create API

- API name: kalin-compare_yourself
- ![Screenshot](1_create_api.png)

## 2. Create Resource

- Resource Name: comparisons
- ![Screenshot](2_create_resource.png)

## 3. Create Method

- Method: GET

## 4. Integration Request

- Integration type: Mock
- ![Screenshot](4_integration_type.png)

## 5. Integration Response

- Mapping Templates > Content-Type > application/json:
- ![Screenshot](5_integration_response.png)

```
{"message":"hello"}
```

## 6. Deploy API

- New Stage name: dev
- ![Screenshot](6_deploy_api.png)
- Copy invoke URL
- ![Screenshot](6_invoke_url.png)

### 7. Verify on browser

- ![Screenshot](7_verify.png)
