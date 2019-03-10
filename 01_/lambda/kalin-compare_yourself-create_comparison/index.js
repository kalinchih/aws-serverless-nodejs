exports.handler = async event => {
  const response = {
    statusCode: 200,
    body: "Hello from Lambda!"
  };
  return response;
};
