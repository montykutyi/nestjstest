const request = require('request');

function req()
{
  
  request('http://localhost:12001/hellobello', function (error, response, body) 
  {
    console.log('statusCode:', response && response.statusCode);
    if (error)
      console.error('error:', error);
    
  });

}


req();
