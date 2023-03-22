const axios = require("axios");

const options = {
  method: 'GET',
  url: 'https://rugby-live-data.p.rapidapi.com/standings/1272/2024',
  headers: {
    'X-RapidAPI-Key': 'db60a21bf6msh0c7c9e1851c4408p1d3b11jsnca09255a288c',
    'X-RapidAPI-Host': 'rugby-live-data.p.rapidapi.com'
  }
};

axios.request(options).then(function (response) {
	console.log(response.results);
    return response.data
}).catch(function (error) {
	console.error(error);
});