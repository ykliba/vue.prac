let app = new Vue({
  el: '#app',
  
    methods: {
      handleClick: function(event) {
        alert(event.target)
      }
    
  }
})