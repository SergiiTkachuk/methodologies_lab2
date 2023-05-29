'use strict';
const { List } = require('../src/list.js');

test('Empty list length is 0', () => {
    const list = new List();
    expect(list.length()).toBe(0);
});

test('After adding an element, list length is 1', () => {
    const list = new List();
    list.append('a');
    expect(list.length()).toBe(1);
});

test('After inserting an element on a certain index, we can get it by this index', () => {
    const list = new List();
    list.append('q');
    list.append('a');
    list.append('z');
    list.append('e');
    list.append('a');
    list.insert('t', 4);
    expect(list.get(4)).toBe('t');
});

test('After deleting an element from a list with 1 element, the list is empty', () => {
    const list = new List();
    list.append('b');
    list.delete(0);
    expect(list.length()).toBe(0);
});

test('After deleting an element from a list with 2 elements, the list has 1 element', () => {
    const list = new List();
    list.append('b');
    list.append('c');
    list.delete(1);
    expect(list.length()).toBe(1);
});

test('After deleting an element from a list with 2 elements, the deleted element is returned', () => {
    const list = new List();
    list.append('b');
    list.append('c');
    expect(list.delete(1)).toBe('c');
});

test('After deleting all the elements with the same values, the list is empty', () => {
    const list = new List();
    list.append('5');
    list.append('5');
    list.append('5');
    list.deleteAll('5');
    expect(list.length()).toBe(0);
});

test('After deleting all the elements which do not exist in it, nothing changes', () => {
    const list = new List();
    list.append('5');
    list.append('5');
    list.append('5');
    list.deleteAll('6');
    expect(list.length()).toBe(3);
});

test('After appending an element to the list, we can get this element', () => {
    const list = new List();
    list.append('f');
    expect(list.get(0)).toBe('f');
});

test('A cloned list contains the same values as the original one', () => {
    const list = new List();
    list.append('t');
    list.append('e');
    list.append('s');
    list.append('t');
    const copiedList = list.clone();
    expect(copiedList.length()).toBe(list.length());
    expect(copiedList.get(0)).toBe(list.get(0));
    expect(copiedList.get(1)).toBe(list.get(1));
    expect(copiedList.get(2)).toBe(list.get(2));
    expect(copiedList.get(3)).toBe(list.get(3));
});

test('After reversing a list, its elements are reversed', () => {
    const list = new List();
    list.append('one');
    list.append('two');
    list.reverse();
    expect(list.get(0)).toBe('two');
    expect(list.get(1)).toBe('one');
});

test('After reversing a list twice, it remains the same', () => {
    const list = new List();
    list.append('one');
    list.append('two');
    list.reverse();
    list.reverse();
    expect(list.get(0)).toBe('one');
    expect(list.get(1)).toBe('two');
});

test('We can find the first element with a certain value', () => {
    const list = new List();
    list.append('1');
    list.append('3');
    list.append('3');
    list.append('7');
    expect(list.findFirst('3')).toBe(1);
});

test('We can find the last element with a certain value', () => {
    const list = new List();
    list.append('1');
    list.append('3');
    list.append('3');
    list.append('7');
    expect(list.findLast('3')).toBe(2);
});

test('If the element can not be found, findFirst method returns -1', () => {
    const list = new List();
    list.append('a');
    list.append('b');
    list.append('c');
    expect(list.findFirst('j')).toBe(-1);
});

test('If the element can not be found, findLast method returns -1', () => {
    const list = new List();
    list.append('a');
    list.append('b');
    list.append('c');
    expect(list.findLast('j')).toBe(-1);
});

test('Using findFirst method with an empty list returns -1', () => {
    const list = new List();
    expect(list.findFirst('j')).toBe(-1);
});

test('Using findLast method with an empty list returns -1', () => {
    const list = new List();
    expect(list.findLast('j')).toBe(-1);
});

test('After invoking clear method, the list is empty', () => {
    const list = new List();
    list.append('l');
    list.append('v');
    list.append('i');
    list.append('v');
    list.clear();
    expect(list.length()).toBe(0);
});

test('We can extend one list with another', () => {
    const list = new List();
    list.append('1');
    const listToExtendWith = new List();
    listToExtendWith.append('2');
    list.extend(listToExtendWith);
    expect(list.length()).toBe(2);
    expect(list.get(0)).toBe('1');
    expect(list.get(1)).toBe('2');
});

test('Changing list after extending does not change the list used to extend', () => {
    const list = new List();
    list.append('1');
    const listToExtendWith = new List();
    listToExtendWith.append('2');
    list.extend(listToExtendWith);
    list.delete(1);
    expect(listToExtendWith.length()).toBe(1);
    expect(listToExtendWith.get(0)).toBe('2');
});

test('Methods with index parameter throw an exception if index is invalid', () => {
    const list = new List();
    list.append('1');

    expect(list.insert.bind(list, '2', -7)).toThrow('Index out of range');
    expect(list.insert.bind(list, '2', 43)).toThrow('Index out of range');
    expect(list.insert.bind(list, '2', '25')).toThrow('Index must be a number');

    expect(list.delete.bind(list, -1)).toThrow('Index out of range');
    expect(list.delete.bind(list, 4)).toThrow('Index out of range');
    expect(list.delete.bind(list, true)).toThrow('Index must be a number');

    expect(list.get.bind(list, -228)).toThrow('Index out of range');
    expect(list.get.bind(list, 10)).toThrow('Index out of range');
    expect(list.get.bind(list, { index: 0 })).toThrow('Index must be a number');
});

test('Methods with element parameter throw an exception if element is invalid', () => {
    const list = new List();
    list.append('1');
    list.append('s');

    expect(list.insert.bind(list, 2, 1)).toThrow('Wrong element type');
    expect(list.insert.bind(list, 'lorem_ipsum', 43)).toThrow('Wrong element type');

    expect(list.deleteAll.bind(list, 2)).toThrow('Wrong element type');
    expect(list.deleteAll.bind(list, 'lorem_ipsum')).toThrow('Wrong element type');

    expect(list.findFirst.bind(list, 2)).toThrow('Wrong element type');
    expect(list.findFirst.bind(list, 'lorem_ipsum')).toThrow('Wrong element type');

    expect(list.findLast.bind(list, 2)).toThrow('Wrong element type');
    expect(list.findLast.bind(list, 'lorem_ipsum')).toThrow('Wrong element type');
});