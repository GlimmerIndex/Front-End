var host = "http://localhost:8080/"
var Plat = navigator.userAgent.match( // 判断不同端
  /(phone|pad|pod|iPhone|iPod|ios|iPad|Android|Mobile|BlackBerry|IEMobile|MQQBrowser|JUC|Fennec|wOSBrowser|BrowserNG|WebOS|Symbian|Windows Phone)/i
);
function IsLogin() {
  // console.log(localStorage.getItem("token"));
  // console.log(localStorage.getItem("token") !== null);
  if (localStorage.getItem("token") == null) {
    return false;
  }
  Token = localStorage.getItem("token");
  return true;
}
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
var Ctor = Vue.extend(Main);
new Ctor().$mount("#login");



// 退出登录
function ch_user() {
  a = confirm("是否要退出并重新登录");
  if (a == true) {
    localStorage.setItem("token", null);
    window.location.href = "/index.html";
  } else {
    return;
  }
}


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
                            v-if="type==0">管理员</span><span id="account-name" v-if="!plat"> {{ uname }} </span>您好！
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
Vue.component("file-manage", {
  data() {
    return {
      currentPage: 1,
      pagesize: 10,
      tableData: new Array(),
      plat: Plat,
    };
  },
  mounted() {
    this.init();
  },

  methods: {
    init() {
      // alert("wsad");
      var Token = localStorage.getItem("token");
      var this_ = this;
      axios({
        method: "get",
        url: host + "show/pdf",
        headers: { 'token': Token },
      })
        .then(function (response) {
          this_.tableData = response.data;
        })
        .catch(function (error) {
          console.log(error);
        });

    },
    Delete(a) {
      b = confirm("是否要删除该文档");
      if (b == true) {
        // alert("wadaw");
        var Token = localStorage.getItem("token");
        axios({
          methods: "get",
          url: host + "delete/pdf/" + a,
        }).then(function (response) {
          alert(response.msg);
          return;
        });
      }
      else { return; }
    },
    handleChange(file, fileLists) {
      // console.log(file);
      // console.log(fileLists);
      // 本地服务器路径
      console.log(URL.createObjectURL(file.raw));
      // 本地电脑路径
      console.log(document.getElementsByClassName("el-upload__input")[0].value);
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
  template: `    <div :id="plat?'files-m':'files'">
        <template>
            <el-table :data="tableData.slice((currentPage - 1) * pagesize, currentPage * pagesize)" style="width: 100%">
                <el-table-column prop="fileName" label="文件名" width="200 ">
                </el-table-column>
                <el-table-column prop="id" label="id" width="150">
                </el-table-column>
                <el-table-column prop="fileSize" label="文件体积" width="150">
                </el-table-column>
                <el-table-column prop="uploadTime" label="上传时间" width="150">
                </el-table-column>
                <el-table-column prop="likeNumber" label="获赞个数" width="100">
                </el-table-column>
                <el-table-column prop="dislikeNumber" label="被踩次数" width="100">
                </el-table-column>
                <el-table-column prop="visits" label="访问量" width="130">
                </el-table-column>

                <el-table-column fixed="right" label="操作" width="100">
                    <template slot-scope="scope">
                        <!-- <el-popconfirm confirm-button-text='好的' cancel-button-text='不用了' icon="el-icon-info"
                                icon-color="red" title="这是一段内容确定删除吗？"> -->
                        <el-button @click="Delete(scope.row.pdfId)" type="text" size="small">删除</el-button>
                        <!-- </el-popconfirm> -->
                    </template>
                </el-table-column>
            </el-table>
            <div>
                <el-pagination @size-change="handleSizeChange" @current-change="handleCurrentChange"
                    :current-page="currentPage" :page-sizes="[10, 30, 90, 120]" :page-size="pagesize"
                    layout="sizes, prev, pager, next, jumper" :total="tableData.length">
                </el-pagination>
            </div>
        </template>
        <!-- 脚本：利用vue添加各文献的属性 -->
    </div>`


});
// var Ctor = Vue.extend(Main);
// new Ctor().$mount("#files");

var Main = {
  data() {
    return {
      fileList: [

      ],
      loginstatus: 0,
      token: "",
      plat: Plat,
    };
  },
  methods: {
    submitUpload() {
      this.$refs.upload.submit();
    },
    handleRemove(file, fileList) {
      console.log(file, fileList);
    },
    handlePreview(file) {
      console.log(file);
    }
  },
  mounted() {
    this.token = localStorage.getItem("token");
    // console.log("debug");
    this.loginstatus = IsLogin();
  }
}
var Ctor = Vue.extend(Main)
new Ctor().$mount('#app')