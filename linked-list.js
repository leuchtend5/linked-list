import Node from './node.js';

class LinkedList {
  constructor() {
    this.listHead = null;
    this.totalSize = 0;
  }

  append(value) {
    // add new node to the end of the list
    const node = new Node(value);

    if (this.listHead === null) {
      this.listHead = node;
    } else {
      let current = this.listHead;

      while (current.next) {
        current = current.next;
      }

      current.next = node;
    }
    this.totalSize++;
  }

  prepend(value) {
    // add new node to the start of the list
    this.listHead = new Node(value, this.listHead);
    this.totalSize++;
  }

  size() {
    // return total number of nodes in the list
    return this.totalSize;
  }

  head() {
    // return the first node in the list
    return this.listHead;
  }

  tail() {
    // return the last node in the list
    let current = this.listHead;

    while (current.next) {
      current = current.next;
    }

    return current;
  }

  at(index) {
    // returns the node at the given index
    let current = this.listHead;
    let count = 0;

    if (index > this.totalSize) {
      return null;
    }

    while (count < index) {
      current = current.next;
      count++;
    }

    return current;
  }

  pop() {
    // removes the last node from the list
    let current = this.listHead;
    let previous;

    while (current.next) {
      previous = current;
      current = current.next;
    }

    previous.next = null;
    this.totalSize--;
  }

  contains(value) {
    // returns true if the passed in value is in the list and otherwise returns false
    let current = this.listHead;

    while (current) {
      if (current.value === value) {
        return true;
      }

      current = current.next;
    }

    return false;
  }

  find(value) {
    // returns the index of the node containing value, or null if not found
    let current = this.listHead;
    let count = 0;

    while (current) {
      if (current.value === value) {
        return count;
      }

      current = current.next;
      count++;
    }

    return null;
  }

  toString() {
    // represents your LinkedList objects as strings,
    // so you can print them out and preview them in the console.
    // The format should be: ( value ) -> ( value ) -> ( value ) -> null

    let current = this.listHead;
    let stringValue = '';

    while (current) {
      stringValue += ` (${current.value}) ->`;
      current = current.next;
    }

    stringValue += ' null';
    console.log(stringValue);
  }

  insertAt(value, index) {
    // that inserts a new node with the provided value at the given index
    let current = this.listHead;
    let previous;
    let count = 0;
    const node = new Node(value, this.listHead);

    if (index > this.totalSize - 1) {
      return null;
    }

    if (index === 0) {
      this.listHead = node;
      return;
    }

    while (count < index) {
      previous = current;
      current = current.next;
      count++;
    }

    node.next = current;
    previous.next = node;
  }

  removeAt(index) {
    //  that removes the node at the given index
    let current = this.listHead;
    let previous;
    let count = 0;

    if (index > this.totalSize - 1) {
      return;
    }

    if (index === 0) {
      this.listHead = current.next;
      return;
    }

    while (count < index) {
      previous = current;
      current = current.next;
      count++;
    }

    previous.next = current.next;
  }
}

export default LinkedList;
