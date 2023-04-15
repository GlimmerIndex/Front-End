
var host = "http://localhost:8080/"
var Main = {
  data() {
    return {
      isLogin: true,
      input_uname: "",
      input_password: "",
      input_mail: "",
      check_password: "",
    }
  },
  methods: {
    charge() {
      // return false;
      var Token = localStorage.getItem("token");
      return !Token;
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
  methods: {
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
      uname: 'null',
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
      axios({
        method: "get",
        url: host + "user/info/" + localStorage.getItem("uname"),
        headers: { " taken": Token },
      }).then(function (response) {
        if (response.code == 200) {
          this.type = response.data.userType;
        } else {
          this.uname = "null"
          this.type = 2;
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
      url: host + "user/logout",
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

var Main = {
  methods: {
    handleOpen(key, keyPath) {
      console.log(key, keyPath);
    },
    handleClose(key, keyPath) {
      console.log(key, keyPath);
    },
  },
};
var Ctor = Vue.extend(Main);
new Ctor().$mount("#keyword");

var Main = {
  data() {
    return {
      input: "",
      currentPage: 1,
      pagesize: 10,
      tableData: new Array(),
      // 利用vue改变tabledata的值，当条数大于20时进行分页，并且在题名添加链接跳转
    };
  },
  mounted() {
    this.SearcH();
  },
  methods: {
    detail(a) {
      window.location.href = "/src/html/detail.html?keyword=" + this.input + "&index=" + this.tableData.indexOf(a);
      // alert("scscsd");

    },
    downLoad() {
      // alert("scscsd");
      var Token = localStorage.getItem("token");
      axios({
        method: "get",
        url: host + "download/pdf",
        headers: { token: Token },
      })
        .then(function (response) {
          if (response.code == 200) {
            //下载方式
          } else {
            alert(response.msg);
          }
        })
        .catch(function (error) {
          console.log(error);
        });
    },
    searcH() {
      // window.location.href = "/src/html/search.html?keyword=" + this.input;
    },
    SearcH() {
      //获取url
      var c_url = window.location.href;
      //获取参数
      if (c_url.indexOf("&") && c_url.indexOf("=")) {
        var c_urlArray = {};
        var c_val = c_url.split("?")[1];
        var c_valArray = c_val.split("&");
        for (let i = 0; i < c_valArray.length; i++) {
          let c_key = c_valArray[i].split("=")[0];
          let c_value = c_valArray[i].split("=")[1];
          c_urlArray[c_key] = c_value;
        }
      }
      if (!c_urlArray["keyword"]) {
        return;
      }
      // alert(c_urlArray["keyword"]);
      // alert("wsad");
      var Token = localStorage.getItem("token");
      axios({
        method: "get",
        url: host + "index/" + c_urlArray["keyword"] + "/1", //传参？
        headers: { token: Token },
      })
        .then(function (response) {
          if (response.code == 200) {
            this.tableData = response.data;
          } else {
            alert(response.msg);
          }
        })
        .catch(function (error) {
          console.log(error);
        });
    },
    like(a) {
      // alert("wsad");
      var Token = localStorage.getItem("token");
      axios({
        method: "post",
        url: host + "like/pdf",
        headers: { token: Token },
        data: {
          likedFileId: a,
        },
      })
        .then(function (response) {
          alert(response.msg);
        })
        .catch(function (error) {
          console.log(error);
        });
    },
    dislike(a) {
      // alert("wsad");
      var Token = localStorage.getItem("token");
      axios({
        method: "post",
        url: host + "dislike/pdf",
        headers: { token: Token },
        data: {
          dislikedFileId: a,
        },
      })
        .then(function (response) {
          alert(response.msg);
        })
        .catch(function (error) {
          console.log(error);
        });
    },
    handleSizeChange(size) {
      console.log(size, 'size');
      this.pagesize = size;
      console.log(this.pagesize); //每页下拉显示数据
    },
    handleCurrentChange(currentPage) {
      console.log(currentPage, 'currentPage');
      this.currentPage = currentPage;
      console.log(this.currentPage); //点击第几页
    },
  },
};
var Ctor = Vue.extend(Main);
new Ctor().$mount("main");
