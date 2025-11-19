/**
 * medium
 * 
 * time complexity: O(max(m, n))
 * space complexity: O(max(m, n))
 * 
 * explanation: simulate elementary addition on two reversed linked lists
 * traverse both lists, sum corresponding digits and carry
 * create a new list whose digits represent the result
 * 
 * 4/18/2025
 */
/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
var addTwoNumbers = function (l1, l2) {
   let carry = 0;
   let head = new ListNode(0);
   let cur = head;
   while (l1 || l2 || carry) {
      let sum = (l1?.val || 0) + (l2?.val || 0) + carry;
      carry = Math.floor(sum / 10);
      cur.next = new ListNode(sum % 10);
      cur = cur.next;
      l1 = l1?.next;
      l2 = l2?.next;
   }
   return head.next;
};