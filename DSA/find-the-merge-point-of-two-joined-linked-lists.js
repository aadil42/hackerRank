
// Won't work here because we don't have SinglyLinkedListNode defined. 
// You'll have to run this in the hackerrank env.

function findMergeNode(headA, headB) {
    
    const headASet = new Set();
    const headBSet = new Set();
    
    let curr = headA;
    
    while (curr) {
        headASet.add(curr);
        curr = curr.next;
    }
    curr = headB;
    while (curr) {
        headBSet.add(curr);
        curr = curr.next;
    }
    
    curr = headA;
    while (curr) {
        if (headASet.has(curr) && headBSet.has(curr)) {
            return curr.data;
        }       
        curr = curr.next;
    }   
    
}
