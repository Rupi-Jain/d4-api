const request = require('request');
const fs = require('fs')

const breed = (process.argv).slice(2)
request('https://api.thecatapi.com/v1/breeds/search?q=' + breed , (error, response, body) => {
//console.log('error:' , error );
if (error === null) {
  const data = JSON.parse(body);

  if (data.length === 0) {
    console.log("Sorry! no results are found!!")
  }
  else {
    console.log(data[0]['description']);
  }
}
else {
  if (error['code'] === 'ENOTFOUND') {
    console.log("This site can't be reached. Check if there is a typo!!!");
  }
  return;
}

})

