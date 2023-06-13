/*
  Implement a function `calculateTotalSpentByCategory` which takes a list of transactions as parameter
  and return a list of objects where each object is unique category-wise and has total price spent as its value.
  Transaction - an object like { itemName, category, price, timestamp }.
  Output - [{ category1 - total_amount_spent_on_category1 }, { category2 - total_amount_spent_on_category2 }]

  Once you've implemented the logic, test your code by running
  - `npm run test-expenditure-analysis`
*/

function calculateTotalSpentByCategory(transactions) {
  const categoryMap = {};

  // Iterate over each transaction
  for (const transaction of transactions) {
    const { category, price } = transaction;

    // If the category already exists in the map, add the price to its total
    if (categoryMap.hasOwnProperty(category)) {
      categoryMap[category] += price;
    } else {
      // Otherwise, create a new entry for the category
      categoryMap[category] = price;
    }
  }
module.exports = calculateTotalSpentByCategory;
