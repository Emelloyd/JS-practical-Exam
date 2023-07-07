const productProfitArray = [
    { product: "Product B", profit: 100 },
    { product: "Product B", profit: -50 },
    { product: "Product C", profit: -20 },
    { product: "Product D", profit: 150 },
  ];
  
  function topProduct() {
    let topProduct = "";
    let maxProfit = Number.NEGATIVE_INFINITY;
    for (const product of productProfitArray) {
      if (product.profit > maxProfit) {
        maxProfit = product.profit;
        topProduct = product.product;
      }
    }
    return topProduct;
  }
  
  function bottomProduct() {
    let bottomProduct = "";
    let minProfit = Number.POSITIVE_INFINITY;
    for (const product of productProfitArray) {
      if (product.profit < minProfit) {
        minProfit = product.profit;
        bottomProduct = product.product;
      }
    }
    return bottomProduct;
  }
  
  function zeroProfitProduct() {
    let zeroProfitProduct = "";
    let closestToZero = Number.POSITIVE_INFINITY;
    for (const product of productProfitArray) {
      const currentProfit = product.profit;
      const absoluteDifference = Math.abs(currentProfit);
      if (absoluteDifference < closestToZero) {
        closestToZero = absoluteDifference;
        zeroProfitProduct = product.product;
      } else if (absoluteDifference === closestToZero && currentProfit > 0) {
        zeroProfitProduct = product.product;
      }
    }
    return zeroProfitProduct;
  }
  
  console.log(topProduct());
  console.log(bottomProduct());
  console.log(zeroProfitProduct());