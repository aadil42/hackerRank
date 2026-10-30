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

function mergeLists(head1, head2) {

    const head = new SinglyLinkedListNode(null);
    let curr = head;
    
    while (head1 && head2) {
        
        if (head1.data < head2.data) {
            curr.next = head1;
            head1 = head1.next;
        } else {
            curr.next = head2;
            head2 = head2.next;
        }
        curr = curr.next;
    }
    
    if (head1) {
        curr.next = head1;
    }
    if (head2) {
        curr.next = head2;
    }
    
    return head.next;
}
