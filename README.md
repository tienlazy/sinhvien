									HTML
1. HTML Introduction
- HTML là ngôn ngữ đánh dấu tiêu chuẩn để tạo các trang Web.
- HTML là viết tắt của Hyper Text Markup Language
- HTML mô tả cấu trúc của một trang web
- HTML bao gồm một loạt các yếu tố
- Các phần tử HTML cho trình duyệt biết cách hiển thị nội dung
- Các yếu tố HTML được thể hiện bằng các thẻ
- Thẻ HTML gắn nhãn các phần nội dung như "tiêu đề", "đoạn", "bảng", v.v.
- Các trình duyệt không hiển thị các thẻ HTML, nhưng sử dụng chúng để hiển thị nội dung của trang
2. HTML Tag
- <! DOCTYPE>: Xác định loại tài liệu
- <html>: Xác định tài liệu HTML
- <head>: Xác định thông tin về tài liệu
- <title>: Xác định tiêu đề cho tài liệu
- <body>: Xác định phần thân của tài liệu
- <h1> đến <h6>: Xác định các tiêu đề HTML
- <p>: Xác địnhmột đoạn
- <br>: Chèn ngắt dòng đơn
- <hr>: Xác định thay đổi chủ đề trong nội dung
- <! --...-->: Xác định nhận xét
- <acronym>: Không được hỗ trợ trong HTML5. Sử dụng <abbr> thay thế. Xác định từ viết tắt
- <abbr>: Xác định tên viết tắt hoặc từ viết tắt
- <address>: Xác định thông tin liên hệ cho tác giả / chủ sở hữu của tài liệu / bài viết
- <b>: Xác định văn bản in đậm
- <bdi>: Cô lập một phần văn bản có thể được định dạng theo hướng khác với văn bản khác bên ngoài văn bản đó
- <bdo>: Ghi đè hướng văn bản hiện tại
- <big>: Không được hỗ trợ trong HTML5. Sử dụng CSS thay thế.Xác định văn bản lớn
- <blockquote>: Xác định một phần được trích dẫn từ một nguồn khác
- <centre>: Không được hỗ trợ trong HTML5. Sử dụng CSS thay thế. Xác định văn bản trung tâm
- <cite>: Xác định tiêu đề của tác phẩm
- <code>: Xác định một đoạn mã máy tính
- <del>: Xác định văn bản đã bị xóa khỏi tài liệu
- <dfn>: Đại diện cho trường hợp xác định của thuật ngữ
- <em>: Xác định văn bản nhấn mạnh
- <font>: Không được hỗ trợ trong HTML5. Sử dụng CSS thay thế. Xác định phông chữ, màu sắc và kích thước cho văn bản
- <i>: Xác định một phần văn bản bằng giọng nói hoặc tâm trạng thay thế
- <in>: Xác định văn bản đã được chèn vào tài liệu
- <kbd>: Xác định đầu vào bàn phím
- <mark>: Xác định văn bản được đánh dấu / tô sáng
- <meter>: Xác định phép đo vô hướng trong phạm vi đã biết (thước đo)
- <pre>: Xác định văn bản được định dạng sẵn
- <progress>: Thể hiện tiến trình của một nhiệm vụ
- <q>: Xác định một trích dẫn ngắn
- <rp>: Xác định nội dung hiển thị trong trình duyệt không hỗ trợ chú thích ruby
- <rt>: Xác định giải thích / phát âm các ký tự (đối với kiểu chữ Đông Á)
- <ruby>: Xác định chú thích ruby ​​(đối với kiểu chữ Đông Á)
- <s>: Xác định văn bản không còn đúng
- <samp>: Xác định đầu ra mẫu từ chương trình máy tính
- <small>: Xác định văn bản nhỏ hơn
- <strike>: Không được hỗ trợ trong HTML5. Sử dụng <del> hoặc <s> thay thế. Xác định văn bản gạch ngang
- <strong>: Xác định văn bản quan trọng
- <sub>: Xác định văn bản được đăng ký
- <sup>: Xác định văn bản siêu ký tự
- <template>: Xác định mẫu
- <time>: Xác định ngày / giờ
- <tt>: Không được hỗ trợ trong HTML5. Sử dụng CSS thay thế. Xác định văn bản teletype
- <u>: Xác định văn bản phải khác biệt so với văn bản thông thường
- <var>: Xác định một biến
- <wbr>: Xác định ngắt dòng có thể
3. HTML Tables
- Một bảng HTML được định nghĩa bằng thẻ <table>
-Mỗi hàng trong bảng được xác định bằng thẻ<tr>. Một tiêu đề bảng được xác định với thẻ <th> 
Theo mặc định, các tiêu đề bảng được in đậm và chính giữa. Một dữ liệu bảng/ô được xác định với thẻ <td>
- Các thẻ <td> phần tử là các thùng chứa dữ liệu của bảng.
Chúng có thể chứa tất cả các loại phần tử HTML, văn bản, hình ảnh, danh sách, bảng khác, vv
							CSS
