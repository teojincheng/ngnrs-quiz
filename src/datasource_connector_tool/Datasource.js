const ENDPOINT_URL = "https://static.ngnrs.io/test/prices";

/**
 * Javascript class
 * So, in a node.js project, this can class exists in one js file
 * and we can use module.exports to export this class.
 */
class Datasource {
  generateQuote(currencyPairStr) {
    const lastIndex = currencyPairStr.length;
    const startIndex = currencyPairStr.length - 3;
    let quote = currencyPairStr.substring(startIndex, lastIndex);
    return quote;
  }

  /**
   * getPrices is a function that returns a promise which
   * resolves the response of a xmlhttprequest.
   *
   */
  getPrices() {
    let self = this;
    var xhttp = new XMLHttpRequest();
    return new Promise(function (resolve, reject) {
      xhttp.onreadystatechange = function () {
        if (this.readyState == 4 && this.status == 200) {
          let jsonResponse = JSON.parse(xhttp.responseText);
          let arrOfCurrencyPair = jsonResponse.data.prices;
          let resultArr = [];
          for (let i = 0; i < arrOfCurrencyPair.length; i++) {
            let currPairObj = {};
            let newQuote = self.generateQuote(arrOfCurrencyPair[i].pair);
            currPairObj.pair = arrOfCurrencyPair[i].pair;
            currPairObj.mid =
              (arrOfCurrencyPair[i].buy + arrOfCurrencyPair[i].sell) / 2 / 100;
            currPairObj.quote = newQuote;
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
