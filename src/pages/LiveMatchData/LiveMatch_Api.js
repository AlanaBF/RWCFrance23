import axios from "axios";

const getLiveData = async (query) => {

const options = {
  method: 'GET',
  url: `https://rugby-live-data.p.rapidapi.com/match/${query}`,
  headers: {
    'X-RapidAPI-Key': 'acac9841dcmsh8f034e6b2ce1787p1996dejsn647a457a7e29',
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