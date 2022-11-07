// Boolean
// built-in là những gì js xây dựng sẵn dành cho user

let a = 1 + '2' - '2';

// object Boolean

/** Ứng với một kiểu dữ liệu nó cho sẵn mình một cái object, trong cái object đó có chứa những cái
 * hàm hoặc method mà mình được dùng để xử lý tương tác với các kiểu dữ liệu tương ứng
 */

const error = 'Something wrong!';
const hasError = Boolean(error);
console.log(hasError);

const mark = 9;
console.log(mark.toString());

const type = '1.2';
console.log(parseInt(type));

// trên đây là kiểu ép kiểu tường mình do mình chỉ đỉnh nó ép kiểu
