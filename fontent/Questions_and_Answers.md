<div align="center">
  <img height="60" src="https://edurev.gumlet.io/AllImages/original/ApplicationImages/CourseImages/944e5d47-8c55-4a89-91e5-22ab5f2798fc_CI.png">
  <h1>MCQ TEST</h1>
</div>

###### 1. Write the `correct answer` from the following options and give an explanation (2-5 lines).

```javascript
let greeting;
greetign = {};
console.log(greetign);
```

- A: `{}`
- B: `ReferenceError: greetign is not defined`
- C: `undefined`

<details><summary><b>Answer</b></summary>
<p>

#### Answer:{}?

<i>Explanation : first do not assign any value to it at this point. So, greeting is declared but remains uninitialized, which means its value is undefined. And 2nd time assign an empty object {} to the greeting variable. Now, greeting contains an empty object as its value</i>

</p>
</details>

###### 2. Write the `correct answer` from the following options and give an explanation (2-5 lines).

```javascript
function sum(a, b) {
  return a + b;
}

sum(1, "2");
```

- A: `NaN`
- B: `TypeError`
- C: `"12"`
- D: `3`

<details><summary><b>Answer</b></summary>
<p>

#### Answer: "12" ?

<i>At first we declared a sum function where passed a number and a string. After passing into the function, the function returning the calculation of sum of a + b. Because a number and a string can not be added. So the function is converting the result into string as output</i>

</p>
</details>

###### 3. Write the `correct answer` from the following options and give an explanation (2-5 lines).

```javascript
const food = ["🍕", "🍫", "🥑", "🍔"];
const info = { favoriteFood: food[0] };

info.favoriteFood = "🍝";

console.log(food);
```

- A: `['🍕', '🍫', '🥑', '🍔']`
- B: `['🍝', '🍫', '🥑', '🍔']`
- C: `['🍝', '🍕', '🍫', '🥑', '🍔']`
- D: `ReferenceError`

<details><summary><b>Answer</b></summary>
<p>

#### Answer: `['🍕', '🍫', '🥑', '🍔']`?

<i>Then we are initializing an object with a property favoriteFood. Then setting the set to the first index of the food array. Then changing the value of info.favoriteFood. After this if we make console log the food array. It will not be changed the items of food array. Because we are modifying the info object, not the food array.</i>

</p>
</details>

###### 4. Write the `correct answer` from the following options and give an explanation (2-5 lines).

```javascript
function sayHi(name) {
  return `Hi there, ${name}`;
}

console.log(sayHi());
```

- A: `Hi there,`
- B: `Hi there, undefined`
- C: `Hi there, null`
- D: `ReferenceError`

<details><summary><b>Answer</b></summary>
<p>

#### Answer: Hi there, undefined ?

<i>This funtion 'name' parameter. but when we call sayHi() without providing any argument, the 'name' variable inside the function doesn't have a value assigned to it. So, when we call sayHi() without an argument, the function returns "Hi there, undefined"</i>

</p>
</details>

###### 5. Write the `correct answer` from the following options and give an explanation (2-5 lines).

```javascript
let count = 0;
const nums = [0, 1, 2, 3];

nums.forEach((num) => {
  if (num) count += 1;
});

console.log(count);
```

- A: 1
- B: 2
- C: 3
- D: 4

<details><summary><b>Answer</b></summary>
<p>

#### Answer: 3 ?

<i>In this code,  initialize a variable count to 0 and create an array nums with four elements: [0, 1, 2, 3]. You then use the forEach method to iterate over the elements of the nums array and increment the count variable whenever a truthy value is encountered within the if (num) condition.The if (num) condition checks if num is truthy. In JavaScript, 0 is considered falsy, and all other non-zero numbers are considered truthy. So, when num is 0, the condition evaluates to false, and count is not incremented. When num is 1, 2, or 3, the condition evaluates to true, and count is incremented by 1 for each of these values.Therefore, after through all items in the array index, the latest items in index result value 3</i>

</p>
</details>
