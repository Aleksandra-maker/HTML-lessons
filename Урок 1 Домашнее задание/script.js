 new Vue({
    el: '#balls',
    data: {
        message: "Text Reverser",
        
    },
    methods: {
      reverseMessage: function (){
        this.message=this.message.split("")
        this.message=this.message.reverse()
        this.message=this.message.join("")
      },
      clearMessage: function (){
          this.message=""
      },
    
    
    
    }
  })
 



  new Vue({
    el: '#app',
    data: {
      data: [0,1,2,3,4,5,6,7,8,9,10,11],
      perPage: 3,
      pagination: {},
    },
    computed: {
      collection() {
        return this.paginate(this.data);
      }
    },
    methods: {
      setPage(p) {
        this.pagination = this.paginator(this.data.length, p);
      },
      paginate(data) {
        return _.slice(data, this.pagination.startIndex, this.pagination.endIndex + 1)
      },
      paginator(totalItems, currentPage)
    }

})  