1. Setup and Selectors
a. Setup
- Có 3 cách để sử dụng css
+ Cách 1: 
Example: <div style="background-color: blue">
+ Cách 2: 
Example:
<head> <style> div { background-color: blue } </style> <head>
+ Cách 3:
Example: <head> <link rel="stylesheet" href="../css.css"> </head>
b. Selector
- Bộ chọn CSS được sử dụng để "tìm" (hoặc chọn) các thành phần HTML mà bạn muốn tạo kiểu.
- Ta có thể chia các bộ chọn CSS thành năm loại:
+ Bộ chọn đơn giản (chọn thành phần dựa trên name, id, class)
Example: sử dụng id
	#anvi {
		color: red
	}
+ Bộ chọn kết hợp (chọn các yếu tố dựa trên mối quan hệ cụ thể giữa chúng)
Example: kết hợp
	div p, div > p, div + p, div ~ p {
		color: red;
	}
+ Bộ chọn lớp giả (chọn các thành phần dựa trên một trạng thái nhất định)
Một lớp giả được sử dụng để xác định trạng thái đặc biệt của một phần tử.
Example: P:hover, a:active, input:checked {
	background-color: red
}
+ Bộ chọn phần tử giả (chọn và định kiểu một phần của phần tử)
Example: p::after, p::before {
	color: red
}
+ Bộ chọn thuộc tính (chọn thành phần dựa trên giá trị thuộc tính hoặc thuộc tính)
Example: 
	a[target], input[type="text"] {
  		background-color: red
	}
- Bộ chọn phần tử css:
+ Bộ chọn phần tử chọn các phần tử HTML dựa trên tên phần tử.
Example:
	P {  color: red }//chọn phần tử chọn các phần tử HTML dựa trên tên phần tử.
	#cls {  color: red }//sử dụng thuộc tính id của một phần tử HTML để chọn một phần tử cụ thể.	
	.cls {  color: red }//chọn các thành phần HTML với thuộc tính lớp cụ thể.
	p.cls {  color: red }//chọn các thành phần HTML với thuộc tính lớp cụ thể.
	* {  color: red } //chọn tất cả các thành phần HTML trên trang.
	h1, h2, h3 {  color: red }//chọn tất cả các thành phần HTML có cùng định nghĩa kiểu.
2. CSS Visual Rules
- Để tạo kiểu cho phần tử HTML, bạn viết các khai báo CSS bên trong các CSS Selector.
Khai báo:
 -CSS bao gồm một thuộc tính (ví dụ: màu sắc, kích thước) và giá trị (ví dụ: màu xanh lam, 200px) 
Dấu hai chấm phân tách thuộc tính và giá trị và dấu chấm phẩy được sử dụng ở cuối.
Example:
	h1 {
  		font-family: Garamond;
	}
