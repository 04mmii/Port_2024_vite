import { menu } from "./menu.js";
import { port } from "./port.js";
import { link } from "./link.js";
import { smooth } from "./smooth.js";

wimdow.addEventListener("load", function(){
    menu();
    port();
    link();
    smooth();
});