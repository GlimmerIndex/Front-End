var Main = {
  data(){
    return{
      isLogin: true,
      input_uname: "",
      input_password: "",
      input_mail: "",
      check_password: "",
    }
  },
  methods: {
    charge(){
      // return true;
      var Token = localStorage.getItem("token");
      return Token;
    },
  }
}
var Ctor = Vue.extend(Main);
new Ctor().$mount("#login");

var Main = {
  data() {
    return {
      input: "",
    };
  },
  methods:{
    searcH() {
      window.location.href = "/src/html/search.html?keyword=" + this.input;
    },
  }
};
var Ctor = Vue.extend(Main);
new Ctor().$mount("#search");


// 退出登录
function ch_user() {
  a = confirm("是否要退出并重新登录");
  if (a == true) {
    localStorage.setItem("token", 0);
    window.location.href = "/index.html";
  } else {
    return;
  }
}

var Main = {
  data() {
    return {
      activeIndex: "1",
      activeIndex2: "1",
      type: 1,
      uname: '萧炎',
    };
  },
  methods: {
    handleSelect(key, keyPath) {
      console.log(key, keyPath);
    },
    handleCommand(command) {
      this.$message("click on item " + command);
    },
    get_hello(){
      this.uname=localStorage.getItem("uname")
      axios({
        method: "get",
        url: "http://localhost:8080/user/info/"+localStorage.getItem("uname"),
        headers: { " taken": Token },
      }).then(function (response) {
        if (response.code == 200) {
          this.type=response.data.userType;
        }else{
          this.uname="null"
          this.type=2;
        }
      });
    }
  },
};
var Ctor = Vue.extend(Main);
new Ctor().$mount("#header");

// 账户注销
function Break() {
  var Token = localStorage.getItem("token");
  a = confirm("是否要注销账户");
  if (a == true) {
    axios({
      method: "get",
      url: "http://host/user/logout",
      headers: { " taken": Token },
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
