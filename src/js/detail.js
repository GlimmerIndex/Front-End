var host = "http://localhost:8080/"
var Plat = navigator.userAgent.match( // 判断不同端
  /(phone|pad|pod|iPhone|iPod|ios|iPad|Android|Mobile|BlackBerry|IEMobile|MQQBrowser|JUC|Fennec|wOSBrowser|BrowserNG|WebOS|Symbian|Windows Phone)/i
);
var Token;
function IsLogin() {
  // console.log(localStorage.getItem("token"));
  // console.log(localStorage.getItem("token") !== null);
  if (localStorage.getItem("token") == null) {
    return false;
  }
  Token = localStorage.getItem("token");
  return true;
}
Vue.component('login-index', {
  data() {
    return {
      input_uname: "",
      input_password: "",
      input_mail: "",
      check_password: "",
      login_board: true,
      plat: Plat,
    }
  },
  methods: {
    charge() {
      // return false;
      return this.isLogin = IsLogin();
    },
    loginimpl() {
      if (login()) {
        this.$message({
          message: '登陆成功',
          type: 'success'
        });
      }
    }
  },
  props: ['loginStas'],
  template: `        <div id="login" v-show="!loginStas">
            <!-- 登录面板模板 -->
            <div :id="plat?'login-board-m':'login-board'" v-if="login_board">
                <img src="/src/img/huixun.png" alt="backg_in.png" class="huixun">
                <h1>登录</h1>
                <div :class="plat?'input-box-m':'input-box'">
                    &nbsp;&nbsp;&nbsp;&nbsp;账号
                    <el-input id="uname" v-model="input_uname" placeholder="请输入账号" name="uname" autocomplete="on"
                        style="width: 80%;">
                    </el-input>
                </div>
                <div :class="plat?'input-box-m':'input-box'">
                    &nbsp;&nbsp;&nbsp;&nbsp;密码
                    <el-input id="password" name="password" placeholder="请输入密码" v-model="input_password" show-password
                        style="width: 80%;">
                    </el-input>
                </div>
                <el-button type="primary" class="login-button" onclick="login()">登录</el-button>
                <el-button type="primary" class="login-button" @click="login_board=!login_board">注册</el-button>
                <!-- sign-in函数是显示注册面板用的 -->
            </div>
            <!-- 注册面板模板 -->
            <div :id="plat?'signin-board-m':'signin-board'" v-else>
                <img src="/src/img/huixun.png" alt="backg_in.png" class="huixun">
                <h1>注册</h1>
                <div :class="plat?'input-box-m':'input-box'">
                    &nbsp;&nbsp;&nbsp;&nbsp;账号
                    <el-input id="new_uname" type="text" v-model="input_uname" placeholder="请输入账号" name="uname"
                        style="width: 80%;">
                    </el-input>
                </div>
                <div :class="plat?'input-box-m':'input-box'">
                    &nbsp;&nbsp;&nbsp;&nbsp;邮箱
                    <el-input id="email" v-model="input_mail" placeholder="请输入邮箱" name="email" type="email"
                        style="width: 80%;">
                    </el-input>
                </div>
                <div :class="plat?'input-box-m':'input-box'">
                    &nbsp;&nbsp;&nbsp;&nbsp;密码
                    <el-input id="password" name="password" placeholder="请输入密码" v-model="input_password" show-password
                        style="width: 80%;">
                    </el-input>
                </div>
                <div :class="plat?'input-box-m':'input-box'">
                    &nbsp;确认密码
                    <el-input id="password_again" name="password_again" placeholder="请再次输入密码" v-model="check_password"
                        show-password style="width: 74%;">
                    </el-input>
                </div>
                <el-button type="primary" class="login-button" @click="login_board=!login_board">登录</el-button>
                <el-button type="primary" class="login-button" onclick="enroll()">注册</el-button>

                <!-- login函数是显示登录面板用的 -->
            </div>

            <!-- 脚本（is-login)：判断账户是否登录，若没有登录就把这个元素显示出来，如果登录了就不显示 -->
        </div>`,
  mounted: function () {
    console.log("Login");
    console.log(this.loginStas);
  }
})


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

