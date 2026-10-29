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
function insertNodeAtTail(head, data) {
    
    const nextNode = new SinglyLinkedListNode(data);
    
    let curr = head;
    
    while (curr && curr.next) {
        curr = curr.next;
    }
    
    if (!curr) {
        return nextNode;
    } else {
        curr.next = nextNode;   
    }
    
    return head;
}
