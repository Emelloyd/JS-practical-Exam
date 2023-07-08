    var femaleCharacter = document.querySelector('.female');
    var headline1Image = document.querySelector('.headline1');
    var headline2Image = document.querySelector('.headline2');
    var subheadlineImage = document.querySelector('.subheadline');
    var learnmoreImage = document.querySelector('.learnmore');
    var logoImage = document.querySelector('.logo')
    var replayButton = document.querySelector('.replayButton');
    element.style.opacity = 0;

    if (element.style.opacity >=1)
    clearInterval(animation);
  
    femaleCharacter.classList.add("fade-in");
    headline1Image.classList.add("slide-in");
    headline2Image.classList.add("slide-in");
    subheadlineImage.classList.add("fade-in");
    learnmoreImage.classList.add("fade-in");
    logoImage.classList.add("slide-in");
    replayButton.classList.add("fade-in");
  
    replayButton.onclick = function() {
        femaleCharacter.classList.remove("fade-in");
        headline1Image.classList.remove("slide-in");
        headline2Image.classList.remove("slide-in");
        subheadlineImage.classList.remove("fade-in");
        learnmoreImage.classList.remove("fade-in");
        logoImage.classList.remove("slide-in");
        replayButton.classList.remove("fade-in");
  
      femaleCharacter.classList.add("fade-in");
      headline1Image.classList.add("slide-in");
      headline2Image.classList.add("slide-in");
      subheadlineImage.classList.add("fade-in");
      learnmoreImage.classList.add("fade-in");
      logoImage.classList.add("slide-in");
      replayButton.classList.add("fade-in");
    };

  function reloadSite (){
    location.reload();
  }