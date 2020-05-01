const ENDPOINT_URL = "https://static.ngnrs.io/test/prices";
class Datasource {
  getPrices() {
    var xhttp = new XMLHttpRequest();
    return new Promise(function (resolve, reject) {
      xhttp.onreadystatechange = function () {
        if (this.readyState == 4 && this.status == 200) {
          let jsonResponse = JSON.parse(xhttp.responseText);
          let arrOfCurrencyPair = jsonResponse.data.prices;
          let resultArr = [];
          for (let i = 0; i < arrOfCurrencyPair.length; i++) {
            let currPairObj = {};
            currPairObj.pair = arrOfCurrencyPair[i].pair;
            currPairObj.mid =
              (arrOfCurrencyPair[i].buy + arrOfCurrencyPair[i].sell) / 2;
            resultArr.push(currPairObj);
          }
          resolve(resultArr);
        }
      };
      xhttp.open("GET", ENDPOINT_URL, true);
      xhttp.send();
    });
  }
}

module.exports = Datasource;
