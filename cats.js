document.addEventListener("DOMContentLoaded", function() {

  var catButton = document.querySelector('.summon-cats')


  catButton.addEventListener('click', function () {
    $.ajax({
      url: 'http://bitkittens.herokuapp.com/cats.json',
      method: 'GET'
    }).done(function (response) {
      var cats = response['cats']
      for (var i = 0; i < 3; i++) {

        var image = document.createElement('img')
        var parent = document.querySelector('#cat'+(i+1))
        parent.innerHTML = ''
        console.log(parent);
        image.src = cats[i]['photo']
        console.log(image);
        parent.append(image)
      }

    })
  })

});
