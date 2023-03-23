import axios from "axios";
async function getNews() {
  const options = {
    method: 'GET',
    url: 'https://bing-news-search1.p.rapidapi.com/news/search',
    params: {
      q: 'world cup rugby',
      count: '3',
      sortBy: 'Date',
      setLang: 'en',
      freshness: 'Day',
      originalImg: 'true',
      textFormat: 'Raw',
      safeSearch: 'Off'
    },
    headers: {
      'X-BingApis-SDK': 'true',
      'X-RapidAPI-Key': 'db60a21bf6msh0c7c9e1851c4408p1d3b11jsnca09255a288c',
      'X-RapidAPI-Host': 'bing-news-search1.p.rapidapi.com'
    }
  };
  
  return await axios.request(options).then(function (response) {
    return response.data
  }).catch(function (error) {
    return error
  });

 
}
export default getNews;
