// Problem: https://leetcode.com/problems/reverse-linked-list/
// Difficulty: Easy
const { ListNode, arrayToList, printList } = require('../utils/linked-list');

/**
 * Reverses a singly linked list.
 * @param {ListNode} head
 * @return {ListNode}
 */
var reverseList = function(head) {
    let prev = null;
    let curr = head;
    while (curr) {
        let nextTemp = curr.next;
        curr.next = prev;
        prev = curr;
        curr = nextTemp;
    }
    return prev;
};

// Example Usage
let head = arrayToList([1, 2, 3, 4, 5]);
printList(head);  // Original list: 1 -> 2 -> 3 -> 4 -> 5
let reversedHead = reverseList(head);
printList(reversedHead);  // Reversed list: 5 -> 4 -> 3 -> 2 -> 1
