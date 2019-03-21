
  
    var msg = document.getElementById('msg');
    var hit = document.getElementById('hit');
    var go = document.getElementById('go');
    let multiCompliment= document.getElementById('multiCompliment');
    let multiInsult=document.getElementById('multiInsult');

    var $multiInsult = $('#multiInsult')
    const $barrWrath=$('#barrWrath');
    const $barrage = $('#barrage');
    const $barrOpt = $('#barrOpt');
    const $arrUp = $('#arrUp');
    const $arrDwn = $('#arrDwn');
    const $msg = $('#msg');
    const $msg2 = $('#msg2');
    const $multiCompliment = $('#multiCompliment')
    const $msg3 = $('#msg3');
    const $msg4 = $('#msg4');
    const $hit = $('#hit');
    const $hitComp = $('#compliment');
    const $principal = $('#principal');
    const $barrFlatt = $('#barrFlatt');
    const $multipleFlattery=$('#multipleFlattery');
    const $multiple = $('#multiple');
    const $multipleResults=$('#multipleResults');
    const $flattBarr=$('#flattBarr');
    const $goMultiComp=$('#goMultiComp');
    const $buttonsCont=$('#buttonsCont');

    msg.innerHTML = 'Dost thou desire my wrath or my praise?';

    function clear(){ multiCompliment.innerHTML = ''; multiInsult.innerHTML=''};

    //----type animation function-----//
    function typing() {
        if (i < output.length) {
            msg.innerHTML += output.charAt(i);
            i++;
            setTimeout(typing, 50);
        }
    }


//////////SINGLE GENS//////////////////

//---- insult ---------//

var start = ['You, my good sir, are ', 'You, my dear, are ', 'This man is ', 'Your mother is ', 'You strike me as '];
var adj = ['ill-breeding', 'villainous', 'knicker-stealing', 'horse-bothering', 'blithering', 'cow-handed'];
var n1 = ['snollygoster', 'gadabout', 'codpiece', 'scobberlotcher', 'mumblecrust', 'slug-a-bed'];
var n2 = ['ninnyhammer', 'man-swine', 'canker blossom', 'smell-feast', 'clot pole', 'fopdoodle'];
var plus = [' of a ', ' and a ', ' with the mental faculty of a ', ', as well as a ']

function generate() {
    var numStar = Math.floor(Math.random() * start.length);
    var numAdj = Math.floor(Math.random() * adj.length);
    var numN1 = Math.floor(Math.random() * n1.length);
    var numN2 = Math.floor(Math.random() * n2.length);
    var numPlus = Math.floor(Math.random() * plus.length);
    console.log(numAdj);
    var article = ''
    if (numAdj ===0) {
        article = 'an '
    } else {
        article = 'a '
    }
    
    var output = start[numStar] + article + adj[numAdj] + ' ' + n1[numN1] + plus[numPlus] + n2[numN2] + '.';
    return output;
}

    //trigger insult//
    hit.addEventListener('click', function () {
        output = generate();
        var iz = output.length * 50;
        console.log(iz);
        var i = 0, text;
        $buttonsCont.animate({ opacity: 0 }, 1000);
        msg.innerHTML = '';
        typing();
        setTimeout(visibility, iz);
    
    })

    //--------compliment---------//
    var startComp = ['This creature before me may be the', 'My darling, you are the', 'Might this be the', 'You, my dear, must be the', 'Hark! Stands before me the', 'Still my heart, here stands the', 'Behold! Here stands the']
    var superlative = ['sweetest', 'fairest', 'loveliest', 'rarest', 'daintiest']
    var adjective = ['precious', 'darling', 'delicate', 'celestial', 'artful', 'silken', 'heavenly', 'rosy-cheeked', 'fair-faced', 'charming', 'enchanting']
    var noun = ['cuckoo-bud', 'true-penny', 'goddess', 'angel', 'flower', 'nymph', 'beauty', 'enchantress']
    var endComp = ['ever I hath lain eyes upon', "in all of God's realm", 'in all of the heavens and Earth', 'that ever hath graced mine eye', 'to ever walk this mortal realm']
    var output = '';
    var i = '';
    function generateComp() {
        msg.innerHTML = '';
        i = 0;
        function gen(arr) {
            return arr[Math.floor(Math.random() * arr.length)];
        }
        output = gen(startComp) + ' ' + gen(superlative) + ', most ' + gen(adjective) + ' ' + gen(noun) + ' ' + gen(endComp);
        if (output.charAt(1) === 'i') {
            output += '?';
            console.log('yo');
        } else {
            output += '.';
        }
        return output
    }

    //triger compliment//

    $hitComp.on('click', function () {
        $buttonsCont.animate({ opacity: 0 }, 1000);
        generateComp();
        typing();
        var iz = output.length*50;
        setTimeout(visibility, iz);
    });



