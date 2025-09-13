

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






// const currentTask = [
//      {
//           title:"Project banana hai",
//           imp: true,
//           desc:"coding competetion , language",
//      },
//      {
//           title:"Project submit krna  hai",
//           imp: false,
//           desc:"coding js  , html , css",
//      },
//      {
//           title:"Project banana hai",
//           imp: true,
//           desc:"coding competetion , language",
//      },

// ]

 const currentTask = []
 
//  if (localStorage.getItem('currentTask')) {
//         currentTask = JSON.parse(localStorage.getItem('currentTask'))
//     } else {
//         console.log('Task list is Empty');
//     }



 function renderTask(){
     

const allTask = document.querySelector('.todo-list-fullPage .todo-container .allTask');
let  sum = ''

currentTask.forEach(function(elem,idx){
       sum = sum +  `<div class="task">
             <h3> ${elem.title} </h3>  <span class= ${elem.imp}> Imp </span>
             <h4> ${elem.desc} </h4>
              <button id= ${idx} > Mark as completed </button>
           </div>`
})

      allTask.innerHTML = sum;


      
     //    localStorage.setItem('currentTask', JSON.stringify(currentTask))
  
     document.querySelectorAll('.task button').forEach(function(btn){

           btn.addEventListener('click',function(){
                
               // console.log(btn.id)

               currentTask.splice(btn.id,1)
               renderTask()
           })
     })


 }

 renderTask();



const form = document.querySelector('.addTask form');
const taskTitle = document.querySelector('.addTask form #task-title');
const taskDesc = document.querySelector('.addTask form textarea');
const taskImp = document.querySelector('.addTask form #check');

 form.addEventListener('submit', function(e){

        e.preventDefault() 

        currentTask.push(
            {
                title: taskTitle.value,
                desc: taskDesc.value,
                imp: taskImp.checked
            }
        )
        renderTask()

     taskTitle.checked = false
        taskDesc.value = ''
        taskImp.value = ''
    })








