var keyToSoundName = {
  w: "tom-1",
  a: "tom-2",
  s: "tom-3",
  d: "tom-4",
  j: "crash",
  k: "kick-bass",
  l: "snare",
};

var drums = document.querySelectorAll(".drum");
for (var i = 0; i < drums.length; i++) {
  drums[i].addEventListener("click", function () {
    var key = this.innerHTML;
    playSound(key);
    buttonAnimation(key);
  });
}

document.addEventListener("keydown", function (event) {
  var key = event.key;
  playSound(key);
  buttonAnimation(key);
});

function playSound(key) {
  var soundName = keyToSoundName[key];
  if (soundName === undefined) {
    return;
  }
  var audio = new Audio("./sounds/" + soundName + ".mp3");
  audio.play();
}

function buttonAnimation(currentKey) {
  var activeButton = document.querySelector("." + currentKey);
  if (activeButton === null) {
    return;
  }
  activeButton.classList.add("pressed");
  setTimeout(function () {
    activeButton.classList.remove("pressed");
  }, 100);
}
