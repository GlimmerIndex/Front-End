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

var Main = {
  data() {
    return {
      currentPage: 1,
      pagesize: 10,
      tableData: new Array(),
    };
  },
  mounted() {
    this.init();
  },
  
  methods: {
    init(){
      // alert("wsad");
      var Token = localStorage.getItem("token");
      axios({
        method: "get",
        url: "http://localhost:8080/show/pdf", 
        headers: { 'token': Token },
      })
        .then(function (response) {
          this.tableData = response;
        })
        .catch(function (error) {
          console.log(error);
        });

    },
    Delete(a) {
      b = confirm("是否要删除该文档");
      if(b==true){
        // alert("wadaw");
      var Token = localStorage.getItem("token");
      axios({
        methods: "get",
        url: "http://localhost:8080/delete/pdf/" + a,
      }).then(function (response) {
        alert(response.msg);
        return;
      });
    }
    else{return;}
    },
    handleChange(file, fileLists) {
			// console.log(file);
			// console.log(fileLists);
			// 本地服务器路径
			console.log(URL.createObjectURL(file.raw));
			// 本地电脑路径
			console.log(document.getElementsByClassName("el-upload__input")[0].value); 
		},
    handleSizeChange (size) {
      console.log(size,'size');
    this.pagesize = size;
    console.log(this.pagesize); //每页下拉显示数据
  },
  handleCurrentChange (currentPage) {
      console.log(currentPage,'currentPage');
    this.currentPage = currentPage;
    console.log(this.currentPage); //点击第几页
  },
  }


};
var Ctor = Vue.extend(Main);
new Ctor().$mount("#files");

var Main = {
  data() {
    return {
      fileList:  [
        
    ]
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
  }
}
var Ctor = Vue.extend(Main)
new Ctor().$mount('#app')