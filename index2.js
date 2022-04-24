const { fetchCoordsByIp } = require('./iss_promised');
const { fetchMyIP, fetchISSFlyOverTimes } = require('./iss_promised');
const { nextISSTimesForMyLocation } = require('./iss_promised');
const { printPassTimes } = require('./index');

nextISSTimesForMyLocation()
  .then((passTimes) => {
    printPassTimes(passTimes);
  })
  .catch((error) => {
    console.log("It didn't work: ", error.message);
  });

fetchMyIP()
  .then(fetchCoordsByIp)
  .then(fetchISSFlyOverTimes)
  .then(body => console.log(body));
  