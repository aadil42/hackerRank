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

function reverse(llist) {
    // Write your code here
    
    let pre = null;
    let curr = llist;
    
    while (curr) {
        const next = curr.next;
        curr.next = pre;
        pre = curr;
        curr = next;
    }
    
    return pre;
}
