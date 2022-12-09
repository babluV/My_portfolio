var tablinks = document.getElementsByClassName('tab-link');
var tabcontains = document.getElementsByClassName('tab-contain');
 var sidemeu = document.getElementById("sidemenu");

function openTab(tabname){
   
for(tablink of tablinks){
    tablink.classList.remove('active-link')
}
for(tabcontain of tabcontains){
    tabcontain.classList.remove('active-tab')
}
event.currentTarget.classList.add('active-link')
document.getElementById(tabname).classList.add('active-tab')
}

function closemenu(){
sidemeu.style.right = "-200px";
console.log('hi')
}
function openmenu(){
sidemeu.style.right = "0";
}