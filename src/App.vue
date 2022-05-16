<template>
  <div class="header">
    <ul class="header-button-left">
      <li @click="step = 0">Cancel</li>
    </ul>
    <ul class="header-button-right">
      <li v-if="step == 1" @click="step++">Next</li>
      <li v-if="step == 2" @click="publish">저장</li>
    </ul>
    <img src="./assets/logo.png" class="logo" />
  </div>
  <!-- <p>{{ $store.state.more }}</p>
  <button @click="$store.dispatch('getData')">더보기</button> -->

  <!-- <h4>안녕 {{ $store.state.name }}</h4>
  <button @click="$store.commit('이름변경')">버튼</button>
  <h4>나이 {{ $store.state.age }}</h4>
  <button @click="$store.commit('나이변경')">버튼</button>
  <p>{{ now2 }} {{ 카운터 }}</p>
  <button @click="카운터++">버튼</button> -->

  <ContainerItems
    @write="작성한글 = $event"
    :이미지="이미지"
    :dataItems="dataItems"
    :step="step"
    :필터적용="필터적용"
  />
  <button @click="more">더보기</button>

  <div class="footer">
    <ul class="footer-button-plus">
      <input @change="upload" type="file" id="file" class="inputfile" />
      <label for="file" class="input-plus">+</label>
    </ul>
  </div>
</template>



<script>
import ContainerItems from "./components/ContainerItems.vue";
import dataItems from "./assets/dataItems.js";
import axios from "axios";

export default {
  name: "AppItem",

  data() {
    return {
      dataItems,
      count: 0,
      step: 0,
      이미지: "",
      작성한글: "",
      필터적용: "",
      카운터: 0,
      datacount: 0,
    };
  },

  mounted() {
    this.emitter.on("필터", (a) => {
      this.필터적용 = a;
    });
  },
  computed: {
    now2() {
      return new Date();
    },
  },

  methods: {
    // now() {
    //   return new Date();
    // },

    publish() {
      var 내게시물 = {
        name: "Kim Hyun",
        userImage: "https://placeimg.com/100/100/arch",
        postImage: this.이미지,
        likes: 36,
        date: "May 15",
        liked: false,
        content: this.작성한글,
        filter: this.필터적용,
      };

      axios
        .post("/api/post", JSON.stringify(내게시물), {
          headers: {
            "Content-Type": `application/json`,
          },
        })
        .then((res) => {
          console.log(res);
        })
        .catch(function (error) {
          alert(error);
        });
      this.dataItems.unshift(내게시물);
      this.step = 0;
    },
    more() {
      axios
        .get("/api/account")
        .then((res) => {
          console.log(res);
          this.dataItems.push(res.data[this.datacount]);
          this.step = 0;
          this.datacount++;
        })
        .catch(function (error) {
          alert(error);
        });
      // .get(`https://codingapple1.github.io/vue/more${this.count}.json`)
      // .then((결과) => {
      //   console.log(결과.data);
      //   this.dataItems.push(결과.data);
      //   this.count++;
      //   return new Promise(() => {
      //     axios.post("http://localhost:3000/");
      //     axios
      //       .get("http://localhost:3000/")
      //       .then((데이터) => console.log(데이터));
      //   });
      // });
    },
    upload(e) {
      let a = e.target.files;
      let v = URL.createObjectURL(a[0]);
      this.이미지 = v;
      this.step++;
    },
  },
  components: {
    ContainerItems,
  },
};
</script>

<style>
body {
  margin: 0;
}
ul {
  padding: 5px;
  list-style-type: none;
}
.logo {
  width: 22px;
  margin: auto;
  display: block;
  position: absolute;
  left: 0;
  right: 0;
  top: 13px;
}
.header {
  width: 100%;
  height: 40px;
  background-color: white;
  padding-bottom: 8px;
  position: sticky;
  top: 0;
}
.header-button-left {
  color: skyblue;
  float: left;
  width: 50px;
  padding-left: 20px;
  cursor: pointer;
  margin-top: 10px;
}
.header-button-right {
  color: skyblue;
  float: right;
  width: 50px;
  cursor: pointer;
  margin-top: 10px;
}
.footer {
  width: 100%;
  position: sticky;
  bottom: 0;
  padding-bottom: 10px;
  background-color: white;
}
.footer-button-plus {
  width: 80px;
  margin: auto;
  text-align: center;
  cursor: pointer;
  font-size: 24px;
  padding-top: 12px;
}
.sample-box {
  width: 100%;
  height: 600px;
  background-color: bisque;
}
.inputfile {
  display: none;
}
.input-plus {
  cursor: pointer;
}
#app {
  box-sizing: border-box;
  font-family: "consolas";
  margin-top: 60px;
  width: 100%;
  max-width: 460px;
  margin: auto;
  position: relative;
  border-right: 1px solid #eee;
  border-left: 1px solid #eee;
}
</style>
