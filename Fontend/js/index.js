
const navLi = document.querySelectorAll('.nav-li')
const recommendList = document.querySelectorAll('.nav-li')[0]
const internetList = document.querySelectorAll('.nav-li')[1]
const lunboUl = document.querySelector('.lunbo-ul')
const toLeft = document.querySelector('.toleft')
const toRight =document.querySelector('.toright')
const coinCollection = document.querySelector('.coinCollection')
let recommend = null
let len =null
let distance =1210
function start(){
    for(let j =0 ;j<navLi.length;j++){
        navLi[j].style.color = 'black'
    }
    recommendList.style.color = 'rgb(49, 194, 124)'
    fetch('http://localhost:3200/getSongLists?categoryId=39').then(data=>{
        return data.json()
    }).then(res=>{
        lunboUl.innerHTML=''
        coinCollection.innerHTML=''
        recommend = res.response.data.list
        const list =res.response.data.list
        for(let i=0;i<list.length;i++){
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
        </li>`
        lunboUl.innerHTML += addLi
        }
        len = recommend.length
        index = (len%5==0 ? len/5 : len/5+1)
        const slide =document.querySelectorAll('.slide')
            if(slide.length<index){
                for(let i =0;i<index;i++){
                    const coin =`<a class="lunbodian" href="#"><i class="slide circle"></i></a>`
                    coinCollection.innerHTML += coin
                }
            }
            const lunbodian = document.querySelectorAll('.lunbodian')
           for(let j=0;j<index;j++){
            lunbodian[j].onclick=()=>{
                m = -1210*j
                lunboUl.style.transform = `translateX(${m}px)`
            }
           }
        
    })
}
start()
recommendList.addEventListener('click',()=>{
    for(let j =0 ;j<navLi.length;j++){
        navLi[j].style.color = 'black'
    }
    recommendList.style.color = 'rgb(49, 194, 124)'
    fetch('http://localhost:3200/getSongLists?categoryId=39').then(data=>{
        return data.json()
    }).then(res=>{
        lunboUl.innerHTML=''
        coinCollection.innerHTML=''
        recommend = res.response.data.list
        const list =res.response.data.list
        for(let i=0;i<list.length;i++){
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
        </li>`
        lunboUl.innerHTML += addLi
        }
        len = recommend.length
        index = (len%5==0 ? len/5 : len/5+1)
        const slide =document.querySelectorAll('.slide')
            if(slide.length<index){
                for(let i =0;i<index;i++){
                    const coin =`<a class="lunbodian" href="#"><i class="slide circle"></i></a>`
                    coinCollection.innerHTML += coin
                }
            }
            const lunbodian = document.querySelectorAll('.lunbodian')
           for(let j=0;j<index;j++){
            lunbodian[j].onclick=()=>{
                m = -1210*j
                lunboUl.style.transform = `translateX(${m}px)`
            }
           }
        
    })
})
//左箭头
toLeft.addEventListener('click',()=>{
    len = recommend.length
    index = (len%5==0 ? len/5 : len/5+1)
    if(distance==1210){
        distance=(-1210)*(index-1)
    }
    lunboUl.style.transform = `translateX(${distance}px)`
    distance += 1210
    // distance = (-1210)*3
    // if(lunboUl.style.transform = `translateX(${distance}px)`){
    //     if(){
    //         current=0
    //     }else{
    //         current++
    //     }
    // }

    // let i = distance/(-1210)
    // const circle = document.querySelectorAll('.circle')
    // circle[i].style.backgroundColor = 'rgba(178, 178, 178)'
})
//右箭头
toRight.addEventListener('click',()=>{
    len = recommend.length
    index = (len%5==0 ? len/5 : len/5+1)
    // distance = (-1210)*current
    // if(lunboUl.style.transform = `translateX(${distance}px)`){
    //     if(current>=index-1){
    //         current=0
    //     }else{
    //         current++
    //     }
    // }
    if(distance==1210){
        distance=-1210
    }
    lunboUl.style.transform = `translateX(${distance}px)`
    console.log(distance);
    distance -= 1210
    if(distance==-1210*(index)){
        distance=0
    }
})

