// https://betterprogramming.pub/think-again-before-you-use-array-reduce-28f785b5aea9
// 4 Reasons to Avoid Using Array.reduce
// Write more readable JavaScript without it

// 1. Array.reduce Can Be Hard to Understand


// 2. The Search for the Optional Initial Value Parameter
// reduce use case 1
const basket = [
    { name:"apple", type: "fruit", calories: 52 }, 
    { name:"broccoli", type: "vegetable", calories: 45 },
    { name:"banana", type: "fruit", calories: 89 }
  ];
  
  // Try to understand acc without looking at the last line
  const { avgCalories } = basket.reduce((acc, food) => {
    if (food.type !== "fruit"){
      return acc;
    }
     
    const fruitCount = acc.fruitCount + 1;
    const avgCalories = (acc.avgCalories * acc.fruitCount + food.calories) / fruitCount;
    
    return { fruitCount, avgCalories };
  }, { fruitCount: 0, avgCalories: 0 });

  console.log(avgCalories);
/////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////

  const basket2 = [
    { name:"apple", type: "fruit" }, 
    { name:"broccoli", type: "vegetable" }
  ];
  
  // Array.reduce can be used to filter fruits
  const fruits2 = basket.reduce((acc, food) => food.type === "fruit" ? acc.concat(food) : acc, []);
  
  // But Array.filter is better for it
  const fruits3 = basket.filter(food => food.type === "fruit");

  console.log(fruits2);
  console.log(fruits3);

  //////////////////////////////////////////////////////
  // 3. Are You Reducing, Filtering, or Mapping?
  // Add prices to each food in the basket

  const basket3 = [
    { name:"apple", type: "fruit", calories: 52 }, 
    { name:"broccoli", type: "vegetable", calories: 45 },
    { name:"banana", type: "fruit", calories: 89 }
  ];

  function getPrice(foodname) {
      return 100
  } 

  const basketWithPrices_reduce = basket.reduce((acc, food) => acc.concat({ ...food, price: getPrice(food) }), []);
  
  // But Array.map is better for it
  const basketWithPrices_map = basket.map(food => ({ ...food, price: getPrice(food)}));

  console.log(basketWithPrices_reduce);
  console.log(basketWithPrices_map);

///////////////////////////////////////////////////////////////////////////////////////////////////
// 4. You Can Always Write the Same Code Differently
// Aggregating numbers
const numbers = [1, 2, 3];
const total = numbers.reduce((sum, num) => sum + num);

console.log(total); // 6

let total2 = 0;
numbers.forEach(num => total2 += num);

console.log(total2) // 6


//
// Building objects from arrays
//
const members = [["name", "apple"], ["type", "fruit"]];

const food = members.reduce((obj, [key, value]) => {
  obj[key] = value;
  return obj;
}, Object.create(null));

console.log(food); // { name: "apple", type: "fruit" }

const obj = Object.create(null);
members.forEach(([key, value]) => obj[key] = value);

console.log(obj); // { name: "apple", type: "fruit" }

//
// Grouping objects
// 

function groupBy(arr, func){
    return arr
      .reduce((acc, item) => {
         const key = func(item);
         if (!acc[key]) {
           acc[key] = [];
         }
         acc[key].push(item);
         return acc;
      }, Object.create(null));
  }
  
  const basket4 = [
    { name:"apple", type: "fruit" }, 
    { name:"broccoli", type: "vegetable" },
    { name:"banana", type: "fruit" }
  ];
  
  const grouped = groupBy(basket, food => food.type);
  console.log(grouped); 
  /*
  Outputs:
  { 
    fruit: [
              {name: "apple", type: "fruit"}, 
              {name: "banana", type: "fruit"}
           ],
    vegetable: [{ name:"broccoli", type: "vegetable" }]
  }
  */

  function groupBy_foreach(arr, func){
    let grouped = Object.create(null);
    
    arr.forEach((item) => {
      const key = func(item);   
      if (!grouped[key]) {
        grouped[key] = [];
      }
      grouped[key].push(item);
    });

    return grouped;   
  }

  const grouped_foreach = groupBy_foreach(basket, food => food.type);
  console.log(grouped_foreach); 