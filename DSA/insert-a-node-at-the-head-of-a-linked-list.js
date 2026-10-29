
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
function insertNodeAtHead(head, data) {
    
    const newNode = new SinglyLinkedListNode(data);
    newNode.next = head;
    return newNode;
}