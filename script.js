
function PageOpenfeature(){
   

 const allelements = document.querySelectorAll('.elems')
 const fullementsPaages  = document.querySelectorAll('.fullElem');
 const fullementsPaagesBackbtn = document.querySelectorAll('.back')


//  console.log(allelements)
// console.log(fullements)
allelements.forEach(function(elem){

     elem.addEventListener('click',function(){
        
        //   console.log(fullements[elem.id])
        fullementsPaages[elem.id].style.display = 'block';
     })
})

fullementsPaagesBackbtn.forEach(function(back){
   
   //  console.log(back.id)
    back.addEventListener('click',function(){

         fullementsPaages[back.id].style.display = 'none';
        
    }
      )
    
})

}


PageOpenfeature();