///////////////MULTIPLE GENS/////////////////

    //----insult----//
var counter = 0;

function repeat() {

    var howMany = document.querySelector('input[name="howMany"]:checked').value;
    if (counter < howMany) {
        document.getElementById('multiInsult').innerHTML += '<br>' + generate() + '<br>';
        counter++;
        $('html, body').animate({scrollTop: ($(window).scrollTop() + 80) + 'px'}, 600);
        setTimeout(repeat, 1500);
    } else {
        counter = 0;
        document.getElementById('multiInsult').innerHTML += '<br>' + "<h5 class='grey' id='finalPoint'>Now be gone with you, lest yee seeks a further verbal thrashing.</h5>"
        $('html, body').animate({scrollTop: ($(window).scrollTop() +90) + 'px'}, 600);
        return}
}

    //trigger multipleinsults/
    go.addEventListener('click', function () {
        $multiInsult.removeClass('hidden').html('').html(repeat());
        
    })
    //----compliment----//
function repeatComp() {
    var howMany = document.querySelector('input[name="howManyFlatt"]:checked').value;
    if (counter < howMany) {
        document.getElementById('multiCompliment').innerHTML += '<br>' + generateComp() + '<br>';
        counter++;
        $('html, body').animate({scrollTop: ($(window).scrollTop() + 80) + 'px'}, 600);
        setTimeout(repeatComp, 1500);
    } else {
        counter = 0;
        document.getElementById('multiCompliment').innerHTML += '<br>' + '<h5 class="grey" id="finalPoint2">Wilst thou be mine?</h5>'
        $('html, body').animate({scrollTop: ($(window).scrollTop() +90) + 'px'}, 600);
        return}
    }


    //trigger multiple compliments//
    $goMultiComp.on('click', function () {     
        multiCompliment.innerHTML = ''; 
        $('html, body').stop().animate({scrollTop:110}, 700);
        repeatComp();
        console.log('blooblah');
    
    })
   
    ///////QUICK FIRE CONTROLS/////////////

   //------move from single to multiple-----//
    $barrage.on('click', () => {
        function change(){ 
            hit.value = 'wrath';
            msg.innerHTML = 'Dost thou desire my wrath or my praise?';
            };
        setTimeout(change,700);
        $arrUp.toggleClass('hidden');
        $arrDwn.toggleClass('hidden'); 
        $multiple.fadeToggle(500);   
        $barrage.toggleClass('grey');
        $principal.css('min-height', 0).slideToggle(600);
        $barrFlatt.fadeToggle(300);
        setTimeout(clear, 1400);
        if ($arrUp.hasClass('hidden')===false){
            console.log('I am here')
            $('html, body').animate({ scrollTop: 80 }, 700);
        } else {
            $('html, body').animate({ scrollTop: 0 }, 400);
            console.log('boob');
        }
    })
    function visibility() {
        $buttonsCont.animate({ opacity: 1 }, 1000);
    } 
    
    //-----move from wrath to flattery--------//
    $barrFlatt.on('click' , ()=>{
        
        $multipleFlattery.slideToggle(600);
        $barrOpt.slideToggle(600);
       function clearInsults(){
            $multiInsult.html('');
       }
        $barrWrath.toggle();
        $flattBarr.toggle();
       setTimeout(clearInsults,1500);
        
    })





