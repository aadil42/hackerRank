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

function getLastNode(head) {
    
    while (head.next) {
        head = head.next;
    }
    return head;
}

function sortedInsert(llist, data) {
    // Write your code here
    
    // if the data should go at the begining
    if (data <= llist.data) {
        const newNode = new DoublyLinkedListNode(data);
        newNode.prev = null;
        newNode.next = llist;
        return newNode; // because newNode is at the front now.
    }
    
    const lastNode = getLastNode(llist);
    
    if (lastNode.data <= data) {
        const newNode = new DoublyLinkedListNode(data);
        newNode.prev = lastNode;
        lastNode.next = newNode;
        newNode.next = null;
        return llist; 
    }
    
    let curr = llist;
    
    while (curr) {
        
        if (curr.data >= data) {
            const newNode = new DoublyLinkedListNode(data);
            newNode.prev = curr.prev;
            newNode.next = curr;
            curr.prev.next = newNode;
            curr.prev = newNode;
            return llist;
        }
        curr = curr.next;
    }
    
}