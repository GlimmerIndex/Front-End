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
      axios({
        method: "",
        url: "",
        headers: { " taken": Token },
      }).then(function (response) {
        if (response.code == 1) {
          uname='萧炎';
          type=1;
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

// Data = [
//   {
//     "id": 1642830312792764417,
//     "fileName": "微积分全册 电子科技大学.pdf",
//     "filePath": "PDFFiles/03a2448f-01c7-4081-8625-94a9d7d1d8d6-微积分全册 电子科技大学.pdf",
//     "fileSize": 11294748,
//     "fileType": "pdf",
//     "uploadTime": "2023-04-03T10:04:03.000+00:00",
//     "uploadBy": 1637028625444241413,
//     "updateTime": null,
//     "updateBy": null,
//     "delFlag": null,
//     "hashFileName": "SDkq9Z9OAUYVcFoI21lG49e7CwnQbdjl2egs19vDuhU=",
//     "uuidFileName": "null",
//     "likeNumber": 0,
//     "dislikeNumber": 1
// },
// {
//     "id": 1642845455069003778,
//     "fileName": "CProg20220604.pdf",
//     "filePath": "PDFFiles/59cd1699-bffc-46a9-95a1-a3afd6e13e41-CProg20220604.pdf",
//     "fileSize": 5869634,
//     "fileType": "pdf",
//     "uploadTime": "2023-04-03T11:04:14.000+00:00",
//     "uploadBy": 1637028625444241413,
//     "updateTime": null,
//     "updateBy": null,
//     "delFlag": null,
//     "hashFileName": "claAWPBAci1Yhu7f/fsmgCaXTrzEFGZ6ZtzK1IcCMH4=",
//     "uuidFileName": "null",
//     "likeNumber": 0,
//     "dislikeNumber": 1
// },];

// function init(){
//   // alert("wsad");
//   var Token = localStorage.getItem("token");
//   axios({
//     method: "get",
//     url: "http://localhost:8080/show/pdf", 
//     headers: { 'token': Token },
//   })
//     .then(function (response) {
//       if (response.code == 200) {
//         this.Data = response;                         //是否正确赋值Data
//         window.location.href = "../html/manage.html";
//       } else {
//         alert(response.msg);
//       }
//     })
//     .catch(function (error) {
//       console.log(error);
//     });

// }

var Main = {
  data() {
    return {
      currentPage: 1,
      pagesize: 10,
      tableData:  [
        {
          "id": 1642830312792764417,
          "fileName": "微积分全册 电子科技大学.pdf",
          "filePath": "PDFFiles/03a2448f-01c7-4081-8625-94a9d7d1d8d6-微积分全册 电子科技大学.pdf",
          "fileSize": 11294748,
          "fileType": "pdf",
          "uploadTime": "2023-04-03T10:04:03.000+00:00",
          "uploadBy": 1637028625444241413,
          "updateTime": null,
          "updateBy": null,
          "delFlag": null,
          "hashFileName": "SDkq9Z9OAUYVcFoI21lG49e7CwnQbdjl2egs19vDuhU=",
          "uuidFileName": "null",
          "likeNumber": 0,
          "dislikeNumber": 1
      },
      {
          "id": 1642845455069003778,
          "fileName": "CProg20220604.pdf",
          "filePath": "PDFFiles/59cd1699-bffc-46a9-95a1-a3afd6e13e41-CProg20220604.pdf",
          "fileSize": 5869634,
          "fileType": "pdf",
          "uploadTime": "2023-04-03T11:04:14.000+00:00",
          "uploadBy": 1637028625444241413,
          "updateTime": null,
          "updateBy": null,
          "delFlag": null,
          "hashFileName": "claAWPBAci1Yhu7f/fsmgCaXTrzEFGZ6ZtzK1IcCMH4=",
          "uuidFileName": "null",
          "likeNumber": 0,
          "dislikeNumber": 1
      },{
        "id": 1642830312792764417,
        "fileName": "微积分全册 电子科技大学.pdf",
        "filePath": "PDFFiles/03a2448f-01c7-4081-8625-94a9d7d1d8d6-微积分全册 电子科技大学.pdf",
        "fileSize": 11294748,
        "fileType": "pdf",
        "uploadTime": "2023-04-03T10:04:03.000+00:00",
        "uploadBy": 1637028625444241413,
        "updateTime": null,
        "updateBy": null,
        "delFlag": null,
        "hashFileName": "SDkq9Z9OAUYVcFoI21lG49e7CwnQbdjl2egs19vDuhU=",
        "uuidFileName": "null",
        "likeNumber": 0,
        "dislikeNumber": 1
    },
    {
        "id": 1642845455069003778,
        "fileName": "CProg20220604.pdf",
        "filePath": "PDFFiles/59cd1699-bffc-46a9-95a1-a3afd6e13e41-CProg20220604.pdf",
        "fileSize": 5869634,
        "fileType": "pdf",
        "uploadTime": "2023-04-03T11:04:14.000+00:00",
        "uploadBy": 1637028625444241413,
        "updateTime": null,
        "updateBy": null,
        "delFlag": null,
        "hashFileName": "claAWPBAci1Yhu7f/fsmgCaXTrzEFGZ6ZtzK1IcCMH4=",
        "uuidFileName": "null",
        "likeNumber": 0,
        "dislikeNumber": 1
    },{
      "id": 1642830312792764417,
      "fileName": "微积分全册 电子科技大学.pdf",
      "filePath": "PDFFiles/03a2448f-01c7-4081-8625-94a9d7d1d8d6-微积分全册 电子科技大学.pdf",
      "fileSize": 11294748,
      "fileType": "pdf",
      "uploadTime": "2023-04-03T10:04:03.000+00:00",
      "uploadBy": 1637028625444241413,
      "updateTime": null,
      "updateBy": null,
      "delFlag": null,
      "hashFileName": "SDkq9Z9OAUYVcFoI21lG49e7CwnQbdjl2egs19vDuhU=",
      "uuidFileName": "null",
      "likeNumber": 0,
      "dislikeNumber": 1
  },
  {
      "id": 1642845455069003778,
      "fileName": "CProg20220604.pdf",
      "filePath": "PDFFiles/59cd1699-bffc-46a9-95a1-a3afd6e13e41-CProg20220604.pdf",
      "fileSize": 5869634,
      "fileType": "pdf",
      "uploadTime": "2023-04-03T11:04:14.000+00:00",
      "uploadBy": 1637028625444241413,
      "updateTime": null,
      "updateBy": null,
      "delFlag": null,
      "hashFileName": "claAWPBAci1Yhu7f/fsmgCaXTrzEFGZ6ZtzK1IcCMH4=",
      "uuidFileName": "null",
      "likeNumber": 0,
      "dislikeNumber": 1
  },{
    "id": 1642830312792764417,
    "fileName": "微积分全册 电子科技大学.pdf",
    "filePath": "PDFFiles/03a2448f-01c7-4081-8625-94a9d7d1d8d6-微积分全册 电子科技大学.pdf",
    "fileSize": 11294748,
    "fileType": "pdf",
    "uploadTime": "2023-04-03T10:04:03.000+00:00",
    "uploadBy": 1637028625444241413,
    "updateTime": null,
    "updateBy": null,
    "delFlag": null,
    "hashFileName": "SDkq9Z9OAUYVcFoI21lG49e7CwnQbdjl2egs19vDuhU=",
    "uuidFileName": "null",
    "likeNumber": 0,
    "dislikeNumber": 1
},
{
    "id": 1642845455069003778,
    "fileName": "CProg20220604.pdf",
    "filePath": "PDFFiles/59cd1699-bffc-46a9-95a1-a3afd6e13e41-CProg20220604.pdf",
    "fileSize": 5869634,
    "fileType": "pdf",
    "uploadTime": "2023-04-03T11:04:14.000+00:00",
    "uploadBy": 1637028625444241413,
    "updateTime": null,
    "updateBy": null,
    "delFlag": null,
    "hashFileName": "claAWPBAci1Yhu7f/fsmgCaXTrzEFGZ6ZtzK1IcCMH4=",
    "uuidFileName": "null",
    "likeNumber": 0,
    "dislikeNumber": 1
},{
  "id": 1642830312792764417,
  "fileName": "微积分全册 电子科技大学.pdf",
  "filePath": "PDFFiles/03a2448f-01c7-4081-8625-94a9d7d1d8d6-微积分全册 电子科技大学.pdf",
  "fileSize": 11294748,
  "fileType": "pdf",
  "uploadTime": "2023-04-03T10:04:03.000+00:00",
  "uploadBy": 1637028625444241413,
  "updateTime": null,
  "updateBy": null,
  "delFlag": null,
  "hashFileName": "SDkq9Z9OAUYVcFoI21lG49e7CwnQbdjl2egs19vDuhU=",
  "uuidFileName": "null",
  "likeNumber": 0,
  "dislikeNumber": 1
},
{
  "id": 1642845455069003778,
  "fileName": "CProg20220604.pdf",
  "filePath": "PDFFiles/59cd1699-bffc-46a9-95a1-a3afd6e13e41-CProg20220604.pdf",
  "fileSize": 5869634,
  "fileType": "pdf",
  "uploadTime": "2023-04-03T11:04:14.000+00:00",
  "uploadBy": 1637028625444241413,
  "updateTime": null,
  "updateBy": null,
  "delFlag": null,
  "hashFileName": "claAWPBAci1Yhu7f/fsmgCaXTrzEFGZ6ZtzK1IcCMH4=",
  "uuidFileName": "null",
  "likeNumber": 0,
  "dislikeNumber": 1
},{
  "id": 1642830312792764417,
  "fileName": "微积分全册 电子科技大学.pdf",
  "filePath": "PDFFiles/03a2448f-01c7-4081-8625-94a9d7d1d8d6-微积分全册 电子科技大学.pdf",
  "fileSize": 11294748,
  "fileType": "pdf",
  "uploadTime": "2023-04-03T10:04:03.000+00:00",
  "uploadBy": 1637028625444241413,
  "updateTime": null,
  "updateBy": null,
  "delFlag": null,
  "hashFileName": "SDkq9Z9OAUYVcFoI21lG49e7CwnQbdjl2egs19vDuhU=",
  "uuidFileName": "null",
  "likeNumber": 0,
  "dislikeNumber": 1
},
{
  "id": 1642845455069003778,
  "fileName": "CProg20220604.pdf",
  "filePath": "PDFFiles/59cd1699-bffc-46a9-95a1-a3afd6e13e41-CProg20220604.pdf",
  "fileSize": 5869634,
  "fileType": "pdf",
  "uploadTime": "2023-04-03T11:04:14.000+00:00",
  "uploadBy": 1637028625444241413,
  "updateTime": null,
  "updateBy": null,
  "delFlag": null,
  "hashFileName": "claAWPBAci1Yhu7f/fsmgCaXTrzEFGZ6ZtzK1IcCMH4=",
  "uuidFileName": "null",
  "likeNumber": 0,
  "dislikeNumber": 1
},],
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
          if (response.code == 200) {
            this.tableData = response;
            // window.location.href = "../html/manage.html";
          } else {
            alert(response.msg);
          }
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
			console.log(file);
			console.log(fileLists);
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