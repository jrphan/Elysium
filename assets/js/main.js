let discover_collapse_01 = document.getElementById("discover_collapse_01");
let discover_collapse_02 = document.getElementById("discover_collapse_02");
let discover_collapse_03 = document.getElementById("discover_collapse_03");

let collapse_title_01 = document.getElementById("collapse_title_01");
let collapse_title_02 = document.getElementById("collapse_title_02");
let collapse_title_03 = document.getElementById("collapse_title_03");

let discover_btn_01 = document.getElementById("discover_btn_01");
let discover_btn_02 = document.getElementById("discover_btn_02");
let discover_btn_03 = document.getElementById("discover_btn_03");

function isElementInViewport(el) {
  const rect = el.getBoundingClientRect();
  return (
    rect.top >= 0 &&
    rect.left >= 0 &&
    rect.bottom <=
      (window.innerHeight || document.documentElement.clientHeight) &&
    rect.right <= (window.innerWidth || document.documentElement.clientWidth)
  );
}

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

document.addEventListener("DOMContentLoaded", function () {
  const scrollContent = document.querySelector(".scroll-content");
  const counters = document.querySelectorAll(".counter_js");
  const duration = 2;

  function startCountUp(target, targetValue) {
    const counter = new CountUp(target, 0, targetValue, 0, duration, {
      useEasing: true,
      separator: "",
      decimal: ".",
    });
    counter.start();
    let el = document.getElementById(target);
    if (el) {
      el.classList.add("loaded");
    }
  }

  function handleScroll() {
    counters.forEach((counter) => {
      let el = document.getElementById(counter.id);

      if (el) {
        if (!el.classList.contains("loaded")) {
          const counterId = counter.id;
          const targetValue = parseInt(counter.dataset.target);

          if (isElementInViewport(document.getElementById(counter.id))) {
            startCountUp(counterId, targetValue);
          }
        }
      }
    });
  }

  const observer = new MutationObserver((mutationsList) => {
    for (let mutation of mutationsList) {
      if (
        mutation.type === "attributes" &&
        mutation.attributeName === "style"
      ) {
        console.log("22");
        handleScroll();
      }
    }
  });

  observer.observe(scrollContent, { attributes: true });
  handleScroll();

  new Swiper(".slider_section_swiper", {
    direction: "horizontal",
    loop: false,
    effect: "slide",
    speed: 800,
    slidesPerView: "auto",
    spaceBetween: 0,
    navigation: {
      nextEl: ".slider_arrow_next",
      prevEl: ".slider_arrow_pre",
    },
    scrollbar: {
      el: ".swiper-scrollbar",
    },
    on: {
      init: function () {
        var currPageElement = document.getElementById("slider_currpage");
        var totalPageElement = document.getElementById("slider_totalpage");

        if (currPageElement && totalPageElement) {
          var currentPage = (this.activeIndex + 1).toString().padStart(2, "0");
          var totalPage = this.slides.length.toString().padStart(2, "0");

          currPageElement.textContent = currentPage;
          totalPageElement.textContent = totalPage;
        }
      },
      slideChange: function () {
        var currPageElement = document.getElementById("slider_currpage");

        if (currPageElement) {
          var currentPage = (this.activeIndex + 1).toString().padStart(2, "0");

          currPageElement.textContent = currentPage;
        }
      },
    },
  });

  new Swiper(".customer_swiper", {
    loop: false,
    speed: 800,
    effect: "slide",
    navigation: {
      nextEl: ".customer_arrow_next",
      prevEl: ".customer_arrow_pre",
    },
    on: {
      init: function () {
        var currPageElement = document.getElementById("customer_currpage");
        var totalPageElement = document.getElementById("customer_totalpage");

        if (currPageElement && totalPageElement) {
          var currentPage = (this.activeIndex + 1).toString().padStart(2, "0");
          var totalPage = this.slides.length.toString().padStart(2, "0");

          currPageElement.textContent = currentPage;
          totalPageElement.textContent = totalPage;
        }
      },
      slideChange: function () {
        var currPageElement = document.getElementById("customer_currpage");

        if (currPageElement) {
          var currentPage = (this.activeIndex + 1).toString().padStart(2, "0");

          currPageElement.textContent = currentPage;
        }
      },
    },
  });
});
