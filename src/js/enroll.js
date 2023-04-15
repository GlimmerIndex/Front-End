var host = "http://localhost:8080/"

function enroll(name) {
  // var name = $("#name").val();
  var new_uname = $("#new_uname").val();
  var email = $("#email").val();
  var password = $("#password").val();
  var password_again = $("#password_again").val();
  // if(isEmpty(name))
  // {
  // alert("请创建您的昵称");
  // return;
  // }
  if (isEmpty(new_uname)) {
    alert("用户名输入不可为空·");
    return;
  }
  if (isEmpty(email)) {
    alert("邮箱输入不可为空");
    return;
  }
  if (isEmpty(password)) {
    alert("密码输入不可为空");
    return;
  }
  if (!(/^[a-zA-Z0-9_-]+@[a-zA-Z0-9_-]+(.[a-zA-Z0-9_-]+)+$/.test(email))) {
    alert("邮箱输入不符合规则");
    return;
  }
  if (!(password == password_again)) {
    alert("两次输入的密码不同，请重新输入");
    return;
  }
  // alert("账号注册成功！");

  axios
    .post(host + "user/register", {
      userName: new_uname,
      password: password,
      email: email,
    })
    .then(function (response) {
      console.log(response);
      if (response.code == 200) {
        alert(response.msg);
      } else {
        if (response.code == 4002) {
          alert(response.msg);
        }
        if (response.code == 4003) {
          alert(response.msg);
        }
        if (response.code == 4005) {
          alert(response.msg);
        }
      }
    });
  // .catch(function(error){
  //     console.log(error);
  // })
}

function isEmpty(str) {
  if (str == null || str.trim() == "") {
    return true;
  }
  return false;
}
