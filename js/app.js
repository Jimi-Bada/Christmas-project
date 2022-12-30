let dropdownBtn1 = document.querySelector('.dt-1');
let dropdownBtn2 = document.querySelector('.dt-2');
let dropdownBtn3 = document.querySelector('.dt-3');
let dropdownMenu1 = document.querySelector('.dm-1');
let dropdownMenu2 = document.querySelector('.dm-2');
let dropdownMenu3 = document.querySelector('.dm-3');

const dropdownBtns =[dropdownBtn1, dropdownBtn2, dropdownBtn3];
const dropdownMenus =[dropdownMenu1, dropdownMenu2, dropdownMenu3];

function toggleDropdown1(a, b, c){
    if(a.classList.contains('show')){
        a.classList.remove('show');
        b.classList.remove('show');
        c.classList.remove('show');
    }
    else{
        a.classList.add('show');
        b.classList.remove('show');
        c.classList.remove('show');
    }
}

function toggleDropdown2(a, b, c){
    if(b.classList.contains('show')){
        a.classList.remove('show');
        b.classList.remove('show');
        c.classList.remove('show');
    }else{
        a.classList.remove('show');
        b.classList.add('show');
        c.classList.remove('show');
    }   
}
function toggleDropdown3(a, b, c){
    if(c.classList.contains('show')){
        a.classList.remove('show');
        b.classList.remove('show');
        c.classList.remove('show');
    }
    else{
        a.classList.remove('show');
        b.classList.remove('show');
        c.classList.add('show');
    }
 }
dropdownBtn1.addEventListener('click', function(){
    toggleDropdown1(dropdownMenu1, dropdownMenu2, dropdownMenu3);
});
dropdownBtn2.addEventListener('click', function(){
    toggleDropdown2(dropdownMenu1, dropdownMenu2, dropdownMenu3);
});
dropdownBtn3.addEventListener('click', function(){
    toggleDropdown3(dropdownMenu1, dropdownMenu2, dropdownMenu3);
});

