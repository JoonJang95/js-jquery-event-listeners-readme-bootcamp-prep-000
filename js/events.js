function getIt() {
  $('p').on('click', function(e) {
    alert('hey!');
    return;
  })
}

function frameIt() {
  $('img').on('load', function(e) {
    $('img').addClass('tasty')
    return;
  })
}

function pressIt() {
  $('form').on('keydown', function(e) {
    if (e.which === 71) {
           alert('G was pressed')
           return;
    }
  })
}