
var host = "http://localhost:8080/"
var Plat = navigator.userAgent.match( // 判断不同端
  /(phone|pad|pod|iPhone|iPod|ios|iPad|Android|Mobile|BlackBerry|IEMobile|MQQBrowser|JUC|Fennec|wOSBrowser|BrowserNG|WebOS|Symbian|Windows Phone)/i
);
var Main = {
  data() {
    return {
      isLogin: true,
      input_uname: "",
      input_password: "",
      input_mail: "",
      check_password: "",
      plat: Plat,
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
function IsLogin() {
  console.log(localStorage.getItem("token"));
  console.log(localStorage.getItem("token") !== null);
  if (localStorage.getItem("token") == null) {
    return false;
  }
  return true;
}
var Ctor = Vue.extend(Main);
new Ctor().$mount("#login");

Vue.component('search-index', {
  data() {
    return {
      input: "",
      plat: Plat,
    };
  },
  methods: {
    searcH() {
      window.location.href = "./src/html/search.html?keyword=" + this.input;
    },
  },
  template: `             <div :id="plat?'search-m':'search'">               <el-input  v-model="input" placeholder="请输入搜索内容">
                </el-input>
                <el-button type="primary" icon="el-icon-search" @click="searcH()">搜索</el-button></div>`
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

var main = new Vue({
  el: "#app",
  data() {
    return {
      input: "",
      currentPage: 1,
      pagesize: 10,
      tableData: new Array(),
      // 利用vue改变tabledata的值，当条数大于20时进行分页，并且在题名添加链接跳转
      loginstatus: false,
      plat: Plat,
    };
  },
  methods: {
    detail(a) {
      console.log(a.fileID);
      console.log(this.input);
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
      window.location.href = "/src/html/search.html?keyword=" + this.input;
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
      // console.log(c_urlArray["keyword"]);
      var main_this = this;
      axios({
        method: "get",
        url: host + "index/" + c_urlArray["keyword"] + "/1", //传参？
        headers: { token: Token },
      })
        .then(function (response) {
          if (response.data.code == 200) {
            main_this.tableData = response.data.data;
          } else {
            alert(response.data.msg);
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
  mounted() {
    this.SearcH();
    console.log("App created");
    console.log("前端版本");
    this.loginstatus = IsLogin();
    // console.log(this.loginstatus);
    var c_url = window.location.href;
    //获取参数
    if (c_url.indexOf("?") && c_url.indexOf("=")) {
      var c_urlArray = {};
      var c_val = c_url.split("?")[1];
      var c_valArray = c_val.split("&");
      for (let i = 0; i < c_valArray.length; i++) {
        let c_key = c_valArray[i].split("=")[0];
        let c_value = c_valArray[i].split("=")[1];
        c_urlArray[c_key] = c_value;
      }
    }
    this.input = c_urlArray["keyword"];
  }
});
