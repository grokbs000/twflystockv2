import yahooFinance from "yahoo-finance2";

async function test() {
  console.log("Searching for 台指VIX...");
  const searchResults = await yahooFinance.search("台指VIX");
  console.log("Search Results:", JSON.stringify(searchResults.quotes, null, 2));
}

test();
