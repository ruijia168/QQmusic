const navLi = document.querySelectorAll(".nav-li");
const recommendList = document.querySelectorAll(".nav-li")[0];
const internetList = document.querySelectorAll(".nav-li")[1];
const lunboUl = document.querySelector(".lunbo-ul");
const toLeft = document.querySelector(".toleft");
const toRight = document.querySelector(".toright");
const coinCollection = document.querySelector(".coinCollection");
let recommend = null;
let len = null;
let distance = 1210;
//封装fetch请求获取歌单
function start(url = "http://localhost:3200/getSongLists?categoryId=39") {
  for (let j = 0; j < navLi.length; j++) {
    navLi[j].style.color = "black";
  }
  recommendList.style.color = "rgb(49, 194, 124)";
  fetch(url)
    .then((data) => {
      return data.json();
    })
    .then((res) => {
      lunboUl.innerHTML = "";
      coinCollection.innerHTML = "";
      recommend = res.response.data.list;
      const list = res.response.data.list;
      for (let i = 0; i < list.length; i++) {
        const addLi = ` <li class="lunbo-li">
            <div class="img-box">
                <div class="img">
                    <div class="cover">
                    </div>
                    <div class="play">
                    &#xe624;
                    </div>
                    <img src=${list[i].imgurl} alt="">
                   
                </div>
                <div class="title">${list[i].dissname}</div>
                <div class="other">播放量:&nbsp; &nbsp;${list[i].listennum}</div>
            </div>
        </li>`;
        lunboUl.innerHTML += addLi;
      }
      len = recommend.length;
      index = len % 5 == 0 ? len / 5 : len / 5 + 1;
      const slide = document.querySelectorAll(".slide");
      if (slide.length < index) {
        for (let i = 0; i < index; i++) {
          const coin = `<a class="lunbodian" href="#"><i class="slide circle"></i></a>`;
          coinCollection.innerHTML += coin;
        }
      }
      const lunbodian = document.querySelectorAll(".lunbodian");
      for (let j = 0; j < index; j++) {
        let coin = document.querySelectorAll(".slide");
        coin[0].style.backgroundColor = "rgba(178, 178, 178)";
        lunbodian[j].onclick = () => {
          m = -1210 * j;
          lunboUl.style.transform = `translateX(${m}px)`;

          for (let i = 0; i < index; i++) {
            coin[i].style.backgroundColor = "rgba(0, 0, 0, 0.1)";
          }
          coin[j].style.backgroundColor = "rgba(178, 178, 178)";
        };
      }
    });
}
start();
recommendList.addEventListener("click", () => {
  start("http://localhost:3200/getSongLists?categoryId=39");
});
//左箭头
toLeft.addEventListener("click", () => {
  len = recommend.length;
  index = len % 5 == 0 ? len / 5 : len / 5 + 1;
  if (distance == 1210) {
    distance = -1210 * (index - 1);
  }
  lunboUl.style.transform = `translateX(${distance}px)`;
  ControlCoin();
  distance += 1210;
  // circle[i].style.backgroundColor = 'rgba(178, 178, 178)'
});
//右箭头
toRight.addEventListener("click", () => {
  len = recommend.length;
  index = len % 5 == 0 ? len / 5 : len / 5 + 1;
  if (distance == 1210) {
    distance = -1210;
  }
  lunboUl.style.transform = `translateX(${distance}px)`;
  ControlCoin();
  distance -= 1210;
  if (distance == -1210 * index) {
    distance = 0;
  }
});
//轮播点
ControlCoin = () => {
  const circle = document.querySelectorAll(".slide");
  for (let i = 0; i < index; i++) {
    circle[i].style.backgroundColor = "rgba(0, 0, 0, 0.1)";
  }
  if (distance == 0) {
    circle[0].style.backgroundColor = "rgba(178, 178, 178)";
  } else if (distance == -1210) {
    circle[1].style.backgroundColor = "rgba(178, 178, 178)";
  } else if (distance == -2420) {
    circle[2].style.backgroundColor = "rgba(178, 178, 178)";
  } else {
    circle[3].style.backgroundColor = "rgba(178, 178, 178)";
  }
};
internetList.addEventListener("click", () => {
  start("http://localhost:3200/getSongLists?categoryId=99");
});

navLi[2].addEventListener("click", () => {
  start("http://localhost:3200/getSongLists?categoryId=16");
});

navLi[3].addEventListener("click", () => {
  start("http://localhost:3200/getSongLists?categoryId=15");
});

navLi[4].addEventListener("click", () => {
  start("http://localhost:3200/getSongLists?categoryId=153");
});
navLi[5].addEventListener("click", () => {
  start("http://localhost:3200/getSongLists?categoryId=220");
});
