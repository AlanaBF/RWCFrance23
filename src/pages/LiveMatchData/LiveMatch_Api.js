import axios from "axios";

const getLiveData = async (query) => {

const options = {
  method: 'GET',
  url: `https://rugby-live-data.p.rapidapi.com/match/${query}`,
  headers: {
    'X-RapidAPI-Key': '9c0d21cd2cmsh0183c6129c877e2p107eecjsnab6a857eda0c',
    'X-RapidAPI-Host': 'rugby-live-data.p.rapidapi.com'
  }
};

return await axios.request(options).then(function (response) {
	return response.data;
}).catch(function (error) {
	return error
});
}

export default getLiveData