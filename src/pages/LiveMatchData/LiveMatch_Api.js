import axios from "axios";

const getLiveData = async (query) => {

const options = {
  method: 'GET',
  url: `https://rugby-live-data.p.rapidapi.com/match/${query}`,
  headers: {
    'X-RapidAPI-Key': '228422081bmshe889dec37a66624p1ebd42jsne3efa780d793',
    'X-RapidAPI-Host': 'rugby-live-data.p.rapidapi.com'
  }
};

return await axios.request(options).then(function (response) {
	return response.data;
}).catch(function (error) {
	console.error(error);
});
}

export default getLiveData