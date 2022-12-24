const infoStudent = document.getElementById("info");
const resBtn = document.getElementById("restart");
// hàm grade validate và phân loại điểm số
let grade = (markStudent) => {
  // trường hợp mark < 0 || mark > 10
  if (markStudent < 0 || markStudent > 10) {
    alert("điểm số phải >=0 hoặc <=10");
    return false;
  }

  // trường hợp mark hợp lệ
  if (markStudent < 5) return "kém";
  else if (markStudent >= 5 && markStudent < 6) return "yếu";
  else if (markStudent >= 6 && markStudent < 7) return "trung bình";
  else if (markStudent >= 7 && markStudent < 8) return "khá";
  else if (markStudent >= 8 && markStudent < 9) return "gỏi";
  else return "xuất sắc";
};

// 1. Bắt sự kiện submit vào button
infoStudent.addEventListener("submit", (e) => {
  // 2. lấy data từ các ô input
  let nameStudent = document.getElementById("name").value;
  let markStudent = document.getElementById("mark").value;
  let finalResult = document.getElementById("result");
  // finalResult.innerHTML = " ";
  // console.log(nameStudent);
  // console.log(markStudent);
  // 3. Validate tên user
  if (nameStudent.length < 2) {
    alert("Vui lòng nhập nhiều hơn 2 ký tự");
    return false;
    // trả về false và ko thực hiện hành động tiếp theo
  }

  // 4. Validate mark
  markStudent = parseFloat(markStudent);
  // dùng parseFloat để convert string --> number
  markStudent = isNaN(markStudent) ? -1 : markStudent;
  // dùng isNan để check xem data có phải là NaN không
  // console.log(markStudent);

  // 5. Phân loại điểm số
  // console.log(grade(markStudent));

  // 6. Render ra giao diện
  if (grade(markStudent) != false) {
    finalResult.style.display = "block";
    finalResult.innerHTML = `
    Tên: <b>${nameStudent}</b>
      <br />
      Điểm trung bình: <b>${markStudent}</b>
      <br />
      Xếp loại: <b>${grade(markStudent)}</b>`;
  }
  e.preventDefault();
});
