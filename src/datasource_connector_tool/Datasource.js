class Datasource {
  getPrices() {
    //console.log("hi");
    return new Promise(function (resolve, reject) {
      resolve("hi");
    });
    /*
      const promise1 = new Promise(function (resolve, reject) {
        resolve([1, 2, 3]);
      });
      return promise1;
      */
  }
}

module.exports = Datasource;
