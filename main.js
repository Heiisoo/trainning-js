// --- Horloge-------------
setInterval(function () {
  var currentTime = new Date();
  var hours = currentTime.getHours()
  var minutes = currentTime.getMinutes()
  var seconds = currentTime.getSeconds()
  var period = "AM"
  if (hours >= 12) {
    period = "PM"
  }
    if (hours > 12) {
      hours = hours - 12
    }
    if (seconds < 10) {
      seconds = "0" + seconds
    }
    if (minutes < 10) {
      minutes = "0" + minutes;
    }
    var clockTime = hours + ":" + minutes + ":" + seconds + " " + period

    var clock = document.getElementById('clock')
    clock.innerText = clockTime
}, 1000);

//------wordcount----------

var print = function (msg) {
  document.getElementById("output").innerHTML = "length is " + msg
}

document.getElementById("btn").onclick = function (event) {
    print(document.getElementById('str').value.length)
}


// ------ Contact Form -----

$(document).ready(function () {
  function init() {
    if (localStorage["name"]) {
      $('#name').val(localStorage["name"])
    }
    if (localStorage["email"]) {
      $('#email').val(localStorage["email"])
    }
    if (localStorage["message"]) {
      $('#message').val(localStorage["message"])
    }
  }
  init()
})

$('.stored').change(function () {
  localStorage[$(this).attr('name')] = $(this).val()
})

// ----- Image Slider ----
