const dynastyReign = [
    { dynasty: "Sean", yearEnded: "MCMLXXIX" },
    { dynasty: "Rodriguez", yearEnded: "MCMLXXXI" },
    { dynasty: "Ivy", yearEnded: "MCMLXXXIV" },
    { dynasty: "Meloy", yearEnded: "MCMLXXXIV" },
    { dynasty: "Turado", yearEnded: "MCMLXXXIX" },
  ];
  
  function longestDynasty() {
    let longestDynasty = "";
    let longestReign = 0;
    for (const dynasty of dynastyReign) {
      const reign = convertYear(dynasty.yearEnded) - 1000;
      if (reign > longestReign) {
        longestReign = reign;
        longestDynasty = dynasty.dynasty;
      }
    }
    return longestDynasty;
  }
  
  function convertYear(year) {
    const romanNumerals = {
      M: 1000,
      CM: 900,
      D: 500,
      CD: 400,
      C: 100,
      XC: 90,
      L: 50,
      XL: 40,
      X: 10,
      IX: 9,
      V: 5,
      IV: 4,
      I: 1,
    };
    let total = 0;
    for (const romanNumeral in romanNumerals) {
      const count = year.split(romanNumeral).length;
      total += romanNumerals[romanNumeral] * count;
    }
    return total;
  }
  
  console.log(longestDynasty());