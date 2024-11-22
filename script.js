document.addEventListener("DOMContentLoaded", () => {
  const tvContainer = document.querySelector(".tv-container");
  const tvVideo = document.getElementById("tv-video");
  const backgroundVideo = document.getElementById("background-video");
  const content = document.querySelector(".content");
  const footer = document.querySelector(".footer");
  const gridContainer = document.querySelector(".grid-container");
  const h1 = document.querySelector("h1");
  const logo = document.querySelector(".logo");

  tvContainer.addEventListener("click", () => {
    h1.style.transition = "opacity 2s ease";
    h1.style.opacity = 0;

    logo.style.transition = "opacity 2s ease";
    logo.style.opacity = 0;

    tvVideo.src = "media/transition.mp4";
    tvVideo.loop = false; 
    tvVideo.load();
    tvVideo.play();

    tvContainer.classList.add("expand");

    const fadeDuration = 2000;
    tvVideo.style.transition = `opacity ${fadeDuration}ms ease`;

    tvVideo.addEventListener("timeupdate", () => {
      if (tvVideo.duration - tvVideo.currentTime < 2) {
        tvVideo.style.opacity = 0; 
      }
    });

    tvVideo.addEventListener("ended", () => {
      setTimeout(() => {
        backgroundVideo.src = "media/xunchbg.mp4";
        backgroundVideo.load();
        backgroundVideo.style.opacity = 1;

        content.classList.add("hidden");

        footer.classList.remove("hidden");
        footer.classList.add("visible");
        gridContainer.classList.remove("hidden");
        setTimeout(() => {
          gridContainer.style.opacity = 1;
        }, 200);
      }, 1000); 
    });
  });
});

function copyEmail() {
  const email = "sew9310@nyu.edu";
  const tempInput = document.createElement("input");
  tempInput.value = email;
  document.body.appendChild(tempInput);
  tempInput.select();
  document.execCommand("copy");
  document.body.removeChild(tempInput);
  alert("Email copied to clipboard!");
}

document.addEventListener("DOMContentLoaded", () => {
  const menu = document.getElementById("menu");
  const sections = [
    "media/photo.png",
    "media/design.png",
    "media/dp.png",
    "media/about.png",
    "media/film.png",
  ];

  let currentImage = null; 

  const menuContainer = document.querySelector(".menu-container");
  const gridContainer = document.querySelector(".grid-container");
  const imageGrid = document.querySelector(".image-grid");
  const aboutContent = document.querySelector(".about-content");

  sections.forEach((imageSrc, index) => {
    const section = document.createElement("div");
    section.className = "menu-section";
    section.dataset.image = imageSrc;
    section.dataset.index = index;
    menuContainer.appendChild(section);

    section.addEventListener("click", () => {
      const clickedImage = section.dataset.image;

      if (currentImage === clickedImage) {
        menu.src = "media/menu.png";
        currentImage = null;
        showAllItems();
      } else {
        menu.src = clickedImage;
        currentImage = clickedImage;
        updateGridContent(clickedImage);
      }
    });
  });

  function showAllItems() {
    aboutContent.classList.add("hidden");
    imageGrid.classList.remove("hidden");
    const items = document.querySelectorAll(".item");
    items.forEach((item) => (item.style.display = "block"));
  }

  function updateGridContent(imageSrc) {
    if (imageSrc === "media/about.png") {
      imageGrid.classList.add("hidden");
      aboutContent.classList.remove("hidden");
    } else {
      aboutContent.classList.add("hidden");
      imageGrid.classList.remove("hidden");
      const category = imageSrc.split("/").pop().split(".")[0]; 
      const items = document.querySelectorAll(".item");
      items.forEach((item) => {
        if (item.dataset.category === category) {
          item.style.display = "block";
        } else {
          item.style.display = "none";
        }
      });
    }
  }
});

document.addEventListener("DOMContentLoaded", () => {
  const gridImages = Array.from(document.querySelectorAll(".image-grid img"));
  const body = document.querySelector("body");

  const expandedContainer = document.createElement("div");
  expandedContainer.classList.add("expanded-container");
  expandedContainer.innerHTML = `
    <div class="expanded-image">
      <img src="" alt="">
    </div>
    <div class="expanded-caption"></div>
    <button class="close-btn">x</button>  <!-- Close button added here -->
  `;
  body.appendChild(expandedContainer);

  const expandedImage = expandedContainer.querySelector(".expanded-image img");
  const expandedCaption = expandedContainer.querySelector(".expanded-caption");
  const closeButton = expandedContainer.querySelector(".close-btn");
  let currentIndex = -1; 

  const updateExpandedContent = (index) => {
    const image = gridImages[index];
    if (image) {
      expandedImage.src = image.src;
      expandedCaption.textContent = image.dataset.caption || "No caption available";
    }
  };

  gridImages.forEach((image, index) => {
    image.addEventListener("click", () => {
      currentIndex = index;
      updateExpandedContent(currentIndex);

      expandedContainer.classList.add("active");
    });
  });

  expandedContainer.addEventListener("click", (e) => {
    if (e.target === expandedContainer || e.target === closeButton) {
      expandedContainer.classList.remove("active");
      currentIndex = -1; // reset index
    }
  });

  document.addEventListener("keydown", (e) => {
    if (!expandedContainer.classList.contains("active")) return;

    if (e.key === "ArrowRight") {
      currentIndex = (currentIndex + 1) % gridImages.length;
      updateExpandedContent(currentIndex);
    } else if (e.key === "ArrowLeft") {
      currentIndex = (currentIndex - 1 + gridImages.length) % gridImages.length;
      updateExpandedContent(currentIndex);
    } else if (e.key === "Escape") {
      expandedContainer.classList.remove("active");
      currentIndex = -1; 
    }
  });
});

