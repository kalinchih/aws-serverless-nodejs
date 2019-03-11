// Disable "Use Lambda Proxy integration"
// event = request body
exports.handler = async event => {
  console.log(event);
  // Write to CloudWatch /aws/lambda/{Lambda Function Name}

  const response = {
    statusCode: 200,
    payload: event.reqBody,
    isbn: event.isbn
  };
  return response;
};

// Enable "Use Lambda Proxy integration"
// exports.handler = async event => {
//   console.log(event);
//   // Write to CloudWatch /aws/lambda/{Lambda Function Name}

//   const { isbn } = event.pathParameters;
//   const response = {
//     headers: { "Access-Control-Allow-Origin": "*" },
//     body: JSON.stringify({ isbn })
//   };

//   return response;
// };
