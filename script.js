function souceSelect(souce){
    [...document.querySelectorAll('.left img:not(.pan)')].forEach(element => element.style.opacity = 0)
    document.getElementById(souce).style.opacity = 1
}
function cheeseSelect(cheese){
    console.log(cheese)
}
function onToppingSelect(){
    const checkedBoxes = document.querySelectorAll('input[name=topping]:checked');
    console.log(checkedBoxes)
}
