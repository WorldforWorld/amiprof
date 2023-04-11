import * as flsFunctions from "./modules/functions.js";
import * as navLightInit from "./modules/nav_light.js";

document.addEventListener("DOMContentLoaded", function () {
  flsFunctions.isWebp();

  navLightInit.navLight();
});
