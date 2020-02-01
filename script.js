AOS.init();
$(".btn-mobile").on("click", function() {
  $(".rheader").toggleClass("action");
});
function scrollHeader() {
  var fixed = $(window).scrollTop();
  if (fixed >= 600) {
    $("#header").addClass("action");
    $(".header").addClass("action");
  } else {
    $("#header").removeClass("action");
    $(".header").removeClass("action");
  }
}
$(window).scroll(function() {
  scrollHeader();
});
$(document).ready(function() {
  $('a[href^="#"]').on("click", function(event) {
    event.preventDefault();
    var target = this.hash;
    var result = $(target);
    $("html, body")
      .stop()
      .animate({ scrollTop: result.offset().top }, 1000, "swing", function() {
        window.location.hash = target;
      });
  });
});
var didScroll;
var lastScrollTop = 0;
var delta = 5;
var navbarHeight = $("header").outerHeight();
$(window).scroll(function(event) {
  didScroll = true;
});
setInterval(function() {
  if (didScroll) {
    hasScrolled();
    didScroll = false;
  }
}, 250);
function hasScrolled() {
  var st = $(this).scrollTop();
  if (Math.abs(lastScrollTop - st) <= delta) return;
  if (st > lastScrollTop && st > navbarHeight) {
    $("header")
      .removeClass("nav-down")
      .addClass("nav-up");
  } else {
    if (st + $(window).height() < $(document).height()) {
      $("header")
        .removeClass("nav-up")
        .addClass("nav-down");
    }
  }
  $(".rheader").removeClass("action");
  lastScrollTop = st;
}
particlesJS("particles-js", {
  particles: {
    number: {
      value: 355,
      density: { enable: true, value_area: 789.1476416322727 }
    },
    color: { value: "#ffffff" },
    shape: {
      type: "circle",
      stroke: { width: 0, color: "#000000" },
      polygon: { nb_sides: 5 },
      image: { src: "img/github.svg", width: 100, height: 100 }
    },
    opacity: {
      value: 0.48927153781200905,
      random: false,
      anim: { enable: true, speed: 0.2, opacity_min: 0, sync: false }
    },
    size: {
      value: 2,
      random: true,
      anim: { enable: true, speed: 3, size_min: 0, sync: false }
    },
    line_linked: {
      enable: false,
      distance: 150,
      color: "#ffffff",
      opacity: 0.3,
      width: 1
    },
    move: {
      enable: true,
      speed: 2,
      direction: "none",
      random: true,
      straight: false,
      out_mode: "out",
      bounce: false,
      attract: { enable: false, rotateX: 600, rotateY: 1200 }
    }
  },
  interactivity: {
    detect_on: "canvas",
    events: {
      onhover: { enable: true, mode: "bubble" },
      onclick: { enable: true, mode: "push" },
      resize: true
    },
    modes: {
      grab: { distance: 400, line_linked: { opacity: 1 } },
      bubble: {
        distance: 83.91608391608392,
        size: 5,
        duration: 1,
        opacity: 1,
        speed: 1
      },
      repulse: { distance: 200, duration: 0.4 },
      push: { particles_nb: 4 },
      remove: { particles_nb: 2 }
    }
  },
  retina_detect: true
});
function makeTimer() {
  var endTime = new Date("9 December 2019 00:00:00 GMT+07:00");
  endTime = Date.parse(endTime) / 1000;
  var now = new Date();
  now = Date.parse(now) / 1000;
  var timeLeft = endTime - now;
  var days = Math.floor(timeLeft / 86400);
  var hours = Math.floor((timeLeft - days * 86400) / 3600);
  var minutes = Math.floor((timeLeft - days * 86400 - hours * 3600) / 60);
  var seconds = Math.floor(
    timeLeft - days * 86400 - hours * 3600 - minutes * 60
  );
  if (hours < "10") {
    hours = "0" + hours;
  }
  if (minutes < "10") {
    minutes = "0" + minutes;
  }
  if (seconds < "10") {
    seconds = "0" + seconds;
  }
  $(".timer1").html(days);
  $(".timer2").html(hours);
  $(".timer3").html(minutes);
  $(".timer4").html(seconds);
}
setInterval(function() {
  makeTimer();
}, 1000);
