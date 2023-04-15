var host = "http://localhost:8080/"

function login() {
  // window.location.href = "../User/user.html"
  var password = $("#password").val();
  var uname = $("#uname").val();
  if (isEmpty(uname)) {
    alert("账号输入不可为空");
    return false;
  }
  if (isEmpty(password)) {
    alert("密码输入不可为空");
    return false;
  }

  axios({
    method: "post",
    url: host + "user/login",
    headers: { "Content-Type": "application/json" },
    data: {
      userName: uname,
      password: password,
    },
  })
    .then(function (response) {
      console.log(response);
      if (response.data.code == 200) {
        localStorage.setItem("token", response.data.data.token);
        localStorage.setItem("uname", uname);
        window.location.href = "./index.html";
        return true;
      } else {
        alert(response.data.msg);
      }
    })
    .catch(function (error) {
      console.log(error);
    });
  return false;
}

function isEmpty(str) {
  if (str == null || str.trim() == "") {
    return true;
  }
  return false;
}
