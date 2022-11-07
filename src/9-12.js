// Sort
/**
 * nếu là null / undefined thì auto được cho xuống cuối
 * nếu không truyền callbackFn các phần tử sẽ được chuyển về string để thực hiện so sánh
 * hàm sẽ trả về mảng sau khi sort (nhưng đây là mảng bảng đầu đã sắp xếp , không phải mảng mới)
 */

console.log([2, 5, 6, 7, 1].sort((a, b) => a - b));

//bubble sort : cố gắng tìm thằng thỏa điều kiện đẩy về cuối mảng
