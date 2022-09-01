const request = require("request");

// https://api.thecatapi.com/v1/breeds/search?q=sib


const fetchBreedDescription = (breedName, callback) => {
  request(`https://api.thecatapi.com/v1/breeds/search?q=${breedName}`,
    (error, resp, body) => {
      if (error) {
        // console.log("error: failed request");
        return callback(error, null);
      }
      const data = JSON.parse(body);
      const cat = data[0];
      if (cat) {
        return callback(null, cat.description);
      }
    }
  );
};

// fetchBreedDescription("sib");
// console.log(data.name);
// const data = JSON.parse(body);
// console.log(data.name);
// console.log(typeof data);


// request(url, (error, resp, body) => {})

module.exports = { fetchBreedDescription };