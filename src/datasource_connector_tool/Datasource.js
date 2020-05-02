const ENDPOINT_URL = "https://static.ngnrs.io/test/prices";

/**
 * Javascript class
 * So, in a node.js project, this can class exists in one js file
 * and we can use module.exports to export this class.
 */
class Datasource {
  /**
   * getPrices is a function that returns a promise which
   * resolves the response of a xmlhttprequest.
   *
   */

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
            const lastIndex = arrOfCurrencyPair[i].pair.length;
            const startIndex = arrOfCurrencyPair[i].pair.length - 3;
            let newQuote = arrOfCurrencyPair[i].pair.substring(
              startIndex,
              lastIndex
            );
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
