
//structure: [start] [superlative], most [adjective] [noun][ending]


var start = ['This creature before me could be the', 'My darling, you are the', 'Might this be the','You, my dear, must be','Hark! Stands before me the','Be still my beating heart, here stands the','Behold! Here stands the']

var superlative = ['sweetest','fairest','loveliest','rarest','daintiest']

var adjective = ['precious','darling', 'delicate', 'celestial','artful','silken','heavenly','rosy-cheeked','fair-faced','charming','enchanting']

var noun = ['cuckoo-bud','true-penny','goddess','angel','flower','nymph','beauty','enchantress']

var end = ['ever I hath lain eyes upon', "in all of God's realm", 'in the heavens as well as on Earth','that ever hath graced mine eye','to ever walk this mortal realm']

var complimentOutput = document.getElementById('complimentOutput');

var output='';
var i = '';


function generate() {
complimentOutput.innerHTML='';
i=0;
function gen(arr) {
    return arr[Math.floor(Math.random() * arr.length)];
}
output = gen(start) + ' ' + gen(superlative) +', most ' + gen(adjective) + ' ' + gen(noun) +' '+ gen(end);
   if(output.charAt(1)==='i'){
       output+='?';
       console.log('yo');
   } else{
       output+='.';
   }
console.log(output);
}  
    
function typing() {
    if (i < output.length) {
        complimentOutput.innerHTML += output.charAt(i);
        i++;
        setTimeout(typing, 50);
    }
}
document.getElementById('go').addEventListener('click',function(){
    generate();
    typing();
});


/*deployment on main page

var start = ['This creature before me could be the', 'My darling, you are the', 'Might this be the']

var superlative = ['sweetest', 'fairest', 'loveliest', 'rarest', 'daintiest']

var adjective = ['precious', 'darling', 'delicate', 'celestial', 'artful', 'silken', 'heavenly', 'rosy-cheeked', 'fair-faced',]

var noun = ['cuckoo-bud', 'true-penny', 'goddess', 'flower', 'nymph']

var end = ['ever I did lay eyes upon', "in all of God's realm", 'in the heavens as well as on Earth', 'that ever hath graced mine eye', 'to ever walk this mortal realm']

var complimentOutput = document.getElementById('complimentOutput');

function gen(arr) {
    return arr[Math.floor(Math.random() * arr.length)];
}

function generateComp() {
    var output = gen(start) + ' ' + gen(superlative) + ', most ' + gen(adjective) + ' ' + gen(noun) + ' ' + gen(end);
    if (output.charAt(1) === 'i') {
        output += '?';
        console.log('yo');
    } else {
        output += '.';
    }
    return output;
}

//trigger
function clear(){msg2.innerHTML = ''};
hit.addEventListener('click', function () {
    output = generateComp();
    var i = 0, text;
    $hit.animate({ opacity: 0 },500);

    function visibility() {
        $hit.animate({ opacity: 1 },1000);
    }
    msg.innerHTML = '';
    function typing() {
        if (i < output.length) {
            document.getElementById('msg').innerHTML += output.charAt(i);
            i++;
            setTimeout(typing, 50);
        }
    }
    typing();
    setTimeout(visibility, 3000);
    function change(){ hit.value = 'again'}
    setTimeout(change,1000)
})*/