internetList.addEventListener('click',()=>{
    for(let j =0 ;j<navLi.length;j++){
        navLi[j].style.color = 'black'
    }
    internetList.style.color = 'rgb(49, 194, 124)'
    // http://localhost:3200/getSongLists?categoryId=99
    fetch('http://localhost:3200/getSongLists?categoryId=99').then((data)=>{
        return data.json()
    }).then(res=>{
        recommend = res.response.data.list
        const list =res.response.data.list
        lunboUl.innerHTML=''
        coinCollection.innerHTML=''
        for(let i=0;i<list.length;i++){
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
        </li>`
        lunboUl.innerHTML += addLi
        }
        len = recommend.length
        index = (len%5==0 ? len/5 : len/5+1)
        const slide =document.querySelectorAll('.slide')
            if(slide.length<index){
                for(let i =0;i<index;i++){
                    const coin =`<a class="lunbodian" href="#"><i class="slide"></i></a>`
                    coinCollection.innerHTML += coin
                }
            }
            const lunbodian = document.querySelectorAll('.lunbodian')
           for(let j=0;j<index;j++){
            lunbodian[j].onclick=()=>{
                m = -1210*j
                lunboUl.style.transform = `translateX(${m}px)`
            }
           }
       
    })
})

navLi[2].addEventListener('click',()=>{
    for(let j =0 ;j<navLi.length;j++){
        navLi[j].style.color = 'black'
    }
    navLi[2].style.color = 'rgb(49, 194, 124)'
    fetch('http://localhost:3200/getSongLists?categoryId=16').then((data)=>{
        return data.json()
    }).then(res=>{
        recommend = res.response.data.list
        const list =res.response.data.list
        lunboUl.innerHTML=''
        coinCollection.innerHTML=''
        for(let i=0;i<list.length;i++){
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
        </li>`
        lunboUl.innerHTML += addLi
        }
        len = recommend.length
        index = (len%5==0 ? len/5 : len/5+1)
        const slide =document.querySelectorAll('.slide')
            if(slide.length<index){
                for(let i =0;i<index;i++){
                    const coin =`<a class="lunbodian" href="#"><i class="slide"></i></a>`
                    coinCollection.innerHTML += coin
                }
            }
            const lunbodian = document.querySelectorAll('.lunbodian')
           for(let j=0;j<index;j++){
            lunbodian[j].onclick=()=>{
                m = -1210*j
                lunboUl.style.transform = `translateX(${m}px)`
            }
           }
       
    })
})

navLi[3].addEventListener('click',()=>{
    for(let j =0 ;j<navLi.length;j++){
        navLi[j].style.color = 'black'
    }
    navLi[3].style.color = 'rgb(49, 194, 124)'
    fetch('http://localhost:3200/getSongLists?categoryId=15').then((data)=>{
        return data.json()
    }).then(res=>{
        recommend = res.response.data.list
        const list =res.response.data.list
        lunboUl.innerHTML=''
        coinCollection.innerHTML=''
        for(let i=0;i<list.length;i++){
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
        </li>`
        lunboUl.innerHTML += addLi
        }
        len = recommend.length
        index = (len%5==0 ? len/5 : len/5+1)
        const slide =document.querySelectorAll('.slide')
            if(slide.length<index){
                for(let i =0;i<index;i++){
                    const coin =`<a class="lunbodian" href="#"><i class="slide"></i></a>`
                    coinCollection.innerHTML += coin
                }
            }
            const lunbodian = document.querySelectorAll('.lunbodian')
           for(let j=0;j<index;j++){
            lunbodian[j].onclick=()=>{
                m = -1210*j
                lunboUl.style.transform = `translateX(${m}px)`
            }
           }
       
    })
})

navLi[4].addEventListener('click',()=>{
    for(let j =0 ;j<navLi.length;j++){
        navLi[j].style.color = 'black'
    }
    navLi[4].style.color = 'rgb(49, 194, 124)'
    fetch('http://localhost:3200/getSongLists?categoryId=153').then((data)=>{
        return data.json()
    }).then(res=>{
        recommend = res.response.data.list
        const list =res.response.data.list
        lunboUl.innerHTML=''
        coinCollection.innerHTML=''
        for(let i=0;i<list.length;i++){
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
        </li>`
        lunboUl.innerHTML += addLi
        }
        len = recommend.length
        index = (len%5==0 ? len/5 : len/5+1)
        const slide =document.querySelectorAll('.slide')
            if(slide.length<index){
                for(let i =0;i<index;i++){
                    const coin =`<a class="lunbodian" href="#"><i class="slide"></i></a>`
                    coinCollection.innerHTML += coin
                }
            }
            const lunbodian = document.querySelectorAll('.lunbodian')
           for(let j=0;j<index;j++){
            lunbodian[j].onclick=()=>{
                m = -1210*j
                lunboUl.style.transform = `translateX(${m}px)`
            }
           }
       
    })
})
navLi[5].addEventListener('click',()=>{
    for(let j =0 ;j<navLi.length;j++){
        navLi[j].style.color = 'black'
    }
    navLi[5].style.color = 'rgb(49, 194, 124)'
    fetch('http://localhost:3200/getSongLists?categoryId=220').then((data)=>{
        return data.json()
    }).then(res=>{
        recommend = res.response.data.list
        const list =res.response.data.list
        lunboUl.innerHTML=''
        coinCollection.innerHTML=''
        for(let i=0;i<list.length;i++){
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
        </li>`
        lunboUl.innerHTML += addLi
        }
        len = recommend.length
        index = (len%5==0 ? len/5 : len/5+1)
        const slide =document.querySelectorAll('.slide')
            if(slide.length<index){
                for(let i =0;i<index;i++){
                    const coin =`<a class="lunbodian" href="#"><i class="slide"></i></a>`
                    coinCollection.innerHTML += coin
                }
            }
            const lunbodian = document.querySelectorAll('.lunbodian')
           for(let j=0;j<index;j++){
            lunbodian[j].onclick=()=>{
                m = -1210*j
                lunboUl.style.transform = `translateX(${m}px)`
            }
           }
       
    })
})