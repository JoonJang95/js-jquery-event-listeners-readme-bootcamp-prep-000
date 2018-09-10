function getIt() {
  $('p').on('click', function(e) {
    alert('hey!');
    return;
  })
}

function frameIt() {
  $('img').on('load', function(e) {
    
  })
}

function pressIt() {
  $('form').on('keydown', function(e) {
    if (e.key === "G") {
           alert('G was pressed')
           return;
    }
  })
}