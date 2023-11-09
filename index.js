import LinkedList from './linked-list.js';

const linkedList = new LinkedList();

linkedList.prepend(100);
linkedList.prepend(200);
linkedList.prepend(300);
linkedList.prepend(400);
linkedList.append(500);
// linkedList.pop();
// linkedList.insertAt(700, 2);
// linkedList.removeAt(1);
// linkedList.removeAt(0);

linkedList.toString();
// console.log(linkedList.size());
console.log(linkedList.at(0));
// console.log(linkedList.contains(500));
// console.log(linkedList.find(600));
