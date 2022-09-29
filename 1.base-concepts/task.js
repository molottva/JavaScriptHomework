"use strict";

function solveEquation(a, b, c) {
  let arr = [];
  let disc = b * b - 4 * a * c;
  if (disc > 0) {
    arr.push((-b + Math.sqrt(disc)) / 2 / a);
    arr.push((-b - Math.sqrt(disc)) / 2 / a);
  } else if (disc == 0) {
    arr.push(-b / 2 / a);
  }
  return arr;
}

function calculateTotalMortgage(percent, contribution, amount, date) {
  let totalAmount;
  percent = parseFloat(percent);
  contribution = parseInt(contribution);
  amount = parseInt(amount);
  //todo added validate

  let endDate = new Date(date);
  let nowDate = new Date(Date.now);
  let totalMonth = (endDate.getFullYear - nowDate.getFullYear) * 12 + endDate.getMonth - nowDate.getMonth;
  let percentPerMonth = percent / 12;

  amountPerMonth = amount * (percentPerMonth + (percentPerMonth / (Math.pow(1 + percentPerMonth, totalMonth))));
  totalAmount = (amountPerMonth * totalAmount).toFixed(2);
  return totalAmount;
}
