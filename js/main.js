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




  function populate() {

    //show question
    var shownQ = document.getElementById('question')
    for (var i = 0; i < questions.length; i++) {
      shownQ.innerHTML += '<iframe width="0" height="0" frameborder="0" title="YouTube video player" type="text/html" src="http://www.youtube.com/embed/' + questions[i].video + '?enablejsapi=1"></iframe>'

      //show question what of what
      var currentQuestionNumber = i + 1
      var element = document.getElementById('progress')
      element.innerHTML = "Question: "+ currentQuestionNumber + "/" + questions.length

    //show choices
      for (var j = 0; j < questions.length; j++) {
        var choices = document.getElementById('choice'+[j])
        var question = questions[i]
        choices.innerHTML = question.answers[j].text

      }
    }
  }

  // function showProgress () {
  //   for (var i = 0; i < questions.length; i++) {
  //   var currentQuestionNumber = i + 1
  //   var element = document.getElementById('progress')
  //   element.innerHTML = "Question: "+ currentQuestionNumber + "/" + questions.length
  //   }
  // }
  // showProgress()
  populate()
})


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




// MAGIC CODES FROM RON?!
//
// <a href="javascript:void callPlayer('playVideo')">Start</a> &bull; <a href="javascript:void callPlayer('pauseVideo')">Pause</a> &bull; <a href="javascript:void callPlayer('stopVideo')">Stop</a><br/>
//
//     <button onclick='javascript:void callPlayer("playVideo")'>play</button>
//
//     <div id="whateverID">
//         <iframe width="0" height="0" frameborder="0" title="YouTube video player" type="text/html" src="http://www.youtube.com/embed/IGiBCvp-CXo?enablejsapi=1"></iframe>
//     </div>
