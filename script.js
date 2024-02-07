document.addEventListener("DOMContentLoaded",


  function () {
    const urlParams = new URLSearchParams(window.location.search);
    const encodedSenderName = urlParams.get("s");
    const encodedCrushName = urlParams.get("c");
    const encodedMessage = urlParams.get("m");

    const senderName = capitalizeFirstLetter(decodeURIComponent(atob(encodedSenderName)));
    const crushName = capitalizeFirstLetter(decodeURIComponent(atob(encodedCrushName)));
    const message = capitalizeFirstLetter(decodeURIComponent(atob(encodedMessage)));

    function capitalizeFirstLetter(string) {
      return string.charAt(0).toUpperCase() + string.slice(1);
    }

    if (!encodedSenderName || !encodedCrushName || !encodedMessage) {
      // Do something here, like redirecting to a page with an error message
      window.location.href = "index.html";
      return; // Stop further execution of the script
    }


    const hmessage = document.querySelector(".text-one");
    const hellomessage = document.querySelector(".hellomessage");
    const titleElement = document.querySelector(".title");
    const catImg = document.querySelector(".cat-img");

    titleElement.innerHTML = `Hey ${crushName}, Will you be your Valentine?`;
    hellomessage.innerHTML = `${senderName}, Has sent a message for you`;
    hmessage.innerHTML = `${message}`;

    if (message.toLowerCase() === "yes") {
      titleElement.innerHTML = "Yayyy!! :3";
    }

    const buttonsContainer = document.querySelector(".buttons");
    const yesButton = document.querySelector(".btn--yes");
    const noButton = document.querySelector(".btn--no");
    const MAX_IMAGES = 6;
    let play = true;
    let noCount = 0;

    yesButton.addEventListener("click", handleYesClick);

    noButton.addEventListener("click", function () {
      if (play) {
        noCount++;
        const imageIndex = Math.min(noCount, MAX_IMAGES);
        changeImage(imageIndex);
        resizeYesButton();
        updateNoButtonText();
        if (noCount === MAX_IMAGES) {
          play = false;
          showFinalMessage();
        }
      }
    });

    function handleYesClick() {
      titleElement.innerHTML = "Yayyy!! :3";
      buttonsContainer.classList.add("hidden");
      changeImage("yes");

      // Delay for 5 seconds (5000 milliseconds) before showing the third pop-up
      setTimeout(function () {
        showThirdPopup();
      }, 5000);
    }
    function showThirdPopup() {
      // Code to show the third pop-up
      const thirdPopup = document.getElementById('thirdPopup');
      thirdPopup.classList.add('active');
      document.querySelector('.container').classList.add('blur');

      // You may want to add a button to dismiss the third pop-up as well
    }

    function resizeYesButton() {
      const computedStyle = window.getComputedStyle(yesButton);
      const fontSize = parseFloat(computedStyle.getPropertyValue("font-size"));
      const newFontSize = fontSize * 1.6;
      yesButton.style.fontSize = `${newFontSize}px`;
    }

    function generateMessage(noCount) {
      const messages = [
        "No",
        "Are you sure?",
        "Pookie please",
        "Don't do this to me :(",
        "You're breaking my heart",
        "I'm gonna cry...",
      ];

      const messageIndex = Math.min(noCount, messages.length - 1);
      return messages[messageIndex];
    }

    function changeImage(image) {
      catImg.src = `img/cat-${image}.jpg`;
    }

    function updateNoButtonText() {
      noButton.innerHTML = generateMessage(noCount);
    }

    function showFinalMessage() {
      const mainContainer = document.querySelector("main");
      mainContainer.style.display = "none";

      const finalWrapper = document.createElement("div");
      finalWrapper.classList.add("final-wrapper");

      const finalText = document.createElement("p");
      finalText.textContent = "I guess You need a doctor, You don't seem alright";
      finalText.classList.add("final-text");
      finalWrapper.appendChild(finalText);

      const gifImg = document.createElement("img");
      gifImg.src = "img/hmm.gif";
      finalWrapper.appendChild(gifImg);

      document.body.appendChild(finalWrapper);
    }
  });

document.addEventListener("DOMContentLoaded", function () {
  const firstPopupBtn = document.getElementById('firstPopupBtn');
  const secondPopupBtn = document.getElementById('secondPopupBtn');
  const secondPopup = document.getElementById('secondPopup');

  firstPopupBtn.addEventListener('click', function () {
    const firstPopup = document.getElementById('firstPopup');
    firstPopup.classList.remove('active');
    secondPopup.classList.add('active');
    document.querySelector('.container').classList.add('blur');
  });

  secondPopupBtn.addEventListener('click', function () {
    secondPopup.classList.remove('active');
    document.querySelector('.container').classList.remove('blur');
  });
});
