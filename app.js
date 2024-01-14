var dynamicTexts = [" Computer Science Student", " Front-end Developer"];
var dynamicTextIndex = 0;
var dynamicTextElement = document.getElementById("dynamic-text");

function toggleThemeIcon() {
  themeIcon.classList.toggle("fa-sun");
  themeIcon.classList.toggle("fa-moon");
}

function typeDynamicText() {
  var currentText = dynamicTexts[dynamicTextIndex];
  var currentIndex = 0;

  function typeCharacter() {
    if (currentIndex < currentText.length) {
      dynamicTextElement.textContent += currentText.charAt(currentIndex);
      currentIndex++;
      setTimeout(typeCharacter, 100);
    } else {
      setTimeout(eraseDynamicText, 300);
    }
  }

  function eraseDynamicText() {
    if (dynamicTextElement.textContent.length > 0) {
      dynamicTextElement.textContent = dynamicTextElement.textContent.slice(
        0,
        -1
      );
      setTimeout(eraseDynamicText, 50);
    } else {
      dynamicTextIndex = (dynamicTextIndex + 1) % dynamicTexts.length;
      setTimeout(typeDynamicText, 200);
    }
  }

  typeCharacter();
}

window.onload = typeDynamicText;
