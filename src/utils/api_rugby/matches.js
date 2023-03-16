import axios from "axios";

const getMatches = async () => {

  const options = {
    method: 'GET',
    url: 'https://rugby-live-data.p.rapidapi.com/fixtures/1272/2024',
    headers: {
      'X-RapidAPI-Key': 'f6e85a3537msh16a1b454499b4afp16528ejsn68b2051e2547',
      'X-RapidAPI-Host': 'rugby-live-data.p.rapidapi.com'
    }
  };

  return await axios.request(options).then(function (response) {
    console.log(response.data);
    return response.data
  }).catch(function (error) {
    console.error(error);
  });
}

export default getMatches