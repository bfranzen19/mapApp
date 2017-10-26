var mainVM = new Vue({
  el: '#app', // this VM is mounted to the element with the ID '#app'
  data: {
    points: []



  }, // end of the data object

  methods: {
    makePoints: function(event) {
      console.log(event.offsetX, event.offsetY),
      this.points.push({
        pointX: event.offsetX+10.5 + 'px',
        pointY: event.offsetY-3 + 'px',
      })
    },
    removePoints: function(event) {
      console.log('removed')
      
    }




  }, // end of the methods object

}) // end of mainVM
