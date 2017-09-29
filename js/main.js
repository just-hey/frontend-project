document.addEventListener('DOMContentLoaded', function () {
var questions = [
  {
    //Ballroom
  video: 'EefNiVvWAB0',
  answers: [
    {text: 'Naruto'},
    {text: 'Ballroom e Youkoso'},
    {text: 'Psych'},
    {text: 'Gilmore Girls'},
  ]
},
{
  //Psych
  video: '3ll__XRs408',
  answers: [
    {text: 'Rick and Morty'},
    {text: 'Blindspot'},
    {text: 'Adventure Time'},
    {text: 'Psych'},
  ]
},
{
  //Rick and Morty
  video: 'wh10k2LPZiI',
  answers: [
    {text: 'The OC'},
    {text: 'Lucifer'},
    {text: 'The Middle'},
    {text: 'Limitless'},
  ]
},
{
  //The OC
  video: 'a8iuQNC-jgo',
  answers: [
    {text: 'Castle'},
    {text: 'NCIS'},
    {text: 'Psych'},
    {text: 'The Voice'},
  ]
},
{
  //Game of Thrones
  video: 's7L2PVdrb_8',
  answers: [
    {text: 'The Flash'},
    {text: 'Vikings'},
    {text: 'True Blood'},
    {text: 'Game of Thrones'},
  ]
},
]
//supposed to increase i by click each time an answer is clicked next question shows BUT IT DOESN'T WORK!?
var buttonIncrease = document.getElementsByClassName('button')
  for (var i = 0; i < buttonIncrease.length; i++) {
    buttonIncrease[i].addEventListener('click', increaseI())
  }
  function increaseI() {
    i
    console.log(i);
  }
//this one variable controls what the function "populate()" uses.
var i=0
//on 'correct' button click increase score by 1
var score = 0

function populate() {
  var choices = ''
  var shownQ = document.getElementById('question')
  if (i>=questions.length) {
    //prompt for name and pair it with score then save it to localStorage
    var localStorageKey = prompt('Please enter your name')
    var localStorageValue = score
    localStorage.setItem(localStorageKey, localStorageValue)
    console.log("too damn high!");
  }
  else {
  //populates the audio for each question.
    shownQ.innerHTML += '<iframe width="0" height="0" frameborder="0" title="YouTube video player" type="text/html" src="http://www.youtube.com/embed/' + questions[i].video + '?enablejsapi=1"></iframe>'
  //shows question what of what
    var currentQuestionNumber = i + 1
    var element = document.getElementById('progress')
    element.innerHTML = "Question: "+ currentQuestionNumber + "/" + questions.length
  //shows choices
    for (var j = 0; j < questions.length; j++) {
      choices = document.getElementById('choice'+[j])
      var question = questions[i]
      choices.innerHTML = question.answers[j].text
    }
  }
}
populate()
})
//This is needed code to make the Play,Pause,Stop buttons work!!! Avoid touching
function callPlayer(func, args) {
  var iframes = document.getElementsByTagName('iframe');
  for (var i = 0; i < iframes.length; ++i) {
    if (iframes[i]) {
      var src = iframes[i].getAttribute('src');
      if (src) {
        if (src.indexOf('youtube.com/embed') != -1) {
          iframes[i].contentWindow.postMessage(JSON.stringify({
              'event': 'command',
              'func': func,
              'args': args || []
          }), "*");
        }
      }
    }
  }
}

//scope issue? can't get the following block to work to increase i . once solved it will move the test to the next question.  still need to figure out how to track correct answers so show user their score.







//PLAN FOR CHECKING CORRECT answers
//each question/choice variable has a "correct" value which will === the value of the selected choice.  if it matches score +1.
// example:
// {
//   //Ballroom
// correct: 'Ballroom e Youkoso',
// video: 'EefNiVvWAB0',
// answers: [
//   {text: 'Naruto'},
//   {text: 'Ballroom e Youkoso'},
//   {text: 'Psych'},
//   {text: 'Gilmore Girls'},
// ]
// }
//
// if (user clicks element with innerHTML that === correct: ) {
//   var score + 1
// }
//
//














//THIS WORKS BUT HAS NO WAY OF INCREASING i WHEN USER SELECTS ANSWER

  // function populate() {
  //
  //   //show question
  //   var shownQ = document.getElementById('question')
  //   for (var i = 0; i < questions.length; i++) {
  //     shownQ.innerHTML += '<iframe width="0" height="0" frameborder="0" title="YouTube video player" type="text/html" src="http://www.youtube.com/embed/' + questions[i].video + '?enablejsapi=1"></iframe>'
  //
  //     //show question what of what
  //     var currentQuestionNumber = i + 1
  //     var element = document.getElementById('progress')
  //     element.innerHTML = "Question: "+ currentQuestionNumber + "/" + questions.length
  //
  //   //show choices
  //     for (var j = 0; j < questions.length; j++) {
  //       var choices = document.getElementById('choice'+[j])
  //       var question = questions[i]
  //       choices.innerHTML = question.answers[j].text
  //
  //     }
  //   }
  // }
