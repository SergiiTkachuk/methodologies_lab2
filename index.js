'use strict';
const { List } = require("./src/LinkedListArray.js");

const list = new List(); // {}
console.log(`The length of an empty list: ${list.length()}\n`);

list.append('1'); // {1}
console.log(`After we appended an element, the length of the list: ${list.length()}`);
list.append('2'); // {1, 2}
console.log(`With two elements appended, the length of the list: ${list.length()}`);

list.insert('3', 1); // {1, 3, 2}
console.log(`Inserted element in index 1: ${list.get(1)}, list length: ${list.length()}\n`);

console.log(`Deleted element: ${list.delete(1)}`); // {1, 2}
console.log(`Now the list length is ${list.length()}\n`);

list.append('4');
list.append('4');
list.append('4');
console.log(`Appended three similar elements, list length: ${list.length()}`); // {1, 2, 4, 4, 4}

list.deleteAll('4');
console.log(`List length after deleting all new similar elements: ${list.length()}`); // {1, 2}

list.deleteAll('4');
console.log(`Trying to do this again with the same parameter, nothing changes; list length: ${list.length()}\n`); // {1, 2}

list.append('5');
list.append('6');
list.append('7'); // {1, 2, 5, 6, 7}

console.log(`Getting an element with index 0: ${list.get(0)}`); // 1
console.log(`Getting an element with index 2: ${list.get(2)}`); // 5
console.log(`Getting an element with index 4: ${list.get(4)}\n`); // 7

const copiedList = list.clone();
console.log(`Getting an element from a copied list with index 0: ${copiedList.get(0)}`); // 1
console.log(`Getting an element from a copied list with index 2: ${copiedList.get(2)}`); // 5
console.log(`Getting an element from a copied list with index 4: ${copiedList.get(4)}\n`); // 7

list.reverse(); // {7, 6, 5, 2, 1}
console.log('The list has been reversed.');
console.log(`Getting an element with index 0: ${list.get(0)}`); // 7
console.log(`Getting an element with index 2: ${list.get(2)}`); // 5
console.log(`Getting an element with index 4: ${list.get(4)}\n`); // 1

list.append('6'); // {7, 6, 5, 2, 1, 6}
console.log(`Appended an element ${list.get(list.length() - 1)}`);
console.log(`Its first index in the list: ${list.findFirst('6')}`);
console.log(`Its last index in the list: ${list.findLast('6')}\n`);

list.clear();
console.log(`The list has been cleared, its length is: ${list.length()}\n`);

list.extend(copiedList); // {1, 2, 5, 6, 7}
console.log(`Getting an element with index 0 from extended list: ${list.get(0)}`); // 1
console.log(`Getting an element with index 2 from extended list: ${list.get(2)}`); // 5
console.log(`Getting an element with index 4 from extended list: ${list.get(4)}\n`); // 7

list.delete(4); // {1, 2, 5, 6}
console.log(`Deleted an element, list length is: ${list.length()}`);
console.log(`The list we used to extend has not been changed, its length: ${copiedList.length()}\n`);