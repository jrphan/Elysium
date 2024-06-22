let discover_collapse_01 = document.getElementById("discover_collapse_01");
let discover_collapse_02 = document.getElementById("discover_collapse_02");
let discover_collapse_03 = document.getElementById("discover_collapse_03");

let collapse_title_01 = document.getElementById("collapse_title_01");
let collapse_title_02 = document.getElementById("collapse_title_02");
let collapse_title_03 = document.getElementById("collapse_title_03");

let discover_btn_01 = document.getElementById("discover_btn_01");
let discover_btn_02 = document.getElementById("discover_btn_02");
let discover_btn_03 = document.getElementById("discover_btn_03");

function isMobile() {
  return /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(
    navigator.userAgent
  );
}

function isIOS() {
  return /iPad|iPhone|iPod/.test(navigator.userAgent) && !window.MSStream;
}

function isIPad() {
  return (
    /iPad/.test(navigator.userAgent) ||
    (navigator.platform === "MacIntel" && navigator.maxTouchPoints > 1)
  );
}

if (!isMobile() && !isIPad() && !isIOS()) {
  var Scrollbar = window.Scrollbar;
  Scrollbar.init(document.querySelector("#wrapper_scrollbar"));
} else {
  // Add CSS styles dynamically
  var style = document.createElement("style");
  style.innerHTML = `
    body {
      overflow: auto;
      overflow-x: hidden;
    }

    main {
      overflow: auto !important;
    }
  `;
  document.head.appendChild(style);
}

const toggleActive = (element, elementTitle) => {
  element.classList.toggle("active");
  elementTitle.classList.toggle("active");
};

discover_btn_01.onclick = function () {
  toggleActive(discover_collapse_01, collapse_title_01);
};

discover_btn_02.onclick = function () {
  toggleActive(discover_collapse_02, collapse_title_02);
};

discover_btn_03.onclick = function () {
  toggleActive(discover_collapse_03, collapse_title_03);
};

const swiper = new Swiper(".swiper", {
  // Optional parameters
  direction: "horizontal",
  loop: true,

  // If we need pagination
  pagination: {
    el: ".swiper-pagination",
  },

  // Navigation arrows
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },

  // And if we need scrollbar
  scrollbar: {
    el: ".swiper-scrollbar",
  },
});
