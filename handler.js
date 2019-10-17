exports.handler = async (event) => {
  let colours = [
    {
      type: 'Colour',
      colour: 'Green',
      colourCode: '#00FF00',
      questionText: 'What colour is this?'
    },
    {
      type: 'Colour',
      colour: 'Red',
      colourCode: '#FF0000',
      questionText: 'What colour is this?'
    },
    {
      type: 'Colour',
      colour: 'Blue',
      colourCode: '#0000FF',
      questionText: 'What colour is this?'
    },
    {
      type: 'Colour',
      colour: 'Yellow',
      colourCode:'#FFFF00',
      questionText: 'What colour is this?'
    },
    {
      type: 'Colour',
      colour: 'Pink',
      colourCode: '#FF00FF',
      questionText: 'What colour is this?'
    },
    {
      type: 'Colour',
      colour: 'Black',
      colourCode: '#000000',
      questionText: 'What colour is this?'
    },
    {
      type: 'Colour',
      colour: 'White',
      colourCode: '#FFFFFF',
      questionText: 'What colour is this?'
    },
    {
      type: 'Colour',
      colour: 'Orange',
      colourCode: '#F39C12',
      questionText: 'What colour is this?'
    }
  ];

  let randomColour = colours[Math.trunc(Math.random()*colours.length)];
  
  const response = {
      statusCode: 200,
      body: JSON.stringify(randomColour),
      isBase64Encoded: false,
      headers: {
        "Access-Control-Allow-Origin": "*"
      },
  };
  
  return response;
};