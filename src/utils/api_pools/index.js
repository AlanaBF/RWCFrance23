import axios from "axios";

const getPools = async () => {
  const options = {
    method: "GET",
    url: "https://rugby-live-data.p.rapidapi.com/standings/1272/2024",
    headers: {
      "X-RapidAPI-Key": "d2693575e6msh2b618f6d60d310ap1fd4e8jsn5c9a6c6b4ae7",
      "X-RapidAPI-Host": "rugby-live-data.p.rapidapi.com",
    },
  };

  return await axios
    .request(options)
    .then(function (response) {
      return response.data
    })
    .catch(function (error) {
      return error
    });
};
export default getPools;
