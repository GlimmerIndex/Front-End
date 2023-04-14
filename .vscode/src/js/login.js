function login() {
  // window.location.href = "../User/user.html"
  var password = $("#password").val();
  var uname = $("#uname").val();
  if (isEmpty(uname)) {
    alert("账号输入不可为空");
    return;
  }
  if (isEmpty(password)) {
    alert("密码输入不可为空");
    return;
  }

  axios({
    method: "post",
    url: "http://host/user/login",
    headers: { "Content-Type": "application/json" },
    data: {
      userName: uname,
      password: password,
    },
  })
    .then(function (response) {
      if (response.code == 200) {
        localStorage.setItem("token", response.data.token);
        localStorage.setItem("uname",uname);
        window.location.href = "../User/user.html";
      } else {
        alert(response.msg);
      }
    })
    .catch(function (error) {
      console.log(error);
    });
  // window.location.href='../User/user.html';
}

function isEmpty(str) {
  if (str == null || str.trim() == "") {
    return true;
  }
  return false;
}
