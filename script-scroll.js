// const scrollList = document.querySelector(".scroll-list");
// const leftArrow = document.querySelector(".scroll-left-arrow");
// const rightArrow = document.querySelector(".scroll-right-arrow");
// console.log("Script file connected!");

// const cardWidth = 100;
// const cardMargin = 10;
// const visibleCards = 5;
// const totalCards = document.querySelectorAll(".card").length;
// const maxScroll = (totalCards - visibleCards) * (cardWidth + cardMargin);

// let currentScroll = 0;

// leftArrow?.classList.add("hide-arrow");

// leftArrow.addEventListener("click", () => {
//   currentScroll -= (cardWidth + cardMargin);
//   scrollList.style.transform = `translateX(-${currentScroll}px)`;

//   if (currentScroll <= 0) {
//     leftArrow.classList.add("hide-arrow");
//   }

//   if (currentScroll < maxScroll) {
//     rightArrow.classList.remove("hide-arrow");
//   }
// });

// rightArrow.addEventListener("click", () => {
//   currentScroll += (cardWidth + cardMargin);
//   scrollList.style.transform = `translateX(-${currentScroll}px)`;

//   if (currentScroll >= maxScroll) {
//     rightArrow.classList.add("hide-arrow");
//   }

//   if (currentScroll > 0) {
//     leftArrow.classList.remove("hide-arrow");
//   }
// });