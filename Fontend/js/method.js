
const myFetch =(requrl,param)=>{
    fetch(requrl).then(data=>{
        return data.text()
    }).then(res=>{
        console.log(res);
        return res
    })
}