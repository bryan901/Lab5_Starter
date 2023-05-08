// expose.js
let select, vol, audio, volIcon, button; 

window.addEventListener('DOMContentLoaded', init);

function init() {
  // TODO
  select = document.getElementById('horn-select');
  vol = document.getElementById('volume');
  audio = document.getElementsByClassName("hidden")[0];
  volIcon = document.querySelector("[alt='Volume level 2']");
  button = document.getElementsByTagName('button')[0];
  const confetti = new JSConfetti();
  vol.addEventListener('input', function(){
    updateVol();
  });
  select.addEventListener('input', function(){
    updateImg(select.value);
  });
  button.addEventListener('click', function(){
    audio.play(); 
    if(select.value == 'party-horn'){
      confetti.addConfetti()
    }
  });
}

function updateVol(){
  if(vol.value == 0){
    volIcon.setAttribute('src', 'assets/icons/volume-level-0.svg');
  }else if(vol.value < 33){
    volIcon.setAttribute('src', 'assets/icons/volume-level-1.svg');
  }else if(vol.value < 67){
    volIcon.setAttribute('src', 'assets/icons/volume-level-2.svg');
  }else{
    volIcon.setAttribute('src', 'assets/icons/volume-level-3.svg');
  }
  audio.volume = vol.value/100;
}

function updateImg(value){
  document.querySelector("[alt='No image selected']").setAttribute('src', 'assets/images/' + value + '.svg');
  audio.setAttribute('src', 'assets/audio/' + value + '.mp3');
}

