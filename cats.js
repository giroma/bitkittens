$().ready( function() {
  $('.summon-cats').click( function () {
    $.ajax({
      url: 'http://bitkittens.herokuapp.com/cats.json',
      method: 'GET'
    }).done(function (response) {
      for (var i = 0; i < 3; i++) {
        $(`#cat${i+1}`).html('') //remove last picture before adding new one
        $(`#cat${i+1}`).append(`<img src=${response.cats[i].photo} />`)
      }
    })
  })
});
