var start = ['You, my good sir, are ', 'You, my dear, are ', 'This man is ', 'Your mother is ', 'You strike me as '];
var adj = ['ill-breeding', 'villainous', 'knicker-stealing', 'horse-bothering', 'blithering', 'cow-handed'];
var n1 = ['snollygoster', 'gadabout', 'codpiece', 'scobberlotcher', 'mumblecrust', 'slug-a-bed'];
var n2 = ['ninnyhammer', 'man-swine', 'canker blossom', 'smell-feast', 'clot pole', 'fopdoodle'];
var plus = [' of a ', ' and a ', ' with the mental faculty of a ', ', as well as a ']

var msg = document.getElementById('msg');
var hit = document.getElementById('hit');
var go = document.getElementById('go');

msg.innerHTML = 'I challenge you to a duel... of words'


//single generator
function generate() {
  var numStar = Math.floor(Math.random() * start.length);
  var numAdj = Math.floor(Math.random() * adj.length);
  var numN1 = Math.floor(Math.random() * n1.length);
  var numN2 = Math.floor(Math.random() * n2.length);
  var numPlus = Math.floor(Math.random() * plus.length);

  var article = ''

  if (numAdj === 0) {
    article = 'an '
  } else {
    article = 'a '
  }
  msg.innerHTML = '';
  var output = start[numStar] + article + adj[numAdj] + ' ' + n1[numN1] + plus[numPlus] + n2[numN2] + '.';
  return output;
}


//multiple generator
var counter = 0;

function repeat() {

  var howMany = document.querySelector('input[name="howMany"]:checked').value;
  if (counter < howMany) {
    document.getElementById('msg2').innerHTML += '<br>' + generate() + '<br>';
    counter++;
    $('html,body').animate({ scrollTop: 400 }, 1000);
    setTimeout(repeat, 1500);
  } else {
    counter = 0;
    document.getElementById('msg2').innerHTML += '<br>' + 'Have you had enough?? <br>'
    $('html,body').animate({ scrollTop: 400 }, 1000);
    return
  }


}

//multiple controls
const $barrage = $('#barrage');
const $barrOpt = $('#barrOpt');
const $arrUp = $('#arrUp');
const $arrDwn = $('#arrDwn');
const $msg = $('#msg');
const $msg2 = $('#msg2');
const $msg3 = $('#msg3');
const $msg4 = $('#msg4');
const $singleGen = $('#singleGen');

$barrage.on('click', () => {
  $msg3.fadeToggle('hidden'), 100;
  $singleGen.slideToggle('hidden');
  msg2.innerHTML = '';
  msg.innerHTML = 'I challenge you to a duel... of words';
  $arrUp.toggleClass('hidden');
  $arrDwn.toggleClass('hidden');
  $barrOpt.slideToggle('hidden'), 1000;
  $('html').animate({ scrollTop: 80 }, 1300);
  $msg2.toggle();
  $barrage.toggleClass('grey')
})


//triggers
hit.addEventListener('click', function () {
  output = generate();
  var i = 0, text;

  function typing() {
    if (i < output.length) {
      document.getElementById('msg').innerHTML += output.charAt(i);
      i++;
      setTimeout(typing, 50);
    }
  }
  typing();
})

go.addEventListener('click', function () {
  msg2.innerHTML = '';
  repeat()
})