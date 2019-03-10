exports.handler = async event => {
  console.log(event);
  // Write to CloudWatch /aws/lambda/{Lambda Function Name}

  // Disable "Use Lambda Proxy integration"
  // event = request body
  const response = {
    statusCode: 200,
    payload: event.reqBody
  };
  return response;

  // Disable "Use Lambda Proxy integration"
  // event = raw request & some AWS information
  // return {headers: {'Access-Control-Allow-Origin': '*'}};
};
