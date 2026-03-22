import yahooFinance from "yahoo-finance2";

async function test() {
  const result = await yahooFinance.quote("1227.TW");
  console.log("1227.TW Quote:");
  console.log("PriceToBook:", result.priceToBook);
  console.log("TrailingAnnualDividendYield:", result.trailingAnnualDividendYield);
  console.log("DividendYield:", result.dividendYield);
  
  const result2 = await yahooFinance.quote("2330.TW");
  console.log("\n2330.TW Quote:");
  console.log("PriceToBook:", result2.priceToBook);
  console.log("DividendYield:", result2.dividendYield);
}

test();
