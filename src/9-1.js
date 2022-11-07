// square brackets
const numberList = [3, 2, 6];

console.log(numberList[numberList.length - 1]);

console.log(numberList.reverse());

// every(callbackFn) : kiểm tra tất cả phần tử thỏa điều kiện hay không ? nếu đúng trả về true
// some(callbackFn) : kiểm tra có một phần tử thỏa điều kiện ? nếu đúng trả về true
// lastIndexOf()
// includes
// find
// findIndexOf

/**
 * push() :thêm cuối mảng
 * pop() : xóa cuối mảng
 * shift: xóa đầu mảng
 * unShift :thêm vô đầu mảng
 */

/**
 * forEach : duyệt mảng
 * map : biến đổi mảng
 * filter : lọc mảng theo điều kiện
 */

[null, undefined].fill(false); // [false,false]
Array(5).fill(1); // [1,1,1,1,1]

// check có phải mảng hay không
Array.isArray(124); // false
Array.isArray([]); // true
