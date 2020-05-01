const ENDPOINT_URL = "https://static.ngnrs.io/test/prices";
class Datasource {
  getPrices() {
    var xhttp = new XMLHttpRequest();
    return new Promise(function (resolve, reject) {
      xhttp.onreadystatechange = function () {
        if (this.readyState == 4 && this.status == 200) {
          // Typical action to be performed when the document is ready:
          resolve(xhttp.responseText);
        }
      };
      xhttp.open("GET", "https://static.ngnrs.io/test/prices", true);
      xhttp.send();
    });
  }
}

module.exports = Datasource;
