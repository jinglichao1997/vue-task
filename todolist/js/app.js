

var app = new Vue({
  el:"#app",
  data:{
    addInp:"",
    listItems:[],
    isCount:0
  },
  methods:{
    add:function(){
      this.listItems.push({title:this.addInp,isCompleted:false,isEditing:false}),
      this.addInp=""
    },
    del:function(index){
      this.listItems.splice(index,1)
    },
    edit:function(index){
      this.listItems[index].isEditing = true;
    },
    alter:function(index){
      this.listItems[index].isEditing = false;
    },
    // lcount:function(){
    //   for(let i = 0,i<this.listItems.length,i++){
    //     if(this.listItems.isCompleted){
    //       this.isCount++
    //     }
    //   }

    // }
  }
})