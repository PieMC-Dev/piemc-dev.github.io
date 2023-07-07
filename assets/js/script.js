const navId = document.getElementById("nav_menu"),
  ToggleBtnId = document.getElementById("toggle_btn"),
  CloseBtnId = document.getElementById("close_btn");

// ==== SHOW MENU ==== //
ToggleBtnId.addEventListener("click", () => {
  navId.classList.add("show");
});

// ==== HIDE MENU ==== //
CloseBtnId.addEventListener("click", () => {
  navId.classList.remove("show");
});

// ==== Animate on Scroll Initialize  ==== //
AOS.init();

// ==== LOGO  ==== //
gsap.from(".logo", {
  opacity: 0,
  y: -10,
  delay: 0.2,
  duration: 0.2,
});
// ==== NAV-MENU ==== //
gsap.from(".nav_menu_list .nav_menu_item", {
  opacity: 0,
  y: -10,
  delay: 0.3,
  duration: 0.2,
  stagger: 0.3,
});
// ==== TOGGLE BTN ==== //
gsap.from(".toggle_btn", {
  opacity: 0,
  y: -10,
  delay: 0.2,
  duration: 0.2,
});
// ==== HEADING  ==== //
gsap.from(".main-heading", {
  opacity: 0,
  y: 20,
  delay: 0.2,
  duration: 0.5,
});
// ==== INFO TEXT ==== //
gsap.from(".info-text", {
  opacity: 0,
  y: 20,
  delay: 0.2,
  duration: 0.5,
});
// ==== BUTTONS ==== //
gsap.from(".btn_wrapper", {
  opacity: 0,
  y: 20,
  delay: 0.5,
  duration: 0.5,
});
// ==== IMAGE ==== //
gsap.from(".team_img_wrapper img", {
  opacity: 0,
  y: 20,
  delay: 0.8,
  duration: 0.3,
});

gsap.from(".info-block", {
  opacity: 0,
  y: 20,
  delay: 0.5,
  duration: 0.3,
});