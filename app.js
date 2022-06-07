var die = document.querySelector('die'),
    sides = 20,
    initialSide = 1,
    lastFace,
    timeoutId,
    transitionDuration = 500, 
    animationDuration  = 3000

document.querySelector('ul > li > a').click(function () {
  reset()
  rollTo(document.querySelector(this).attr('href'))
  
  return false
})

function randomFace() {
  var face = Math.floor((Math.random() * sides)) + initialSide
  lastFace = face === lastFace ? randomFace() : face
  return face;
}

function rollTo(face) {
  clearTimeout(timeoutId)
  
  document.querySelector('ul > li > a').classList.remove('active')
  document.querySelector('[href=' + face + ']').classList.add('active')
  
  die.attr('data-face', face)
}

function reset() {
  die.attr('data-face', null).classList.remove('rolling')
}

document.querySelector('.randomize, .die').click(function () {
  die.classList.add('rolling')
  clearTimeout(timeoutId)
  
  timeoutId = setTimeout(function () {
    die.classList.remove('rolling')
    
    rollTo(randomFace())
  }, animationDuration)
  
  return false
})


