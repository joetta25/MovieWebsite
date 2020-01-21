const axios = require('axios');

axios.get('http://www.omdbapi.com/?i=tt3896198&apikey=8f73e7a1').then(resp => {

console.log(resp.data);
})