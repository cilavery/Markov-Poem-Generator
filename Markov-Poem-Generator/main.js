var text = 'Drove from New York to California to pursue acting; money ran out, lossed my job and I\'m homeless... Nevertheless.. Can you get me a Starbucks, Dunkin Donuts or Subway egift card so I can use their app for bagel, coffee or subway sandwich? Living in my SUV and just need food to get by. Amazon Locker me food and hygienic products... I also have Venmo and Cash App. I can also meet you at a gas station for some gas or a box or food; you can also purchase food at a restaurant and I\'ll pick up at a location... If you have something in your apartment you want to get rid off and think I can sell it on Craigslist? I\'ll take that as well... I\'ve provided many options and I\'m grateful for any option. Thank you kindly, and I trust that the universe will grant my wish...';

var arrayOfWords = parseText(text);
var wordPairsObj = generateWordPairs(arrayOfWords);
var lines = 5;
var words = 3;

function myFunction() {
    document.getElementById('poem').innerHTML = generatePoem(text,lines,words);
}

function generatePoem(text, poemLines, wordlength) {
  var line = "";  
  if (wordlength === undefined) {
    wordlength = Math.floor(Math.random() * 4)
  }
  var i = 1;
  while (i <= poemLines) {
    line += writeLine(wordPairsObj, wordlength) + '<br>'
    i++
  }
  return line
}

function parseText(str) {
  var textArr = str.toLowerCase().replace(/[\[\];/\\()09.,$!?%#"-;]/g, '').split(' ')
  var newText = [];
  for (var i = 0; i < textArr.length; i++) {
    var element = textArr[i]
    newText = newText.concat(element)
  }
  return newText
}

//creates Markov Chain Object:
function generateWordPairs(arr) {
  var textObj = {};
  
  for (var i = 0; i < arr.length-1; i++) {
    var key = arr[i]
    if (!textObj[key]) {
      textObj[key] = [arr[i + 1]]
    } 
    else {
      textObj[key].push(arr[i+1])
    }
  }
 return textObj
}

//returns a random word:
function writeLineHelper(arrayOfWords) {
  var randomIndex = Math.floor(Math.random() * arrayOfWords.length)
  return arrayOfWords[randomIndex]
}

//write a single line of random words from parsed text
function writeLine(chainObj, lengthOfWords) {
  var poemLine = [];
  var pickAWord = chainObj[writeLineHelper(arrayOfWords)]
 
  if (lengthOfWords === 0) {
    return poemLine
  } 
  else if (pickAWord !== undefined && pickAWord.length === 1) {
    return poemLine += pickAWord + ' ' + writeLine(chainObj, lengthOfWords-1)
  } 
  
  else if (pickAWord !== undefined && pickAWord.length > 1) {
    var idx = Math.floor(Math.random() * pickAWord.length)
      if (pickAWord[idx] !== undefined) {
        return poemLine += pickAWord[idx] + ' ' + writeLine(chainObj, lengthOfWords-1)
      }
  }
  else if (pickAWord === undefined) {
    return poemLine += writeLine(chainObj, lengthOfWords)
  }
  return poemLine
}



 






