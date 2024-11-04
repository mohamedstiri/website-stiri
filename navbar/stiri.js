 let opensss = document.getElementById('open');
 let closesss = document.getElementById('close');
 let stiri1 = document.querySelector('.stiri');



 closesss.onclick = function(){
    stiri1.classList.add('hava'); 
    closesss.classList.add('hava');
    opensss.classList.remove('hava')
    
 }

 opensss.onclick = function(){
    this.classList.add('hava');
    closesss.classList.remove('hava');
    stiri1.classList.remove('hava'); 
    
 }