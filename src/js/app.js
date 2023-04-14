import * as flsFunctions from "./modules/functions.js";
import * as navLightInit from "./modules/nav_light.js";
import * as swiper from "./modules/swiper.js";

document.addEventListener("DOMContentLoaded", function () {

	flsFunctions.isWebp();

	navLightInit.navLight();

	swiper.swiper();
});
