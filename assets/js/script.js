let navBar = document.querySelector(".nav-bar");
      let menuIcon = document.querySelector(".mobile-icon");

      function clickMenu() {
        navBar.classList.toggle("active");
        menuIcon.classList.toggle("active");
      }
      /* header menu end    */

      /* section hidden text */

      function ToggleText(paragraphId, imageId) {
        let hiddenText = document.getElementById(paragraphId);
        hiddenText.style.display = hiddenText.style.display === "none" ? "block" : "none";

        let cardImage = document.getElementById(imageId);
        cardImage.style.width = cardImage.style.width === "30%" ? "100%" : "30%";

        let skillsBar = document.getElementById("skills-bar");
        skillsBar.style.display = skillsBar.style.display === "none" ? "block" : "none";
      }