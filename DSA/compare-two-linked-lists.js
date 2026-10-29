 /* For your reference:
 *
 * SinglyLinkedListNode {
 *     int data;
 *     SinglyLinkedListNode next;
 * }
 *
 */
// Won't work here because we don't have SinglyLinkedListNode defined. 
// You'll have to run this in the hackerrank env.

function CompareLists(llist1, llist2) {
    
    while (llist1 && llist2) {
        
        if (llist1.data !== llist2.data) return 0;
        llist1 = llist1.next;
        llist2 = llist2.next;
    }
    
    if (llist1) return 0;
    if (llist2) return 0;
    
    return 1;
}
