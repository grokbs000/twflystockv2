import { screenStock } from "./server/stockEngine.js";

async function test() {
  console.log("Testing screenStock for 1227...");
  const result = await screenStock("1227", "佳格");
  if (result) {
    console.log("Result for 1227:");
    console.log("PBR:", result.pbrValue);
    console.log("Yield:", result.yieldValue);
    console.log("VIX:", result.vixValue);
    console.log("Monthly K:", result.monthlyKValue);
    console.log("Conditions Met:", result.conditionsMetCount);
  } else {
    console.log("Failed to screen 1227");
  }

  console.log("\nTesting screenStock for 2330...");
  const result2 = await screenStock("2330", "台積電");
  if (result2) {
    console.log("Result for 2330:");
    console.log("PBR:", result2.pbrValue);
    console.log("Yield:", result2.yieldValue);
    console.log("VIX:", result2.vixValue);
  }
}

test();
