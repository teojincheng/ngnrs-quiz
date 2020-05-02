// Problem 2
// Task: Implement a datasource connector to abstract away data retrieval and manipulation from the `ViewControllers`.
// Your solution shall use only [Vanilla JavaScript](http://vanilla-js.com).

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

  calcuateMid(currencyPairObj) {
    let mid = (currencyPairObj.buy + currencyPairObj.sell) / 2 / 100;
    return mid;
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
            currPairObj.mid = self.calcuateMid(arrOfCurrencyPair[i]);
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

/**
 * In a node.js project, we can use require()
 * to import the datasource class defined above then create
 * a new object of the datasource class in another js file.
 *
 * call the datasource object's getPrice() function with a .then() to invoke the
 * function after the promise is resolved.
 */

let ds = new Datasource();

ds.getPrices().then(function (prices) {
  prices.forEach((price) => {
    console.log(price.pair, price.mid, price.quote);
  });
});
