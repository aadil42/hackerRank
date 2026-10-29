/*
 * For your reference:
 *
 * SinglyLinkedListNode {
 *     int data;
 *     SinglyLinkedListNode next;
 * }
 *
 */
// Won't work here because we don't have SinglyLinkedListNode defined. 
// You'll have to run this in the hackerrank env.

function insertNode(currNodeRef, newNode) {
    const remainingList = currNodeRef.next;
    currNodeRef.next = newNode;
    newNode.next = remainingList;
}

function insertNodeAtPosition(llist, data, position) {
    // Write your code here
    
    let idx = 0;
    let curr = llist;
    const newNode = new SinglyLinkedListNode(data);
        
    if (position === 0) {
        newNode.next = llist;
        return newNode;    
    }
    
    while (curr) {
        if (idx === position - 1) {
            insertNode(curr, newNode);
            break;
        }
        idx += 1;;
        curr = curr.next;
    }
    
    return llist;
}