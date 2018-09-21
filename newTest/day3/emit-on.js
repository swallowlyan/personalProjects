//发布emit订阅on
function Girl() {
    this._events={};

}
Girl.prototype.on=function(eventName,callback){

    if(this._events[eventName]){//不是第一次
        this._events[eventName].push(callback);
    }else{
        this._events[eventName]=[callback];
    }
};
Girl.prototype.emit=function(eventName,...args){//[...]
    //[].slice.call(arguments,1);
    //Array.from(arguments).slice(1);
        if(this._events[eventName]){
            this._events[eventName].forEach(cb=>cb(...args));
        }
}
let girl =new Girl();
let cry=(who)=>{ console.log(who+"cry");};
let shopping=(who)=>{ console.log(who+"shopping");};
let eat=(who)=>{ console.log(who+"eat");};
girl.on('失恋',cry);
girl.on('失恋',shopping);
girl.on('失恋',eat);
girl.emit('失恋',['我','你']);