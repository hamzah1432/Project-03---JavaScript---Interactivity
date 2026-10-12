function calculateGrade(score) {
  if (typeof score !== "number" || score < 0 || score > 100) {
    return "Invalid input";
  }

  if (score >= 90) {
    return "A";
  } else if (score >= 80) {
    return "B";
  } else if (score >= 70) {
    return "C";
  } else if (score >= 60) {
    return "D";
  } else {
    return "F";
  }
}

function checkAccess(age, hasTicket) {
  if (typeof age !== "number" || typeof hasTicket !== "boolean") {
    return false;
  }

  if (age >= 18 && hasTicket === true) {
    return true;
  }

  return false;
}

console.log("--- Testing calculateGrade ---");
console.log("100:", calculateGrade(100));
console.log("90:", calculateGrade(90));
console.log("89:", calculateGrade(89));
console.log("0:", calculateGrade(0));
console.log("-5:", calculateGrade(-5));
console.log("105:", calculateGrade(105));
console.log("'80':", calculateGrade("80"));

console.log("\n--- Testing checkAccess ---");
console.log("20, true:", checkAccess(20, true));
console.log("17, true:", checkAccess(17, true));
console.log("25, false:", checkAccess(25, false));
console.log("'20', true:", checkAccess("20", true));
