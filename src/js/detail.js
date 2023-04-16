var host = "http://localhost:8080/"

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
      // return false;
      var Token = localStorage.getItem("token");
      return !Token;
    },
  }
}
var Ctor = Vue.extend(Main);
new Ctor().$mount("#login");

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
        headers: { " token": Token },
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
  data() {
    return {
      filePath: '',
      pagenumber: 0,
      time: '',
      likeNumber: 0,
      dislikeNumber: 0,
      isLike: false,
      isDislike: false,
      tableData: {},
    };
  },
  mounted() {
    this.get_information();
    this.get_like();
    this.get_dislike();
    this.get_pdf();
  },
  methods: {
    get_information() {
      //获取url
      var c_url = window.location.href;
      //获取参数
      if (c_url.indexOf("&") && c_url.indexOf("=")) {
        var c_urlArray = {}
        var c_val = c_url.split('?')[1];
        var c_valArray = c_val.split('&');
        for (let i = 0; i < c_valArray.length; i++) {
          let c_key = c_valArray[i].split('=')[0];
          let c_value = c_valArray[i].split('=')[1];
          c_urlArray[c_key] = c_value;
        }
      }
      if ((!c_urlArray['index']) || (!c_urlArray['keyword'])) {
        alert("无相关页面！");
      }
      axios({
        method: "get",
        url: host + "index/" + keyword + "/1",
        headers: { token: Token },
      })
        .then(function (response) {
          if (response.code == 200) {
            this.tableData = response.data[c_urlArray['index']];
          } else {
            alert(response.msg);
          }

        })
        .catch(function (error) {
          console.log(error);
        });
      time = tableData.uploadTime.match('/.*(?=[A-Z])/g');
    },
    get_like() {
      axios({
        method: "get",
        url: host + "/is/liked",
        headers: { token: Token },
        data: {
          likedFileId: this.tableData.fileID,
        },
      })
        .then(function (response) {
          isLike = (response.code == 4026);
        })
        .catch(function (error) {
          console.log(error);
        });
    },
    get_dislike() {
      axios({
        method: "get",
        url: host + "is/disliked",
        headers: { token: Token },
        data: {
          likedFileId: this.tableData.fileID,
        },
      })
        .then(function (response) {
          isDislike = (response.code == 4026);
        })
        .catch(function (error) {
          console.log(error);
        });
    },
    dislike(uncheck) {
      this.isDislike = !this.isDislike;
      if (this.isLike && !uncheck)
        this.like(true);
      var Token = localStorage.getItem("token");
      axios({
        method: "post",
        url: host + "dislike/pdf",
        headers: { token: Token },
        data: {
          likedFileId: this.tableData.fileID,
        }

      })
        .then(function (response) {
          if (response.code == 4025)
            alert(response.msg);
        })
        .catch(function (error) {
          console.log(error);
        });
    },
    like(uncheck) {
      // alert("wsad");
      this.isLike = !this.isLike;
      if (this.isDislike && !uncheck)
        this.dislike(true);
      var Token = localStorage.getItem("token");
      axios({
        method: "post",
        url: host + "like/pdf",
        headers: { token: Token },
        data: {
          likedFileId: this.tableData.fileID,
        },
      })
        .then(function (response) {
          if (response.code == 4025)
            alert(response.msg);
        })
        .catch(function (error) {
          console.log(error);
        });
    },
    jump_page(number) {
      console.log(number);
      this.pagenumber = number;
    },
    download() {
      axios({
        method: "get",
        url: host + "download/" + this.tableData.fileID,
        headers: { token: Token },
      })
        .catch(function (error) {
          console.log(error);
        });
    },
    get_pdf() {
      axios({
        method: "get",
        url: host + "preview/pdf/" + this.tableData.fileID,
        headers: { token: Token },
      })
        .then(function (response) {
          if (response.code == 4028)
            filePath = response.msg;
          else
            alert(response.msg);
        })
        .catch(function (error) {
          console.log(error);
        });
    },
  },
};
var Ctor = Vue.extend(Main);
new Ctor().$mount("#main");
