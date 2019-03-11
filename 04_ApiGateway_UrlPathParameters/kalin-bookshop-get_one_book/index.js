exports.handler = async event => {
  const { isbn } = event.pathParameters;
  const response = {
    headers: { "Access-Control-Allow-Origin": "*" },
    body: JSON.stringify({ isbn })
  };

  return response;
};
