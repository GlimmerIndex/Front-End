var host = "http://localhost:8080/"
// import { createApp } from 'vue'

var app = new Vue({
  el: "#app",
  data() {
    return {
      version: "v0.1.1",
      isLogin: "false"
    }
  },
  method: {
    IsLogin() {
      if (localStorage.getItem("token") == null) {
        return isLogin = false;
      }
      return isLogin = true;
    }
  }
})
// app.mount("#app");


var login = new Vue({
  el: "#login",
  data() {
    return {
      input_uname: "",
      input_password: "",
      input_mail: "",
      check_password: "",
    }
  },
  methods: {
    charge() {
      // return false;
      return this.isLogin = IsLogin();
    },
  }
});


var search = new Vue({
  el: "#search",
  data() {
    return {
      input: "",
    };
  },
  methods: {
    searcH() {
      window.location.href = "./src/html/search.html?keyword=" + this.input;
    },
  }
});


// 退出登录
function ch_user() {
  a = confirm("是否要退出并重新登录");
  if (a == true) {
    localStorage.setItem("token", null);
    window.location.href = "/index.html";
    localStorage.setItem("uname", null);
  } else {
    return;
  }
}
Vue.component('header', {

})
var header = new Vue({
  el: "#header",
  data() {
    return {
      activeIndex: "1",
      activeIndex2: "1",
      type: 1,
      uname: 'null'
    };
  },
  methods: {
    handleSelect(key, keyPath) {
      console.log(key, keyPath);
    },
    handleCommand(command) {
      this.$message("click on item " + command);
    },
    get_hello() {
      this.uname = localStorage.getItem("uname")
      this.type = 2;
      console.log(this);
      axios({
        method: "get",
        url: host + "user/info/" + localStorage.getItem("uname"),
        headers: { " token": Token },
      }).then(function (response) {
        console.log(response);
        if (response.code == 200) {
          this.type = response.data.userType;
        } else {
          this.uname = "null"
          this.type = 2;
        }
      });
    }
  },
  mounted: function () {
    console.log("header created");
  }
});

// 账户注销
function Break() {
  var Token = localStorage.getItem("token");
  a = confirm("是否要注销账户");
  if (a == true) {
    axios({
      method: "get",
      url: host + "user/logout",
      headers: { " token": Token },
    }).then(function (response) {
      if (response.code == 200) {
        alert(response.msg);
        localStorage.setItem("token", 0);
        window.location.href = "/index.html";
      } else {
        alert("注销失败" + response.msg);
        return;
      }
    });
  }
}
