// 做饭->买菜
let a="";
function buy(callback){
        setTimeout(()=>{
                a="蘑菇";
                callback(a);
        },2000);
}
buy(function cookie(value){
    console.log(value);
});
//回调函数  将后续的处理逻辑传入当前要做的事，事情做好后调用此函数
//promise 解决回调问题
// promise三个状态：成功态 失败态 等待
//resolve代表转向成功态，reject代表转向失败态
//resolve,reject均是函数
//promise的实例就一个then方法,then方法有两个参数
let p=new Promise((resolve,reject)=>{
        setTimeout(function(){
                let a="蘑菇Promise";
                reject(a);
        },2000)
});
p.then((data)=>{console.log(data)},(err)=>{console.log(err)});
///////////////////////////

function buyPack(){
        return new Promise((resolve,reject)=>{
                setTimeout(()=>{
                        if(Math.random()>0.5){
                                resolve("buy");
                        }else{
                                reject("not");
                        }
                },Math.random()*1000);
        })
}
buyPack().then(function(data){
        console.log(data);
},function(data2){
    console.log(data2);
});

