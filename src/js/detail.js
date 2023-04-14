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

var Main = {
  data() {
    return {
      filePath: '/pdf/2016-2021年大学英语四级真题及答案解析完整版合集(30套).pdf',
      pagenumber: 2,
      time: '',
      likeNumber: 0,
      dislikeNumber: 0,
      isLike: false,
      isDislike: false,
      tableData: {
        "fileName": "斗破苍穹1",
        "fileID": "1",
        "data": [
          {
            "id": null,
            "pdfId": "1",
            "pageId": "2",
            "paraId": "1",
            "content": "在将所有的物资准备齐全之后，剩下的两日时间，<span class=\"highlight_glimmer\">萧炎</span>便停止了忙碌，静下心来享受着这极其短暂的平静生活，而似是清楚<span class=\"highlight_glimmer\">萧炎</span>此时的心情，所以药老也一直没有出言打扰，任由他自己安排着时间"
          },

          {
            "id": null,
            "pdfId": "1",
            "pageId": "1",
            "paraId": "1",
            "content": "从拍卖场出来，<span class=\"highlight_glimmer\">萧炎</span>立在人流拥挤的街道分岔口，望着这片相处了十多年的城市，许久之后，有些落寞的轻叹了一口气，旋即紧紧的握着拳头，似是在给自己打气般的轻声道：“外面的世界，一定会更精彩…”说完，<span class=\"highlight_glimmer\">萧炎</span>笑了笑，甩去心中的一些惆怅，迈动着脚步，汇进人流之中，迅速消失不见。"
          },
          {
            "id": null,
            "pdfId": "1",
            "pageId": "1",
            "paraId": "1",
            "content": "从拍卖场出来，<span class=\"highlight_glimmer\">萧炎</span>立在人流拥挤的街道分岔口，望着这片相处了十多年的城市，许久之后，有些落寞的轻叹了一口气，旋即紧紧的握着拳头，似是在给自己打气般的轻声道：“外面的世界，一定会更精彩…”说完，<span class=\"highlight_glimmer\">萧炎</span>笑了笑，甩去心中的一些惆怅，迈动着脚步，汇进人流之中，迅速消失不见。"
          },
          {
            "id": null,
            "pdfId": "1",
            "pageId": "1",
            "paraId": "1",
            "content": "从拍卖场出来，<span class=\"highlight_glimmer\">萧炎</span>立在人流拥挤的街道分岔口，望着这片相处了十多年的城市，许久之后，有些落寞的轻叹了一口气，旋即紧紧的握着拳头，似是在给自己打气般的轻声道：“外面的世界，一定会更精彩…”说完，<span class=\"highlight_glimmer\">萧炎</span>笑了笑，甩去心中的一些惆怅，迈动着脚步，汇进人流之中，迅速消失不见。"
          },
          {
            "id": null,
            "pdfId": "1",
            "pageId": "1",
            "paraId": "1",
            "content": "从拍卖场出来，<span class=\"highlight_glimmer\">萧炎</span>立在人流拥挤的街道分岔口，望着这片相处了十多年的城市，许久之后，有些落寞的轻叹了一口气，旋即紧紧的握着拳头，似是在给自己打气般的轻声道：“外面的世界，一定会更精彩…”说完，<span class=\"highlight_glimmer\">萧炎</span>笑了笑，甩去心中的一些惆怅，迈动着脚步，汇进人流之中，迅速消失不见。"
          },
          {
            "id": null,
            "pdfId": "1",
            "pageId": "1",
            "paraId": "1",
            "content": "从拍卖场出来，<span class=\"highlight_glimmer\">萧炎</span>立在人流拥挤的街道分岔口，望着这片相处了十多年的城市，许久之后，有些落寞的轻叹了一口气，旋即紧紧的握着拳头，似是在给自己打气般的轻声道：“外面的世界，一定会更精彩…”说完，<span class=\"highlight_glimmer\">萧炎</span>笑了笑，甩去心中的一些惆怅，迈动着脚步，汇进人流之中，迅速消失不见。"
          },
          {
            "id": null,
            "pdfId": "1",
            "pageId": "2",
            "paraId": "2",
            "content": "<span class=\"highlight_glimmer\">萧炎</span>这两日的安静，也让得有些敏感的薰儿察觉到了什么，于是，小妮子一没事，就跟在前者身边，水灵的眸子中，泛着浓浓的不舍与眷恋。"
          }
        ]
      },
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
      if((!c_urlArray['index'])||(!c_urlArray['keyword'])){
        alert("无相关页面！");
      }
      axios({
        method: "get",
        url: "http://host/index/"+keyword+"/1",
        headers: { token: Token },
      })
        .then(function (response) {
          if (response.code == 200) {
            this.tableData=response.data[c_urlArray['index']];
          } else {
            alert(response.msg);
          }

        })
        .catch(function (error) {
          console.log(error);
        });
        time=tableData.uploadTime.match('/.*(?=[A-Z])/g');
    },
    get_like(){
      axios({
        method: "get",
        url: "http://localhost:8080/is/liked",
        headers: { token: Token },
        data: {
          likedFileId: this.tableData.fileID,
        },
      })
        .then(function (response) {
          isLike=(response.code==4026);
        })
        .catch(function (error) {
          console.log(error);
        });
    },
    get_dislike(){
      axios({
        method: "get",
        url: "http://localhost:8080/is/disliked",
        headers: { token: Token },
        data: {
          likedFileId: this.tableData.fileID,
        },
      })
        .then(function (response) {
          isDislike=(response.code==4026);
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
        url: "http://localhost:8080/dislike/pdf",
        headers: { token: Token },
        data: {
          likedFileId: this.tableData.fileID,
        }

      })
        .then(function (response) {
          if(response.code==4025)
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
        url: "http://localhost:8080/like/pdf",
        headers: { token: Token },
        data: {
          likedFileId: this.tableData.fileID,
        },
      })
        .then(function (response) {
          if(response.code==4025)
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
    download(){
      axios({
        method: "get",
        url: "http://localhost:8080/download/"+this.tableData.fileID,
        headers: { token: Token },
      })
        .catch(function (error) {
          console.log(error);
        });
    },
    get_pdf(){
      axios({
        method: "get",
        url: "http://localhost:8080/preview/pdf/"+this.tableData.fileID,
        headers: { token: Token },
      })
        .then(function (response){
            if(response.code==4028)
              filePath=response.msg;
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
new Ctor().$mount("main");
