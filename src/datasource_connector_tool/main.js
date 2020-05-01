const Datasource = require("./Datasource");

let ds = new Datasource();

ds.getPrices().then(function (prices) {
  prices.forEach((price) => {
    console.log(price.pair, price.mid);
  });
});
