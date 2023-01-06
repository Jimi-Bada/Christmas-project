let dropdownBtn1 = document.querySelector('.dt-1');
let dropdownBtn2 = document.querySelector('.dt-2');
let dropdownBtn3 = document.querySelector('.dt-3');
let dropdownMenu1 = document.querySelector('.dm-1');
let dropdownMenu2 = document.querySelector('.dm-2');
let dropdownMenu3 = document.querySelector('.dm-3');
let lists1 = document.querySelectorAll('.dm-1 li')
let lists2= document.querySelectorAll('.dm-2 li')
let lists3 = document.querySelectorAll('.dm-3 li')
const allLists = document.querySelectorAll('.dropdown ul li')
const dsLists = document.querySelector('.li-ds37')
const checkIcon = document.querySelectorAll('.check-icon')
let title1 = document.querySelector('#title1')
let title2 = document.querySelector('#title2')
let title3 = document.querySelector('#title3')





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

for (let i = 0; i < lists1.length; i++) {
    let list1 = lists1[i];
    list1.addEventListener('click' , function(){
          dropdownMenu1.classList.remove('show');
          var newHtml1 = list1.innerHTML;
          title1.innerHTML = newHtml1;
          
     
    })
    
}
for (let i = 0; i < lists2.length; i++) {
    const list2 = lists2[i];
    list2.addEventListener('click' , function(){
          dropdownMenu2.classList.remove('show');
          var newHtml2 = list2.innerHTML;
          title2.innerHTML = newHtml2;
    })
    
}
for (let i = 0; i < lists3.length; i++) {
    const list3 = lists3[i];
    list3.addEventListener('click' , function(){
          dropdownMenu3.classList.remove('show');
          var newHtml3 = list3.innerHTML;
         title3.innerHTML = newHtml3;
    })
    
}
for (let i = 0; i < allLists.length; i++) {
    const allList = allLists[i];
    allList.addEventListener('click' , ()=>{
       checkIcon.classList.remove('d-none')
    }
    )
    
    
}


    
     
// window.addEventListener('click', function(){
//     for (let i = 0; i < dropdownMenus.length; i++) {
//         const dropdownMenu = dropdownMenus[i];
//       if(dropdownMenu.classList.contains('show')){
//         dropdownMenu.classList.remove('show');
//       }
//     }
// });