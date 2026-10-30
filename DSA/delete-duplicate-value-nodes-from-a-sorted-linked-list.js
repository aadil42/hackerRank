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
function removeDuplicates(llist) {
    // Write your code here
    
    let curr = llist;
    
    while (curr) {
        
        while (curr && curr.next) {
            if (curr.data !== curr.next.data) break;
            curr.next = curr.next.next;
        }
        curr = curr.next;
    }
    
    return llist;
}
