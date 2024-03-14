function souceSelect(souce){
    [...document.querySelectorAll('.left img.souce')].forEach(element => element.style.opacity = 0)
    document.getElementById(souce).style.opacity = 1
}
function cheeseSelect(cheese){
    [...document.querySelectorAll('.left img.cheese')].forEach(element => element.style.opacity = 0)
    document.getElementById(cheese).style.opacity = 1
}
function onToppingSelect(){
    [...document.querySelectorAll('.left img.topping')].forEach(element => element.style.opacity = 0);
    [...document.querySelectorAll('input[name=topping]:checked')].forEach(element => document.getElementById(element.value).style.opacity = 1)
    
}
