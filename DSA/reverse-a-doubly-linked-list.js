/*
 * For your reference:
 *
 * DoublyLinkedListNode {
 *     int data;
 *     DoublyLinkedListNode next;
 *     DoublyLinkedListNode prev;
 * }
 *
 */

function reverse(llist) {
    // Write your code here
    
    let curr = llist;
    
    while (curr.next) {
        
        curr.newNext = curr.prev;
        curr = curr.next;
    }
    curr.newNext = curr.prev;
    llist = curr; // this will be our new head node;
    
    while (curr.prev) {
        
        curr.newPrev = curr.next;
        curr = curr.prev;
    }
    curr.newPrev = curr.next;
    
    while (curr) {
        curr.next = curr.newNext;
        curr.prev = curr.newPrev;
        curr.newNext = null;
        curr.newPrev = null;
        curr = curr.prev;
    }
    
    return llist;
}
