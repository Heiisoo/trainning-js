// --- Horloge-------------
setInterval(function () {
  var currentTime = new Date();
  var hours = currentTime.getHours()
  var minutes = currentTime.getMinutes()
  var seconds = currentTime.getSeconds()

    if (hours > 24) {
      hours = hours - 24
    }
      if (minutes < 10) {
      minutes = "0" + minutes;
    }
    var clockTime = hours + ":" + minutes

    var clock = document.getElementById('clock')
    clock.innerText = clockTime
}, 1000);

//------wordcount----------

var print = function (msg) {
  document.getElementById("output").innerHTML = "Il y a " + msg
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

var slideIndex = 1
showDivs(slideIndex)

function plusDivs(n) {
  showDivs(slideIndex += n)
}

function showDivs(n) {
  var i
  var x = document.getElementsByClassName("mySlides")
  if (n > x.length) {slideIndex = 1}
  if (n < 1) {slideIndex = x.length}
  for (var i = 0; i < x.length; i++) {
    x[i].style.display = "none"
  }
  x[slideIndex-1].style.display = "block"
}

//-----Addition game -----

/*
var checkAnswer = document.getElementById("salope");

var btn = document.getElementById("btn5").innerHTML;

btn.onclick = function () {
  var value = checkAnswer.value;
  if (value == answer) {
    alert("C'est bon bro");
  }else {
    alert("Non la t'es une merde " + answer);
  }

  document.getElementById("salope").value = "";

  document.getElementById("number1").innerHTML = "";
  document.getElementById("number2").innerHTML = "";

  var  number1 = Math.floor((Math.random() * 10) + 1);
  var  number2 = Math.floor((Math.random() * 10) + 1);

  document.getElementById("number1").innerHTML = number1;
  document.getElementById("number2").innerHTML = number2;
  var  answer = number1 + number2
}
*/





//Mieux

//On prend des nombres au hasard
var  number1 = Math.floor((Math.random() * 10) + 1);
var  number2 = Math.floor((Math.random() * 10) + 1);

//On les place dans le HTML
document.getElementById("number1").innerHTML = number1;
document.getElementById("number2").innerHTML = number2;

var boutonValiderLaRep = document.getElementById("btn5");

boutonValiderLaRep.onclick = function (){
  var repDuJoueur = document.getElementById("salope").value;
  if (number1 + number2 == repDuJoueur) {
    alert("Bravo tu es a 2 de QI");
  }  else{
    alert("Tu es pas trés intelligent");
  }
}










// ----- Todo list -----

function get_todos() {
  var todos = new Array;
  var todos_str = localStorage.getItem("todo");
  if (todos_str !== null) {
    todos = JSON.parse(todos_str)
  }
  return todos;
}

function add() {
  var task = document.getElementById("task").value

  var todos = get_todos()
  todos.push(task)
  localStorage.setItem("todo", JSON.stringify(todos))

  show()

  return false
}

function clearDefault(a) {
  if (a.defaultValue==a.value) {a.value=""}
}

function remove() {
  var id = this.getAttribute("id")
  var todos = get_todos()
  todos.splice(id, 1)
  localStorage.setItem("todo", JSON.stringify(todos))
  show()
  return false
}

function show() {
  var todos = get_todos()
  var html = "<ul>"
  for (var i = 0; i < todos.length; i++) {
    html += "<li>" + todos[i] + '<button class="remove" id="' + i + '">Delete</button> </li>'
  }
  html += '</ul>'

  document.getElementById('todos').innerHTML = html

  var buttons = document.getElementsByClassName('remove')
  for (var i = 0; i < buttons.length; i++) {
    buttons[i].addEventListener('click', remove)
  }
}
document.getElementById('add').addEventListener('click', add)
show()



//--- Taux de change ----

var url = 'http://data.fixer.io/api/latest?access_key=eff16e17710c78fc46dd4c53f27e92af&base=EUR&symbols=GBP,AUD,JPY,EUR,USD';

// define from currency, to currency, and amount

 function recupererValeur() {
// execute the conversion using the "convert" endpoint:
$.ajax({
    url: url,
    dataType: 'jsonp',

    success: function(res,status,req) {

      console.log(res.rates);
      console.log(status);
      var taux = res.rates
        , from = document.getElementById('from').value
        , to = document.getElementById('to').value
        , amount = document.getElementById('fromAmount').value

        var result = amount * taux[to] / taux[from]
      document.getElementById("toAmount").value=result
    }
})};
