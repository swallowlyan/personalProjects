let vm=new Vue({
    el:"#app",
    directives:{
        focusAa(el,bindings){
            if(bindings.value){
                //当current==item时让内部输入框获取焦点
                el.focus();//获取焦点
            }
        }
    },
    data:{
        todos:[
            {isSelected:false,title:'睡觉'},
            {isSelected:false,title:'吃饭'}
        ],
        title:'',
        current:'',
        hash:''
    },
    created(){//ajax获取初始化数据
        //如果localStorage有数据就用有的，如果没有就用默认的
        // this.todos=JSON.stringify(localStorage.getItem("data")) || this.todos;
        //监控hash值的变化,如果页面已经有hash，重新刷新页面也要获取hash
        this.hash=window.location.hash.slice(2) || "all";
        window.addEventListener("hashchange",()=>{
            //当hash变化，重新记录变化的数据
            this.hash=window.location.hash.slice(2);
        },false);
    },
    watch:{
            todos:{//watch默认只监控一层的数据变化,深层监控
                handler(){//默认写成函数  就相当于默认写了一个handler
                    //localStorage默认存的是字符串
                    localStorage.setItem("data",JSON.stringify(this.todos));
                },deep:true
            }
    },
    methods:{
        add(){//keydown与keyup查一个单词，keydown的时候内容没有进入到输入框内
            this.todos.push({
                isSelected:false,
                title:this.title
            });
            this.title='';
        },
        remove(todo){
            //拿到当前与数组里的进行比对，相等则返回false即可
            this.todos=this.todos.filter(item => item!=todo);//删除则取反
        },
        remember(todo){//当前传递的为todo(当前点击的这一项)
            this.current=todo;
        },
        cancel(){
            this.current="";
        }
    },
    computed: {
        filterTodos(){
          if(this.hash==="all")return this.todos;
          if(this.hash=="finish")return this.todos.filter(item=>item.isSelected);
          if(this.hash=="unfinish")return this.todos.filter(item=>item!=isSelected);
          return this.todos;
        },
        count(){

            return this.todos.filter(item => !item.isSelected).length;
        }
    }
});
//1.将数据循环到页面上
//2.敲回车时，添加新的数据（需要加入isSelected属性）
//3.删除功能
//4.计算一下当前没有选中的个数