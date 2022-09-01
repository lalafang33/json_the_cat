const request = require("request");

// https://api.thecatapi.com/v1/breeds/search?q=sib


const fetchBreed = (breedName) => {
  request(`https://api.thecatapi.com/v1/breeds/search?q=${breedName}`,
    (error, resp, body) => {
      if (error) {
        console.log("error: failed request");
      }
      const data = JSON.parse(body);
      // console.log("body:", body);
      console.log(data[0].name);
      console.log(typeof data);
    }

  );
};

fetchBreed("sib");
// console.log(data.name);
// const data = JSON.parse(body);
// console.log(data.name);
// console.log(typeof data);


// request(url, (error, resp, body) => {})