Vue.component('header-index', {
  data() {
    return {
      activeIndex: "1",
      activeIndex2: "1",
      type: 1,
      uname: 'null',
      Token: 'null',
      plat: Plat,
    };
  },
  props: ['loginStas'],
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
      this.Token = localStorage.getItem("token");
      // console.log(this);
      var this_ = this;
      axios({
        method: "get",
        url: host + "user/info/" + localStorage.getItem("uname"),
        headers: { " token": this.Token },
      }).then(function (response) {
        console.log(response);
        // console.log("Type: " + response.data.data.userType);
        if (response.data.code == 200) {
          // console.log("Type: " + response.data.data.userType);
          this_.type = response.data.data.userType;
        } else {
          this_.uname = "null"
          this_.type = 2;
        }
      });
    }
  },
  mounted: function () {
    console.log("header login " + this.loginStas);
    // console.log("header created");
    this.get_hello();
  },
  template: `                <el-menu :default-active="activeIndex2" class="el-menu-demo" mode="horizontal" @select="handleSelect"
                    text-color="#fff" active-text-color="#ffd04b" style="position: relative;">
                    <!-- 首页标签 -->
                    <el-menu-item index="1" id="index-tag">
                        <a href="/index.html" id="index-target">
                            <i class="el-icon-house" style="color: #409EFF;"></i><span>首页</span>
                        </a>
                    </el-menu-item>
                    <el-menu-item index="0" id="hello-tag" v-if="loginStas">
                        <span id="account-type-1" v-if="type==1">普通用户</span><span id="account-type-2"
                            v-if="type==0">管理员</span><span id="account-name" v-if="!plat"> {{ uname }} 您好！</span>
                        <!-- 脚本(get_hello):判断用户权限和昵称，并填入用户权限类型（若用户权限为普通用户样式为account-type-1，若用户权限为管理员样式为account-type-2）和用户昵称（样式为account-name）中 -->
                    </el-menu-item>
                    <!-- 用户中心标签 -->
                    <el-menu-item index="1" style="position: absolute; right: 25px; padding:0px 0px 0px 10px;">
                        <el-dropdown>
                            <span class="el-dropdown-link">
                                <i class="el-icon-user-solid" style="color: #409EFF;"></i>用户中心<i
                                    class="el-icon-arrow-down"></i>
                            </span>
                            <!-- 下拉框，分别对应文档管理，账号登出等功能 -->
                            <el-dropdown-menu slot="dropdown">
                                <el-dropdown-item v-if="type==2">
                                    <i class="el-icon-document-add" style="color: #606266;"></i>
                                    <input type="button" class="idw"
                                        onclick="window.location.href = '/src/html/manage.html'" value="文档管理"
                                        id="input-button" />
                                </el-dropdown-item>
                                <el-dropdown-item>
                                    <i><img src="/svg/sign-out.svg" width="14px" height="14px"
                                            style="position: relative; top: 1px;"></i>
                                    <input type="button" class="ch_user" onclick="ch_user()" value="账号登出"
                                        id="input-button" />
                                </el-dropdown-item>
                                <el-dropdown-item>
                                    <i class="el-icon-error" style="color: #606266;"></i>
                                    <input type="button" class="br_user" onclick="Break()" value="账号注销"
                                        id="input-button" />
                                </el-dropdown-item>
                            </el-dropdown-menu>
                        </el-dropdown>
                    </el-menu-item>
                </el-menu>`
})
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
      loginstatus: 0,
      token: '',
      plat: Plat,
    };
  },
  mounted() {
    this.token = localStorage.getItem("token");
    // console.log("debug");
    this.loginstatus = IsLogin();
    console.log(this.loginstatus);
    this.get_information();
    this.get_like();
    this.get_dislike();
    this.get_pdf();

  },
  methods: {
    get_information() {

      //获取url
      var c_url = window.location.href;
      // console.log(c_url);
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
      this.keyword = c_urlArray['keyword'];
      // sconsole.log(this.keyword);
      var this_ = this;
      axios({
        method: "get",
        url: host + "index/" + this.keyword + "/1",
        headers: { token: Token },
      })
        .then(function (response) {
          // console.log(response);
          if (response.data.code == 200) {
            this_.tableData = response.data.data[c_urlArray['index']];
          } else {
            alert(response.msg);
          }

        })
        .catch(function (error) {
          console.log(error);
        });
      time = this.tableData.uploadTime; //.match('/.*(?=[A-Z])/g');
    },
    get_like() {
      var this_ = this;
      axios({
        method: "get",
        url: host + "is/liked",
        headers: { token: Token },
        data: {
          likedFileId: this_.tableData.fileID,
        },
      })
        .then(function (response) {
          isLike = (response.data.code == 4026);
        })
        .catch(function (error) {
          console.log(error);
        });
    },
    get_dislike() {
      var this_ = this;
      axios({
        method: "get",
        url: host + "is/disliked",
        headers: { token: Token },
        data: {
          likedFileId: this_.tableData.fileID,
        },
      })
        .then(function (response) {
          isDislike = (response.data.code == 4026);
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
      var this_ = this;
      axios({
        method: "post",
        url: host + "dislike/pdf",
        headers: { token: Token },
        data: {
          likedFileId: this_.tableData.fileID,
        }

      })
        .then(function (response) {
          if (response.data.code == 4025)
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
      var this_ = this;
      axios({
        method: "post",
        url: host + "like/pdf",
        headers: { token: Token },
        data: {
          likedFileId: this_.tableData.fileID,
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
      var this_ = this;
      axios({
        method: "get",
        url: host + "download/" + this_.tableData.fileID,
        headers: { token: Token },
      })
        .catch(function (error) {
          console.log(error);
        });
    },
    get_pdf() {
      var this_ = this;
      axios({
        method: "get",
        url: host + "preview/pdf/" + this_.tableData.fileID,
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
new Ctor().$mount("#app");
