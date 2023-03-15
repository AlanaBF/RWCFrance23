import axios from "axios";
async function getNews() {
  const options = {
    method: "GET",
    url: "https://bing-news-search1.p.rapidapi.com/news/search",
    params: {
      q: "rugby world cup",
      count: "3",
      sortBy: "Date",
      setLang: "en",
      freshness: "Day",
      textFormat: "Raw",
      safeSearch: "Off",
    },
    headers: {
      "X-BingApis-SDK": "true",
      "X-RapidAPI-Key": "60e53c0caamsh79aaf583e2d534dp19d614jsn29e8c6116073",
      "X-RapidAPI-Host": "bing-news-search1.p.rapidapi.com",
    },
  };

  return await axios
    .request(options)
    .then(function (response) {
      console.log(response)
      return response;
    })
    .catch(function (error) {
      console.error('Here we found this: ' + error);
      return error
    });
}
export default getNews;
