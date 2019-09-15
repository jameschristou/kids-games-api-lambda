exports.handler = async (event) => {
  let game = {
      type: 'Colour',
      colour: 'Green',
      questionText: 'What colour is this?'
  };
  
  const response = {
      statusCode: 200,
      body: JSON.stringify(game),
      isBase64Encoded: false
  };
  
  return response;
};