-Tất cả mọi thứ(CSS Selector và khai báo) được gọi là bộ quy tắc hoặc bộ quy tắc CSS.
3. Box Model(https://dev.to/helen8297/codecademy-css-3-the-box-model-454a)
-Một phần tử chiều cao và chiều rộng có thể được thay đổi bằng CSS. Sử dụng phương pháp này 
có nghĩa là phần tử sẽ giống nhau trên tất cả các thiết bị.
- Bao gồm(từ ngoài vào trong)
Margin -> boder -> padding -> content(with, height) <-- padding  <-- boder  <-- Margin 
4. CSS Display and Positioning(https://dev.to/helen8297/codecademy-css-5-display-and-positioning-3j4c)
- Đối với một trang web không có CSS, trình duyệt sẽ chỉ hiển thị các yếu tố từ trái sang phải 
và từ trên xuống dưới. Sử dụng CSS, bạn có thể định vị các yếu tố mà bạn thích chúng.
Position Property:
- Để bắt đầu, chúng ta có thể làm điều này với properties position, display, z-index, float and clear.
- Ta có thể thay đổi vị trí các yếu tố bằng cách thay đổi thuộc tính vị trí của nó. 
- Có bốn giá trị có thể cho thuộc tính:
+ static (đây là giá trị mặc định và chỉ có nghĩa là nó sẽ ở bên trái, vì vậy nó không thực sự cần được chỉ định)
+ relative
+ absolute
+ fixed
Z-Index:
- Ta có thể sử dụng thuộc tính chỉ mục z để nói về cơ bản phần tử nào sẽ nằm trên phần tử khác (chồng lấp)
- Z-Index không hoạt động trên các phần tử tĩnh, vì vậy bạn cần đặt vị trí thành tương đối (hoặc tuyệt đối hoặc cố định?)
- Số nguyên ta đặt Z-Index càng lớn, nó sẽ càng chuyển tiếp. Vì vậy, một phần tử có Z-Index là 2 sẽ chồng 
lấp lên một phần tử có Z-Index là 1.
Display Property:
- Các phần tử HTML trong lịch sử được phân loại thành các phần tử "block-level" hoặc các phần tử "inline". 
- Các phần tử inline là những phần tử chỉ chiếm không gian giới hạn bởi các thẻ xác định phần tử (vì vậy chúng 
không chiếm toàn bộ một dòng).
- Hiển thị mặc định cho một số thành phần là inline vì chúng chiếm quá ít không gian và chúng có thể chia sẻ 
một dòng với những người khác, vd. thẻ không cần cả một dòng riêng.
- Có ba giá trị cho thuộc tính hiển thị:
+ inline (các phần tử không chiếm toàn bộ một dòng, chúng hiển thị trong một dòng với các phần tử khác)
+ block (phần tử chiếm toàn bộ một đường ngang)
+ inline-block (Hiển thị inline-block kết hợp các tính năng của cả hai yếu tố inline và block 
Các thành phần inline-block có thể xuất hiện cạnh nhau và chúng tôi có thể chỉ định kích thước của 
chúng bằng các thuộc tính chiều rộng và chiều cao)
5. CSS Colors
- Color name được hỗ trợ bởi tất cả các trình duyệt.
- Tất cả các trình duyệt hiện đại đều hỗ trợ hơn 140 Color name.
Example:
	color: transparent;//Áp dụng một màu trong suốt cho văn bản. Các văn bản sẽ vẫn chiếm không gian cần thiết.
	color: red;//Ta có thể sử dụng một trong số hơn 140 tên màu .
	color: #05ffb0;//Ta có thể sử dụng mã màu thập lục phân .
	color: rgb(50, 115, 220);//Bạn có thể sử dụng mã màu rgb. Xác định màu theo RGB là sự kết hợp của 3 màu cơ bản: đỏ (Red), xanh lá cây (Green) và xanh dương (Blue)
	color: rgba(0, 0, 0, 0.5);//Giá trị màu RGBA là phần mở rộng của giá trị màu RGB với kênh alpha - chỉ định độ mờ cho màu.
	//Giá trị màu RGBA được chỉ định bằng: rgba (đỏ, lục, lam, alpha). Tham số alpha là một số trong khoảng 0,0 
	//(hoàn toàn trong suốt) và 1,0 (hoàn toàn mờ).
	color: hsl(14, 100%, 53%);//HSL là viết tắt của Hue, Saturation và Lightness.
	//Giá trị màu HSL được chỉ định bằng: hsl (màu sắc, độ bão hòa, độ sáng).
	//Hue là một độ trên bánh xe màu (từ 0 đến 360):
	//0 (hoặc 360) là màu đỏ
	//120 là màu xanh lá cây
	//240 là màu xanh
	//Độ bão hòa là một giá trị phần trăm: 100% là màu đầy đủ.
	//Độ nhẹ cũng là một tỷ lệ phần trăm; 0% là màu tối (màu đen) và 100% là màu trắng
	color: hsla(14, 100%, 53%, 0.6);
	//Giá trị màu HSLA là phần mở rộng của giá trị màu HSL với kênh alpha - chỉ định độ mờ cho màu.
	//Giá trị màu HSLA được chỉ định bằng: hsla (màu sắc, độ bão hòa, độ sáng, alpha), trong đó tham số alpha xác định độ mờ. 
	//Tham số alpha là một số trong khoảng 0,0 (hoàn toàn trong suốt) và 1,0 (hoàn toàn mờ).
- (https://www.w3schools.com/css/css3_colors.asp)
6. Typography(https://cssreference.io/typography/)
