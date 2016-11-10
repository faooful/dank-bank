var dir = "../images/";
var fileextension = ".gif";
$.ajax({
    //This will retrieve the contents of the folder if the folder is configured as 'browsable'
    url: dir,
    success: function (data) {
        //List all gifs file names in the page
        $(data).find("a:contains(" + fileextension + ")").each(function () {
            var filename = this.href.replace(window.location.host, "").replace("http:///", "");
            $("#img-wrapper").append($("<img src=" + dir + filename + "></img>"));
        });
    }
});

//Filter the images
const input = document.querySelector('input')

input.addEventListener('input', e => {
  document.querySelectorAll('img').forEach(img => {
    const src = img.getAttribute('src')
    const value = e.target.value

    if (value.length > 0 && src.indexOf(value) !== -1) {
      img.classList.remove('hidden')
    } else {
      img.classList.add('hidden')
    }

    if (value.length === 0) {
      img.classList.remove('hidden')
    }
  })
})
