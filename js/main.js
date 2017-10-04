document.addEventListener('DOMContentLoaded', function () {

var questions = [
  {
    //Ballroom
  video: 'EefNiVvWAB0',
  answers: [
    {text: 'Naruto'},
    {text: 'Ballroom e Youkoso'},
    {text: 'Metalocalypse'},
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
    {text: 'Rick and Morty'},
    {text: 'Limitless'},
  ]
},
{
  //The OC
  video: 'a8iuQNC-jgo',
  answers: [
    {text: 'Castle'},
    {text: 'The OC'},
    {text: 'NCIS'},
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
{
  //King of the Hill
  video: 'W0-IpoyEHkE',
  answers: [
    {text: 'King of the Hill'},
    {text: 'The Simpsons'},
    {text: '24'},
    {text: 'CSI'},
  ]
},
{
//How I Met Your Mother
video: 'WgtHWXYDrbE',
answers: [
  {text: 'The Big Bang Therory'},
  {text: 'Family Guy'},
  {text: 'How I Met Your Mother'},
  {text: 'New Girl'},
]
},
{
//South Park
video: 'XcQDrfhyNvA',
answers: [
  {text: "That 70's Show"},
  {text: 'Robot Chicken'},
  {text: 'How I Met Your Mother'},
  {text: 'South Park'},
]
},
{
//The Walking Dead
video: '2cymqAVPWuo',
answers: [
  {text: 'The Walking Dead'},
  {text: 'The Exorcist'},
  {text: 'Wayward Pines'},
  {text: 'FOX and Friends'},
]
},
{
//Westworld
video: 'rYelEUVQ50g',
answers: [
  {text: 'Deadwood'},
  {text: 'Westworld'},
  {text: 'Wayward Pines'},
  {text: 'Branded'},
]
},
{
//Kimi ni Todoke
video: 'yN8Rlp3Oi94',
answers: [
  {text: 'Toradora'},
  {text: 'Barakamon'},
  {text: 'Kimi ni Todoke'},
  {text: 'Full Metal Alchemist'},
]
},
{
//Metalocalypse
video: 'q5x89Ppl85k',
answers: [
  {text: 'Korgoth of Barbaria'},
  {text: 'Mr Pickles'},
  {text: 'Sesame Street'},
  {text: 'Metalocalypse'},
]
}
]

var answers = ['btn1', 'btn3', 'btn2', 'btn1', 'btn3','btn0','btn2','btn3','btn0','btn1','btn2','btn3']
var i = 0  //counter that tracks what question currently on
var score = 0

      var clickedButton0 = document.getElementById("btn0")
      clickedButton0.addEventListener('click', movingOn)

      var clickedButton1 = document.getElementById("btn1")
      clickedButton1.addEventListener('click', movingOn)

      var clickedButton2 = document.getElementById("btn2")
      clickedButton2.addEventListener('click', movingOn)

      var clickedButton3 = document.getElementById("btn3")
      clickedButton3.addEventListener('click', movingOn)

function movingOn() {
  //
  document.getElementById('question').removeChild(document.getElementById('question').childNodes[7])
  //console.log(this.id);
  if (this.id === answers[i]) {
    //console.log(i);
    score++
    //console.log(score);
  }
  populate(i++)
}


function populate() {
  var choices = ''
  var shownQ = document.getElementById('question')
  if (i>=questions.length) {
    //prompt for name and pair it with score then save it to localStorage
    //after submitting prompt show list of highScores in identical container to what the quiz is housed in. getitem from localStorage by key of 'scores' and order them by localStorageValue
    //make the localStorage variable an array. add each name and score to said array. then sort the array by highest score. this new sorted variable array will be the source for the highscore box that'll be made...
    var localStorageName = prompt('Please enter your name to save your score')
    var localStorageValue = score

    localStorage.setItem('scores', (localStorageName + ': ' + localStorageValue))
    let alertScores = alert('See how you measure up!')
    let highScores = localStorage.getItem('scores'+[i])
    console.log(highScores);
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
      choices = document.getElementById('btn'+[j])
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
  for (var k = 0; k < iframes.length; ++k) {
    if (iframes[k]) {
      var src = iframes[k].getAttribute('src');
      if (src) {
        if (src.indexOf('youtube.com/embed') != -1) {
          iframes[k].contentWindow.postMessage(JSON.stringify({
              'event': 'command',
              'func': func,
              'args': args || []
          }), "*");
        }
      }
    }
  }
}
