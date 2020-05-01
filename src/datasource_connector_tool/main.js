const Datasource = require("./Datasource");

let ds = new Datasource();

ds.getPrices().then(function (value) {
  console.log(value);
});
