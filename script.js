document.addEventListener("DOMContentLoaded", () => {
  const tvContainer = document.querySelector(".tv-container");
  const tvVideo = document.getElementById("tv-video");
  const backgroundVideo = document.getElementById("background-video");
  const content = document.querySelector(".content");
  const footer = document.querySelector(".footer");
  const h1 = document.querySelector("h1");
  const logo = document.querySelector(".logo"); // Assuming xunch.png has the "logo" class

  // Add click event listener to the TV container
  tvContainer.addEventListener("click", () => {
    // Fade out the h1 and xunch.png (logo)
    h1.style.transition = "opacity 2s ease";
    h1.style.opacity = 0; // Fade out h1

    logo.style.transition = "opacity 2s ease";
    logo.style.opacity = 0; // Fade out xunch.png (logo)

    // Switch video source to "transition.mp4"
    tvVideo.src = "media/transition.mp4";
    tvVideo.loop = false; // Play only once
    tvVideo.load();
    tvVideo.play();

    // Add the "expand" class to scale the TV container
    tvContainer.classList.add("expand");

    // Gradually fade out the video as it grows
    const fadeDuration = 2000; // 2 seconds
    tvVideo.style.transition = `opacity ${fadeDuration}ms ease`;
    tvVideo.style.opacity = 0; // Fade out the video

    // Wait for fade-out to complete
    setTimeout(() => {
      // Switch to xunchbg.mp4
      backgroundVideo.src = "media/xunchbg.mp4";
      backgroundVideo.load();
      backgroundVideo.style.opacity = 1; // Ensure the background is fully visible

      // Remove the old content
      content.classList.add("hidden");

      // Show the footer
      footer.classList.remove("hidden");
      footer.classList.add("visible");

      // Optionally, hide the TV video element after fade-out
      tvVideo.style.display = "none";
    }, fadeDuration); // Match the timeout to the fade duration
  });
});




document.addEventListener("DOMContentLoaded", () => {
  const menu = document.getElementById("menu");
  const sections = [
    "media/photo.png",
    "media/design.png",
    "media/dp.png",
    "media/about.png",
    "media/film.png",
  ];

  let currentImage = null; // Tracks the currently displayed image

  // Create invisible sections for menu interactions
  const menuContainer = document.querySelector(".menu-container");
  sections.forEach((imageSrc, index) => {
    const section = document.createElement("div");
    section.className = "menu-section";
    section.dataset.image = imageSrc;
    section.dataset.index = index; // Identify the section
    menuContainer.appendChild(section);

    // Add click event for each section
    section.addEventListener("click", () => {
      const clickedImage = section.dataset.image;

      if (currentImage === clickedImage) {
        // If the same section is clicked, revert to menu.png
        menu.src = "media/menu.png";
        currentImage = null;
      } else {
        // Display the clicked image
        menu.src = clickedImage;
        currentImage = clickedImage;
      }
    });
  });
});


