import axios from "axios";

const getExampleData = async () => {

const options = {
  method: 'GET',
  url: `https://rugby-live-data.p.rapidapi.com/match/8391967`,
  headers: {
    'X-RapidAPI-Key': '651de565e1msh496d8bbe1965ca2p10954ejsne0818fbfc744',
    'X-RapidAPI-Host': 'rugby-live-data.p.rapidapi.com'
  }
};

return await axios.request(options).then(function (response) {
	return response.data;
}).catch(function (error) {
	return error
});
}

export default getExampleData