const buttermilkPancake = document.querySelector(".buttermilk-pancake");
const godzillaMilkshake = document.querySelector(".godzilla-milkshake");

const arr = [buttermilkPancake, godzillaMilkshake];
const menu = document.querySelector(".menu");
window.addEventListener("DOMContentLoaded", function () {
  let displayMenu=arr.map(function(item){
    console.log(item);
    return item;
  })
  console.log(displayMenu);
});
