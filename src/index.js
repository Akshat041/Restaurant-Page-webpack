import { homeModule } from "./home";
import { MenuModule } from "./menu";

const divContainer = document.querySelector("#content");
const homeBtn = document.querySelector("#homeBtn");
const menuBtn = document.querySelector("#menuBtn");
const aboutBtn = document.querySelector("#aboutBtn");

// homeModule();
const homeBtnClickListener = function () {
  homeBtn.addEventListener("click", () => {
    divContainer.innerHTML = "";
    homeModule();
  });
};

const menuBtnClickListener = function () {
  menuBtn.addEventListener("click", () => {
    divContainer.innerHTML = "";
    MenuModule();
  });
};

homeBtnClickListener();
menuBtnClickListener();
