exports.handler = async (event) => {
  let colours = [
    {
      type: 'Colour',
      colour: 'Green',
      questionText: 'What colour is this?'
    },
    {
      type: 'Colour',
      colour: 'Red',
      questionText: 'What colour is this?'
    },
    {
      type: 'Colour',
      colour: 'Blue',
      questionText: 'What colour is this?'
    },
    {
      type: 'Colour',
      colour: 'Yellow',
      questionText: 'What colour is this?'
    },
    {
      type: 'Colour',
      colour: 'Pink',
      questionText: 'What colour is this?'
    },
    {
      type: 'Colour',
      colour: 'Black',
      questionText: 'What colour is this?'
    },
    {
      type: 'Colour',
      colour: 'White',
      questionText: 'What colour is this?'
    },
    {
      type: 'Colour',
      colour: 'Orange',
      questionText: 'What colour is this?'
    }
  ];

  let randomColour = colours[Math.trunc(Math.random()*colours.length)];
  
  const response = {
      statusCode: 200,
      body: JSON.stringify(randomColour),
      isBase64Encoded: false
  };
  
  return response;
};