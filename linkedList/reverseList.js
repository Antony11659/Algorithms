function ListNode(val, next) {
  this.val = val === undefined ? 0 : val;
  this.next = next === undefined ? null : next;
}

const arrayToLinkedList = (arr) => {
  if (arr.length === 0) return null;

  const head = new ListNode(arr[0]);
  let current = head;

  for (let i = 1; i < arr.length; i++) {
    current.next = new ListNode(arr[i]);
    current = current.next;
  }

  return head;
};

var reverseList = function (head) {
  if (!head.next) {
    return null;
  }
  return reverseList(head.val, reverseList(head.val, head.next));
};
const list = arrayToLinkedList([1, 2, 3, 4]);
console.log(reverseList(list));
