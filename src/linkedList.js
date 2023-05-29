import linkedListNode from './linkedListNode';

export default class LinkedList {
  constructor(head = null, tail = null) {
    this.head = head;
    this.tail = tail;
  }

  append(value) {
    const newNode = new linkedListNode(value);
    let temp = this.head;
    if (!temp) {
      this.head = newNode;
      newNode.next = this.head;
      this.tail = newNode;
      return;
    } else {
      this.tail.next = newNode;
      this.tail = newNode;
      this.tail.next = this.head;
    }
    while (temp.next !== this.head) {
      temp = temp.next;
    }
    temp.next = newNode;
    newNode.next = this.head;
    this.tail = newNode;
  }

  length() {
    if (!this.head && !this.tail) return 0;
    let size = 0;
    let node = this.head;
    while (node.next !== this.head) {
      size++;
      node = node.next;
    }
    return ++size;
  }

  get(index) {
    if (index < 0 || index > this.getLength()) throw new Error('invalid index');

    let temp = this.head;
    let position = 0;
    while (temp != this.tail) {
      if (position === index) break;
      temp = temp.next;
      position += 1;
    }
    return temp.value;
  }

  insert(value, index) {
    const newNode = new linkedListNode(value);
    let temp = this.head;
    if (index == 0) {
      newNode.next = temp;
      this.head = newNode;
      this.tail.next = this.head;
      return;
    }
    while (--index) {
      if (temp.next !== this.head) temp = temp.next;
    }
    const tempNext = temp.next;
    temp.next = newNode;
    newNode.next = tempNext;
    if (temp === this.tail) this.tail = newNode;
    return;
  }

  findFirst(value) {
    const size = this.getLength();
    for (let i = 0; i < size; i++) {
      const node = this.getByIndex(i);
      if (node === value) {
        return i;
      }
    }
    return -1;
  }

  findLast(value) {
    let temp = this.head;
    let index = 0;
    let result = -1;

    if (this.tail.value === value) result = this.getLength() - 1;
    else {
      while (temp != this.tail) {
        if (temp.value === value) {
          result = index;
        }
        temp = temp.next;
        ++index;
      }
    }
    return result;
  }

  clear() {
    this.head = null;
    this.tail = null;
  }

  delete(index) {
    if (index < 0 || index > this.getLength()) throw new Error('invalid index');
    const toDelete = this.getByIndex(index);

    let temp = this.head;
    let prev;
    if (!index) {
      this.head = temp.next;
      this.tail.next = this.head;
      return toDelete;
    }

    for (let i = index; i > 0; i--) {
      if (temp.next !== this.head) {
        prev = temp;
        temp = temp.next;
      }
    }

    prev.next = temp.next;
    if (temp === this.tail) {
      prev.next = this.head;
      this.tail = prev;
    }

    return toDelete;
  }

  deleteAll(value) {
    let size = this.getLength();
    for (let i = 0; i < size; i++) {
      const nodeValue = this.getByIndex(i);
      if (nodeValue === value) {
        this.delete(i);
        i--;
        size--;
      }
    }
  }

  printList() {
    let node = this.head;
    if (!node) return console.log('Empty List!');
    let output = 'HEAD:';
    while (node !== this.tail) {
      output += ` ${node.value} =>`;
      node = node.next;
    }
    output += ` TAIL: ${this.tail.value}`;
    return console.log(output);
  }

  clone() {
    const newList = new LinkedList();
    let temp = this.head;
    while (temp.next !== this.head) {
      newList.append(temp.value);
      temp = temp.next;
    }
    newList.append(temp.value);
    return newList;
  }

  reverse() {
    let prevNode = this.tail;
    let currentNode = this.head;
    if (currentNode === null) return;
    let nextNode;

    while (currentNode.next !== this.head) {
      nextNode = currentNode.next;
      currentNode.next = prevNode;
      prevNode = currentNode;
      currentNode = nextNode;
      this.head = prevNode;
    }

    this.tail = currentNode;
  }

  extend(list) {
    let temp = list.head;
    while (temp.next !== list.head) {
      this.append(temp.value);
      temp = temp.next;
    }
    this.append(temp.value);
    }
}