import React from 'react';
import './data-structure.css';

const DataStructure = () => {
  return (
    <div className="data-structure-container">
      <h2>Array</h2>
      <p>
        An array is a collection of items stored at continuous memory locations. The idea is to declare multiple items of the same type together.
      </p>
      <h3>Array Declaration</h3>
      <p>
        In C, we can declare an array by specifying its size, initializing it, or both.
      </p>
      <pre>
        {`// Array declaration by specifying size
int arr[10];

// Array declaration by initializing elements
int arr[] = {10, 20, 30, 40};

// Array declaration by specifying size and initializing elements
int arr[6] = {10, 20, 30, 40};`}
      </pre>
      <h3>Formulas</h3>
      <p>
        Length of Array = UB - LB + 1
        <br />
        Given the address of the first element, the address of any other element is calculated using the formula:
        <br />
        Loc (arr[k]) = base (arr) + w * k
      </p>
      <h2>Stacks</h2>
      <p>
        A stack is a linear data structure that follows a particular order in which the operations are performed. The order may be Last In First Out (LIFO) or First In Last Out (FILO).
      </p>
      <h3>Basic Operations</h3>
      <ul>
        <li>Push: Adds an item to the stack. If the stack is full, then it is said to be an Overflow condition.</li>
        <li>Pop: Removes an item from the stack. The items are popped in the reversed order in which they are pushed. If the stack is empty, then it is said to be an Underflow condition.</li>
        <li>Peek: Get the topmost item.</li>
      </ul>
      <h2>Infix, Prefix, Postfix Notations</h2>
      <p>
        Infix notation: Operators are written in-between their operands. Postfix notation (also known as “Reverse Polish notation”): Operators are written after their operands. Prefix notation (also known as “Polish notation”): Operators are written before their operands.
      </p>
      <h2>Tower of Hanoi</h2>
      <p>
        The Tower of Hanoi is a mathematical puzzle where we have three rods and n disks. The objective of the puzzle is to move the entire stack to another rod, obeying simple rules.
      </p>
      <h2>Queues</h2>
      <p>
        A queue is a linear structure that follows a particular order in which the operations are performed. The order is First In First Out (FIFO).
      </p>
      <h2>Linked Lists</h2>
      <p>
        A linked list is a linear data structure. Unlike arrays, linked list elements are not stored at contiguous locations; the elements are linked using pointers.
      </p>
    </div>
  );
};

export default DataStructure;
