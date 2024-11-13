// Linked List Helper Functions

function ListNode(val = 0, next = null) {
    this.val = val;
    this.next = next;
}

// Function to create a linked list from an array
function arrayToList(arr) {
    let dummy = new ListNode();
    let current = dummy;
    for (let num of arr) {
        current.next = new ListNode(num);
        current = current.next;
    }
    return dummy.next;
}

// Function to print the linked list
function printList(node) {
    let result = [];
    while (node) {
        result.push(node.val);
        node = node.next;
    }
    console.log(result.join(' -> '));
}

module.exports = { ListNode, arrayToList, printList };
