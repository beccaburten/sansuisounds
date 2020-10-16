import { drawGardenItem } from './draw.js';

export function init() {
    document.getElementById("stone-2").addEventListener("click", drawGardenItem);
    document.getElementById("stone-4").addEventListener("click", drawGardenItem);
    document.getElementById("stone-3").addEventListener("click", drawGardenItem);
    document.getElementById("stone-1").addEventListener("click", drawGardenItem);
    document.getElementById("stone-pile-1").addEventListener("click", drawGardenItem);
    document.getElementById("stone-pile-2").addEventListener("click", drawGardenItem);
    document.getElementById("lantern").addEventListener("click", drawGardenItem);
    document.getElementById("bonzai-1").addEventListener("click", drawGardenItem);
    // document.getElementById("bonzai-2").addEventListener("click", drawGardenItem);
}