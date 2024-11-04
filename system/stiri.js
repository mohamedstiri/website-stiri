let title = document.getElementById('title');
let price = document.getElementById('price');
let tva = document.getElementById('tva');
let ads = document.getElementById('ads');
let discount= document.getElementById('discount');
let total = document.getElementById('total');
let count = document.getElementById('count');
let category = document.getElementById('category');
let create = document.getElementById('create');

let hava = 'create';
let stiri;


// get total
function getTotal(){
 if(price.value !=''){
   let result = (+price.value + +tva.value + +ads.value ) - +discount.value;
   total.innerHTML = result;
   total.style.background = '#040'

 }
 else{
   total.innerHTML = '';
   total.style.background = 'red';
 }
}

  //create product
   
   let data;

  if(localStorage.product != null){
   data = JSON.parse(localStorage.product)

   }else{
      data = [];
  }
   let datapor = [];

   create.onclick = function(){
      let newpro = {
        title:title.value.toLowerCase(),
         price:price.value,
         tva:tva.value,
         ads:ads.value,
         discount:discount.value,
         total:total.innerHTML,
         count:count.value,
         category:category.value.toLowerCase(),
          
      }
      if(title.value !=''
        && price.value !=''
        &&category.value !=''
        &&count.value !=''
        && newpro.count < 100

      ){
         if(hava === 'create'){
        if(newpro.count > 1){
        for(let s = 0;s<newpro.count;s++){data.push(newpro);}
        }  
      else{
        data.push(newpro);
      }}
      
          else{
            data[ stiri ] = newpro;
            hava = 'create';
            create.innerHTML = 'Create';
            count.style.display = 'block';
          }
          cleardata()
      }
     
          
            
          
       //save localstorage
      localStorage.setItem('product', JSON.stringify(data))

      
      showdata()
   }

   //clear inputs

   function cleardata(){
       title.value = '';
       price.value = '';
       tva.value = '';
       ads.value = '';
       discount.value = '';
       total.innerHTML = '';
       count.value = '';
       category.value = '';


   }

   //read

   function showdata(){
    getTotal()
    let table = '';
    for(
      let s = 0 ; s < data.length;s++
    ){
       table +=`  <tr>
                    <td>${s+1}</td>
                    <td>${data[s].title}</td>
                    <td>${data[s].price}</td>
                    <td>${data[s].tva}</td>
                    <td>${data[s].ads}</td>
                    <td>${data[s].discount}</td>
                    <td>${data[s].total}</td>
                    <td>${data[s].category}</td>
                    <td><button onclick="update(${s})" id="update">update</button></td>
                    <td><button onclick="deletedata(${s})" id="delete">delete</button></td>
                  </td>
                 </tr>` 
    }
     document.getElementById('tbody').innerHTML = table;
     let deleteall = document.getElementById('deleteall');
     if(data.length > 0){
         deleteall.innerHTML =`<button onclick = "deleteALL()" >Delete All (${data.length})</button> `
     }
     else{
      deleteall.innerHTML = '';
     } 
   }
   showdata()
   
   //delete


   function deletedata(s){
    data.splice(s,1)
    localStorage.product = JSON.stringify(data);
    showdata() 
   }
   function deleteALL(){
    localStorage.clear()
    data.splice(0 )
    showdata() 
   }


   // update
   function update(s){
     title.value = data[s].title;
     price.value = data[s].price;
     tva.value = data[s].tva;
     ads.value = data[s].ads;
     discount.value = data[s].discount;
     category.value = data[s].category;
     getTotal();
     count.style.display = 'none';
     create.innerHTML = 'Update';

     hava = 'update' ;
     stiri = s;
     scroll({top:0,
      behavior:'smooth',

     })
   }

     // Search

     let searchMood = 'title';

     function getsearch(id){
      let search = document.getElementById('search');
        if(id == 'title'){
          searchMood = 'title';
        
        }else{
          searchMood = 'category';
          
        }
        search.value = '';
        showdata()
        search.focus()
        search.placeholder = 'Search by '+ searchMood;
     }

     function searchdata(value){
      let table = '';
    if(searchMood== 'title'){
      for(let s = 0 ; s< data.length;s++){
        if(data[s].title.includes(value.toLowerCase()))
          { table +=`  <tr>
          <td>${s}</td>
          <td>${data[s].title}</td>
          <td>${data[s].price}</td>
          <td>${data[s].tva}</td>
          <td>${data[s].ads}</td>
          <td>${data[s].discount}</td>
          <td>${data[s].total}</td>
          <td>${data[s].category}</td>
          <td><button onclick="update(${s})" id="update">update</button></td>
          <td><button onclick="deletedata(${s})" id="delete">delete</button></td>
        </td>
       </tr>` 
          
        }
      }
    }
    
    
    
    else{

      for(let s = 0 ; s< data.length;s++){
        if(data[s].category.includes(value.toLowerCase()))
          { table +=`  <tr>
          <td>${s}</td>
          <td>${data[s].title}</td>
          <td>${data[s].price}</td>
          <td>${data[s].tva}</td>
          <td>${data[s].ads}</td>
          <td>${data[s].discount}</td>
          <td>${data[s].total}</td>
          <td>${data[s].category}</td>
          <td><button onclick="update(${s})" id="update">update</button></td>
          <td><button onclick="deletedata(${s})" id="delete">delete</button></td>
        </td>
       </tr>` 
          
        }
      }




        }
        
    document.getElementById('tbody').innerHTML = table;
     }