# Linked Lists

A **linked list** stores a sequential collection of data. Unlike arrays, the elements are not in contiguous places in memory. Instead, each element contains a pointer to the next node in sequence.

* **Singly-Linked** - each node points to next node, last node points to `null`
* **Doubly-Linked** - each node contains two pointers that point to next node and previous node, last node (`tail`) points to null
* **Circular Linked**
  * **Singly-Linked** - each node points to the next node, last node's next pointer points to `head`
  * **Doubly-Linked** each node contains two pointers to next and previous; `tail`'s next pointer points to `head`, head's previous pointer points to `tail`

### Time Complexity

|        | Average Case | Worst Case |
| ------ | :----------: | :--------: |
| Access |    `O(n)`    |   `O(n)`   |
| Search |    `O(n)`    |   `O(n)`   |
| Insert |    `O(1)`    |   `O(1)`   |
| Delete |    `O(1)`    |   `O(1)`   |

### Examples

* Scavenger Hunt
* Flight Itinerary

### Considerations

* Allows for efficient insertion or removal of nodes at any position during iteration
* Arrays have better cache locality
