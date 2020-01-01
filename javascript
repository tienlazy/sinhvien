							Javascript
1. Introduction to Javascript
- JavaScript là ngôn ngữ lập trình của HTML và Web.
- JavaScript là một trong 3 ngôn ngữ mà tất cả các nhà phát triển web phải học:
   1. HTML để xác định nội dung của các trang web
   2. CSS để chỉ định bố cục của các trang web
   3. JavaScript để lập trình hành vi của các trang web
- JavaScript được Brendan Eich phát minh vào năm 1995 và trở thành tiêu chuẩn ECMA vào năm 1997.
ECMA-262 là tên chính thức của tiêu chuẩn. ECMAScript là tên chính thức của ngôn ngữ.
2. Control Flow
- Các dòng điều khiển là thứ tự mà máy tính thực hiện báo cáo trong một kịch bản.
- Mã được chạy theo thứ tự từ dòng đầu tiên trong tệp đến dòng cuối cùng, trừ khi máy tính chạy trên các cấu trúc 
(cực kỳ thường xuyên) thay đổi luồng điều khiển, chẳng hạn như các điều kiện(if..else) và vòng lặp(for, while),..
(continue, break, {}, switch,..)
3. Function
- Hàm là một trong những khối xây dựng cơ bản trong JavaScript. Hàm là một thủ tục JavaScript tập hợp 
các câu lệnh thực hiện một tác vụ hoặc tính toán một giá trị. Để sử dụng một hàm, ta phải xác định 
nó ở đâu đó trong phạm vi mà bạn muốn gọi nó.
Example: Khai báo hàm(Function declarations)
	function square(number) {
  		return number * number;
	}
Example: Biểu thức hàm(Function expressions)
const square = function(number) { return number * number }
var x = square(4) // x gets the value 16
Example: Gọi hàm(Calling functions - ví dụ hình vuông(squares))
	square(5);//result = 25(a*a)
Example: Phạm vi hàm(Function scope)
function getScore() {
  var num1 = 2,
      num2 = 3;
  
  function add() {
    return name + ' scored ' + (num1 + num2);
  }
  
  return add();
}
- (https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Functions)

