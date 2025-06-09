import { homeModule } from "./home";

const homeBtn = document.querySelector("#homeBtn");
const menuBtn = document.querySelector("#menuBtn");
const aboutBtn = document.querySelector("#aboutBtn");

// homeModule();
const homeBtnClickListener = function () {
  homeBtn.addEventListener("click", () => {
    homeModule();
  });
};

homeBtnClickListener();
