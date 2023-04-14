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


      tableData: [
        {
          fileName: "斗破苍穹1",
          fileID: "1",
          data: [
            {
              id: null,
              pdfId: "1",
              pageId: "2",
              paraId: "1",
              content:
                '在将所有的物资准备齐全之后，剩下的两日时间，<span class="highlight_glimmer">萧炎</span>便停止了忙碌，静下心来享受着这极其短暂的平静生活，而似是清楚<span class="highlight_glimmer">萧炎</span>此时的心情，所以药老也一直没有出言打扰，任由他自己安排着时间',
            },
            {
              id: null,
              pdfId: "1",
              pageId: "1",
              paraId: "1",
              content:
                '从拍卖场出来，<span class="highlight_glimmer">萧炎</span>立在人流拥挤的街道分岔口，望着这片相处了十多年的城市，许久之后，有些落寞的轻叹了一口气，旋即紧紧的握着拳头，似是在给自己打气般的轻声道：“外面的世界，一定会更精彩…”说完，<span class="highlight_glimmer">萧炎</span>笑了笑，甩去心中的一些惆怅，迈动着脚步，汇进人流之中，迅速消失不见。',
            },
            {
              id: null,
              pdfId: "1",
              pageId: "2",
              paraId: "2",
              content:
                '<span class="highlight_glimmer">萧炎</span>这两日的安静，也让得有些敏感的薰儿察觉到了什么，于是，小妮子一没事，就跟在前者身边，水灵的眸子中，泛着浓浓的不舍与眷恋。',
            },
          ],
        },
        {
          fileName: "斗破苍穹2",
          fileID: "2",
          data: [
            {
              id: null,
              pdfId: "2",
              pageId: "1",
              paraId: "3",
              content:
                '顺着小路，行进自己的房间之中，<span class="highlight_glimmer">萧炎<span>从枕头下，取出三枚纳戒，将暗红色的一只戴在手指上，其余的两枚，则是小心的揣进了怀中，三枚纳戒虽然是低级，不过也能算作是珍贵之物，行走在外，财不露白，这点道理，<span class="highlight_glimmer">萧炎<span>还是明白得很清楚。',
            },
            {
              id: null,
              pdfId: "2",
              pageId: "1",
              paraId: "1",
              content:
                '行走在家族的小路上，<span class="highlight_glimmer">萧炎<span>舒展了一下懒腰，今天，便是离开的时候，刚才他已经去见了父亲，也与他说了自己的打算。',
            },
          ],
        },
        {
          fileName: "斗破苍穹1",
          fileID: "1",
          data: [
            {
              id: null,
              pdfId: "1",
              pageId: "2",
              paraId: "1",
              content:
                '在将所有的物资准备齐全之后，剩下的两日时间，<span class="highlight_glimmer">萧炎</span>便停止了忙碌，静下心来享受着这极其短暂的平静生活，而似是清楚<span class="highlight_glimmer">萧炎</span>此时的心情，所以药老也一直没有出言打扰，任由他自己安排着时间',
            },
            {
              id: null,
              pdfId: "1",
              pageId: "1",
              paraId: "1",
              content:
                '从拍卖场出来，<span class="highlight_glimmer">萧炎<span>立在人流拥挤的街道分岔口，望着这片相处了十多年的城市，许久之后，有些落寞的轻叹了一口气，旋即紧紧的握着拳头，似是在给自己打气般的轻声道：“外面的世界，一定会更精彩…”说完，<span class="highlight_glimmer">萧炎<span>笑了笑，甩去心中的一些惆怅，迈动着脚步，汇进人流之中，迅速消失不见。',
            },
            {
              id: null,
              pdfId: "1",
              pageId: "2",
              paraId: "2",
              content:
                '<span class="highlight_glimmer">萧炎<span>这两日的安静，也让得有些敏感的薰儿察觉到了什么，于是，小妮子一没事，就跟在前者身边，水灵的眸子中，泛着浓浓的不舍与眷恋。',
            },
          ],
        },
        {
          fileName: "斗破苍穹2",
          fileID: "2",
          data: [
            {
              id: null,
              pdfId: "2",
              pageId: "1",
              paraId: "3",
              content:
                '顺着小路，行进自己的房间之中，<span class="highlight_glimmer">萧炎<span>从枕头下，取出三枚纳戒，将暗红色的一只戴在手指上，其余的两枚，则是小心的揣进了怀中，三枚纳戒虽然是低级，不过也能算作是珍贵之物，行走在外，财不露白，这点道理，<span class="highlight_glimmer">萧炎<span>还是明白得很清楚。',
            },
            {
              id: null,
              pdfId: "2",
              pageId: "1",
              paraId: "1",
              content:
                '行走在家族的小路上，<span class="highlight_glimmer">萧炎<span>舒展了一下懒腰，今天，便是离开的时候，刚才他已经去见了父亲，也与他说了自己的打算。',
            },
          ],
        },
        {
          fileName: "斗破苍穹1",
          fileID: "1",
          data: [
            {
              id: null,
              pdfId: "1",
              pageId: "2",
              paraId: "1",
              content:
                '在将所有的物资准备齐全之后，剩下的两日时间，<span class="highlight_glimmer">萧炎</span>便停止了忙碌，静下心来享受着这极其短暂的平静生活，而似是清楚<span class="highlight_glimmer">萧炎</span>此时的心情，所以药老也一直没有出言打扰，任由他自己安排着时间',
            },
            {
              id: null,
              pdfId: "1",
              pageId: "1",
              paraId: "1",
              content:
                '从拍卖场出来，<span class="highlight_glimmer">萧炎<span>立在人流拥挤的街道分岔口，望着这片相处了十多年的城市，许久之后，有些落寞的轻叹了一口气，旋即紧紧的握着拳头，似是在给自己打气般的轻声道：“外面的世界，一定会更精彩…”说完，<span class="highlight_glimmer">萧炎<span>笑了笑，甩去心中的一些惆怅，迈动着脚步，汇进人流之中，迅速消失不见。',
            },
            {
              id: null,
              pdfId: "1",
              pageId: "2",
              paraId: "2",
              content:
                '<span class="highlight_glimmer">萧炎<span>这两日的安静，也让得有些敏感的薰儿察觉到了什么，于是，小妮子一没事，就跟在前者身边，水灵的眸子中，泛着浓浓的不舍与眷恋。',
            },
          ],
        },
        {
          fileName: "斗破苍穹2",
          fileID: "2",
          data: [
            {
              id: null,
              pdfId: "2",
              pageId: "1",
              paraId: "3",
              content:
                '顺着小路，行进自己的房间之中，<span class="highlight_glimmer">萧炎<span>从枕头下，取出三枚纳戒，将暗红色的一只戴在手指上，其余的两枚，则是小心的揣进了怀中，三枚纳戒虽然是低级，不过也能算作是珍贵之物，行走在外，财不露白，这点道理，<span class="highlight_glimmer">萧炎<span>还是明白得很清楚。',
            },
            {
              id: null,
              pdfId: "2",
              pageId: "1",
              paraId: "1",
              content:
                '行走在家族的小路上，<span class="highlight_glimmer">萧炎<span>舒展了一下懒腰，今天，便是离开的时候，刚才他已经去见了父亲，也与他说了自己的打算。',
            },
          ],
        },
        {
          fileName: "斗破苍穹1",
          fileID: "1",
          data: [
            {
              id: null,
              pdfId: "1",
              pageId: "2",
              paraId: "1",
              content:
                '在将所有的物资准备齐全之后，剩下的两日时间，<span class="highlight_glimmer">萧炎</span>便停止了忙碌，静下心来享受着这极其短暂的平静生活，而似是清楚<span class="highlight_glimmer">萧炎</span>此时的心情，所以药老也一直没有出言打扰，任由他自己安排着时间',
            },
            {
              id: null,
              pdfId: "1",
              pageId: "1",
              paraId: "1",
              content:
                '从拍卖场出来，<span class="highlight_glimmer">萧炎<span>立在人流拥挤的街道分岔口，望着这片相处了十多年的城市，许久之后，有些落寞的轻叹了一口气，旋即紧紧的握着拳头，似是在给自己打气般的轻声道：“外面的世界，一定会更精彩…”说完，<span class="highlight_glimmer">萧炎<span>笑了笑，甩去心中的一些惆怅，迈动着脚步，汇进人流之中，迅速消失不见。',
            },
            {
              id: null,
              pdfId: "1",
              pageId: "2",
              paraId: "2",
              content:
                '<span class="highlight_glimmer">萧炎<span>这两日的安静，也让得有些敏感的薰儿察觉到了什么，于是，小妮子一没事，就跟在前者身边，水灵的眸子中，泛着浓浓的不舍与眷恋。',
            },
          ],
        },
        {
          fileName: "斗破苍穹2",
          fileID: "2",
          data: [
            {
              id: null,
              pdfId: "2",
              pageId: "1",
              paraId: "3",
              content:
                '顺着小路，行进自己的房间之中，<span class="highlight_glimmer">萧炎<span>从枕头下，取出三枚纳戒，将暗红色的一只戴在手指上，其余的两枚，则是小心的揣进了怀中，三枚纳戒虽然是低级，不过也能算作是珍贵之物，行走在外，财不露白，这点道理，<span class="highlight_glimmer">萧炎<span>还是明白得很清楚。',
            },
            {
              id: null,
              pdfId: "2",
              pageId: "1",
              paraId: "1",
              content:
                '行走在家族的小路上，<span class="highlight_glimmer">萧炎<span>舒展了一下懒腰，今天，便是离开的时候，刚才他已经去见了父亲，也与他说了自己的打算。',
            },
          ],
        },
        {
          fileName: "斗破苍穹1",
          fileID: "1",
          data: [
            {
              id: null,
              pdfId: "1",
              pageId: "2",
              paraId: "1",
              content:
                '在将所有的物资准备齐全之后，剩下的两日时间，<span class="highlight_glimmer">萧炎</span>便停止了忙碌，静下心来享受着这极其短暂的平静生活，而似是清楚<span class="highlight_glimmer">萧炎</span>此时的心情，所以药老也一直没有出言打扰，任由他自己安排着时间',
            },
            {
              id: null,
              pdfId: "1",
              pageId: "1",
              paraId: "1",
              content:
                '从拍卖场出来，<span class="highlight_glimmer">萧炎</span>立在人流拥挤的街道分岔口，望着这片相处了十多年的城市，许久之后，有些落寞的轻叹了一口气，旋即紧紧的握着拳头，似是在给自己打气般的轻声道：“外面的世界，一定会更精彩…”说完，<span class="highlight_glimmer">萧炎<span>笑了笑，甩去心中的一些惆怅，迈动着脚步，汇进人流之中，迅速消失不见。',
            },
            {
              id: null,
              pdfId: "1",
              pageId: "2",
              paraId: "2",
              content:
                '<span class="highlight_glimmer">萧炎</span>这两日的安静，也让得有些敏感的薰儿察觉到了什么，于是，小妮子一没事，就跟在前者身边，水灵的眸子中，泛着浓浓的不舍与眷恋。',
            },
          ],
        },
        {
          fileName: "斗破苍穹2",
          fileID: "2",
          data: [
            {
              id: null,
              pdfId: "2",
              pageId: "1",
              paraId: "3",
              content:
                '顺着小路，行进自己的房间之中，<span class="highlight_glimmer">萧炎</span>从枕头下，取出三枚纳戒，将暗红色的一只戴在手指上，其余的两枚，则是小心的揣进了怀中，三枚纳戒虽然是低级，不过也能算作是珍贵之物，行走在外，财不露白，这点道理，<span class="highlight_glimmer">萧炎<span>还是明白得很清楚。',
            },
            {
              id: null,
              pdfId: "2",
              pageId: "1",
              paraId: "1",
              content:
                '行走在家族的小路上，<span class="highlight_glimmer">萧炎</span>舒展了一下懒腰，今天，便是离开的时候，刚才他已经去见了父亲，也与他说了自己的打算。',
            },
          ],
        },
        {
          fileName: "斗破苍穹1",
          fileID: "1",
          data: [
            {
              id: null,
              pdfId: "1",
              pageId: "2",
              paraId: "1",
              content:
                '在将所有的物资准备齐全之后，剩下的两日时间，<span class="highlight_glimmer">萧炎</span>便停止了忙碌，静下心来享受着这极其短暂的平静生活，而似是清楚<span class="highlight_glimmer">萧炎</span>此时的心情，所以药老也一直没有出言打扰，任由他自己安排着时间',
            },
            {
              id: null,
              pdfId: "1",
              pageId: "1",
              paraId: "1",
              content:
                '从拍卖场出来，<span class="highlight_glimmer">萧炎</span>立在人流拥挤的街道分岔口，望着这片相处了十多年的城市，许久之后，有些落寞的轻叹了一口气，旋即紧紧的握着拳头，似是在给自己打气般的轻声道：“外面的世界，一定会更精彩…”说完，<span class="highlight_glimmer">萧炎<span>笑了笑，甩去心中的一些惆怅，迈动着脚步，汇进人流之中，迅速消失不见。',
            },
            {
              id: null,
              pdfId: "1",
              pageId: "2",
              paraId: "2",
              content:
                '<span class="highlight_glimmer">萧炎</span>这两日的安静，也让得有些敏感的薰儿察觉到了什么，于是，小妮子一没事，就跟在前者身边，水灵的眸子中，泛着浓浓的不舍与眷恋。',
            },
          ],
        },
        {
          fileName: "斗破苍穹2",
          fileID: "2",
          data: [
            {
              id: null,
              pdfId: "2",
              pageId: "1",
              paraId: "3",
              content:
                '顺着小路，行进自己的房间之中，<span class="highlight_glimmer">萧炎</span>从枕头下，取出三枚纳戒，将暗红色的一只戴在手指上，其余的两枚，则是小心的揣进了怀中，三枚纳戒虽然是低级，不过也能算作是珍贵之物，行走在外，财不露白，这点道理，<span class="highlight_glimmer">萧炎<span>还是明白得很清楚。',
            },
            {
              id: null,
              pdfId: "2",
              pageId: "1",
              paraId: "1",
              content:
                '行走在家族的小路上，<span class="highlight_glimmer">萧炎</span>舒展了一下懒腰，今天，便是离开的时候，刚才他已经去见了父亲，也与他说了自己的打算。',
            },
          ],
        },
      ],
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
        url: "http://localhost:8080/download/pdf",
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
      axios({
        method: "get",
        url: "http://host/index/" + c_urlArray["keyword"] + "/1", //传参？
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
        url: "http://localhost:8080/like/pdf",
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
        url: "http://localhost:8080/dislike/pdf",
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
  },
};
var Ctor = Vue.extend(Main);
new Ctor().$mount("main");
