window.onload = function () {
    var panels = document.querySelectorAll('.panel')
    // console.log(panel)

    panels.forEach(function (item) {
        item.onclick = function () {
            // console.log('aaa')
            panels.forEach(function(i){
                 i.classList.remove('active')
            })
            this.classList.add('active')
        }
    })
    
}
