[![Review Assignment Due Date](https://classroom.github.com/assets/deadline-readme-button-24ddc0f5d75046c5622901739e7c5dd533143b0c8e959d652212380cedb1ea36.svg)](https://classroom.github.com/a/AXifRa45)
[![Open in Visual Studio Code](https://classroom.github.com/assets/open-in-vscode-718a45dd9cf7e7f842a935f5ebbe5719a5e09af4491e668f4dbf3b35d5cca122.svg)](https://classroom.github.com/online_ide?assignment_repo_id=12343924&assignment_repo_type=AssignmentRepo)
# assignment-5-template
Template project for JavaScript Introduction Assignment
# Problem 1 - Count Words
**Objective:** Implement a function that counts all the words in the input sentence and returns an object with the word as the key and count as the value.

**Approach:**
1. Convert the input sentence to lowercase and remove any punctuations if present.
2. Split the sentence into an array of words.
3. Traverse the array, count occurrences, and store this in a new array.

### Usage Example:
```javascript
const sentence = "This is a sample sentence. This is another sentence.";
const wordCounts = countWords(sentence);
console.log(wordCounts);
```

# Problem 2 - Filter and reverse
**Objective:** Implement a function should create a shallow copy of the reversed array, filtered down to just the elements from the given array that pass the test implemented by the provided callbackFn function.<br><br>
**Approach:**
1. Define callback function that will return true if number is even.
2. Callback while filtering the array.
3. Reverse the final filtered array.
### Usage Example:
```javascript
inp = [4, 8,3,1, -20, -7, 5, 9, -6]
//inp = []
console.log(filterAndReverse(inp, filterNum))
console.log(inp)
```
# Problem 3 - Search tree based on selector
**Objective:** Implement a function Returns all nodes matching the tag name selector.<br><br>
**Approach:**
1. Method to check if it's a root node, if so exclude it.
2. Create selector comparator to check based on selector type.
3. Do search and match recursively for child nodes.
### Usage Example:
```javascript
// Create the DOM tree...
const body = new Node("body", [], ["mainContainer"], "content");
const div1 = new Node("div", [], ["mainContainer"], "div-1");
const span1 = new Node("span", [], ["note"], "span-1");
const span2 = new Node("span", [], [], "span-2");
const div2 = new Node("div", [], ["subContainer1"], "div-2");
const para1 = new Node("p", [], ["sub1-p1", "note"], "para-1");
const span3 = new Node("span", [], ["sub1-span3"], "span-3");
const div3 = new Node("div", [], ["subContainer2"], "div-3");
const sec1 = new Node("section", [], [], "sec-1");
const lbl1 = new Node("label", [], [], "lbl-1");
const div4 = new Node("div", [], [], "div-4");
const span4 = new Node("span", [], ["mania"], "span-4");
const span5 = new Node("span", [], ["note", "mania"], "span-5");
const span6 = new Node("span", [], ["randomSpan"], "span-6");

// Construct the DOM tree structure
body.children = [div1, span6];
div1.children = [span1, span2, div2, div3, div4];
div2.children = [para1, span3];
div3.children = [sec1];
sec1.children = [lbl1];
div4.children = [span4, span5];


// Test the search method with different selectors:
console.log(div1.search("div"))
console.log(div1.search("span"), "tc1"); // Test case 1
console.log(div1.search(".note")); // Test case 2
console.log(body.search("#span-2"), "tc2.2"); // Test case 2.2
console.log(div1.search("label")); // Test case 3
console.log(para1.search(".note"), "tc4"); // Test case 4
console.log(div1.search("div")); // Test case 5
console.log(div4.search("div")); // Test case 6
console.log(div2.search("section")); // Test case 7
console.log(body.search(), "tc8"); // Test case 8
console.log(body.search("section")); // Test case 9
console.log(div1.search(".randomSpan"), "tc10"); // Test case 10
console.log(body.search(".randomSpan"), "tc10.2"); // Test case 10
```
