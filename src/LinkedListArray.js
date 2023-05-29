'use strict';
const { validateIndex, validateCharType } = require('./validations.js');

class List {
    constructor() {
        this.array = [];
    }

    // Returns the number of elements in the list
    // Returns 0 if the list is empty
    length() {
        return this.array.length;
    }

    // Adds an element to the end of the list
    append(element) {
        validateCharType(element);
        this.array.push(element);
    }

    // Inserts an element at a specific position in the list
    // Throws an error if the index is out of range
    insert(element, index) {
        validateCharType(element);
        validateIndex(index, this.length());
        this.array.splice(index, 0, element);
    }

    // Deletes an element at a specific position in the list and returns its value
    // Throws an error if the index is out of range
    delete(index) {
        validateIndex(index, this.length());
        const deletedValue = this.array[index];
        this.array.splice(index, 1);
        return deletedValue;
    }

    // Deletes all occurrences of an element in the list
    // Does nothing if the element is not found
    deleteAll(element) {
        validateCharType(element);
        for (let i = 0; i < this.array.length; i++) {
            if (this.array[i] === element) {
                this.array.splice(i, 1);
                i--;
            }
        }
    }

    // Returns the element at a specific position in the list
    // Throws an error if the index is out of range
    get(index) {
        validateIndex(index, this.length());
        return this.array[index];
    }


    // Creates a copy of the list with the same elements
    clone() {
        const newList = new List();
        for (let i = 0; i < this.array.length; i++) {
            newList.append(this.array[i]);
        }
        return newList;
    }

    // Reverses the order of elements in the list
    reverse() {
        this.array.reverse();
    }

    // Finds the index of the first occurrence of an element in the list
    // Returns -1 if the element is not found
    findFirst(element) {
        validateCharType(element);
        var foundIndex = -1;
        for (let i = 0; i < this.array.length; i++) {
            if (this.array[i] === element) {
                foundIndex = i;
                break;
            }
        }
        return foundIndex;
    }

    // Finds the index of the last occurrence of an element in the list
    // Returns -1 if the element is not found
    findLast(element) {
        validateCharType(element);
        var foundIndex = -1;
        for (let i = this.array.length - 1; i >= 0; i--) {
            if (this.array[i] === element) {
                foundIndex = i;
                break;
            }
        }
        return foundIndex;
    }

    // Removes all elements from the list
    clear() {
        this.array = [];
    }

    // Adds all elements from another list to the current list
    extend(elements) {
        for (let i = 0; i < elements.length(); i++) {
            this.array.push(elements.get(i));
        }
    }
}

module.exports = { List };