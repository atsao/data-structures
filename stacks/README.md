# Stacks and Queues

## Stacks

A **stack** is a linear data structure that stores a collection of data in sequential, LIFO (last-in, first-out) order.

A stack implementation has two principal operations:

* **push** - add an element to the collection
* **pop** - remove the moment recently added element

Stacks may also implement a **peek** method, which returns the top of the stack without modifying it, as well as a **size** method, which returns the number of items in the stack.

### Time Complexity

|        | Average Case | Worst Case |
| ------ | :----------: | :--------: |
| Access |    `O(n)`    |   `O(n)`   |
| Search |    `O(n)`    |   `O(n)`   |
| Insert |    `O(1)`    |   `O(1)`   |
| Delete |    `O(1)`    |   `O(1)`   |

### Examples

* Undo history
* Call stack
