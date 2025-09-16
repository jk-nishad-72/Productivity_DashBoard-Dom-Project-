function PageOpenfeature() {
  const allelements = document.querySelectorAll(".elems");
  const fullementsPaages = document.querySelectorAll(".fullElem");
  const fullementsPaagesBackbtn = document.querySelectorAll(".back");

  //  console.log(allelements)
  // console.log(fullements)
  allelements.forEach(function (elem) {
    elem.addEventListener("click", function () {
      //   console.log(fullements[elem.id])
      fullementsPaages[elem.id].style.display = "block";
    });
  });

  fullementsPaagesBackbtn.forEach(function (back) {
    //  console.log(back.id)
    back.addEventListener("click", function () {
      fullementsPaages[back.id].style.display = "none";
    });
  });
}

PageOpenfeature();




function todo() {

     /**
      * 
      *   
const currentTask = [
     {
          title:"Project banana hai",
          imp: true,
          desc:"coding competetion , language",
     },
     {
          title:"Project submit krna  hai",
          imp: false,
          desc:"coding js  , html , css",
     },
     {
          title:"Project banana hai",
          imp: true,
          desc:"coding competetion , language",
     },

]
      */


  let currentTask = [];

  if (JSON.parse(localStorage.getItem("currentTask"))) {
    currentTask = JSON.parse(localStorage.getItem("currentTask"));
  } else {
    console.log("Task list is Empty");
  }

  function renderTask() {
    const allTask = document.querySelector(
      ".todo-list-fullPage .todo-container .allTask"
    );

    let sum = "";

    currentTask.forEach(function (elem, idx) {
      sum =
        sum +
        `<div class="task">
             <h3> ${elem.title} </h3>  <span class= ${elem.imp}> Imp </span>
             <h4> ${elem.desc} </h4>
              <button id= ${idx} > Mark as completed </button>
           </div>`;
    });

    allTask.innerHTML = sum;

    document.querySelectorAll(".task button").forEach(function (btn) {
      btn.addEventListener("click", function () {
        // console.log(btn.id)
        currentTask.splice(btn.id, 1);

        localStorage.setItem("currentTask", JSON.stringify(currentTask));
        renderTask();
      });
    });
  }

  renderTask();

  const form = document.querySelector(".addTask form");
  const taskTitle = document.querySelector(".addTask form #task-title");
  const taskDesc = document.querySelector(".addTask form textarea");
  const taskImp = document.querySelector(".addTask form #check");

  form.addEventListener("submit", function (e) {
    e.preventDefault();

    currentTask.push({
      title: taskTitle.value,
      desc: taskDesc.value,
      imp: taskImp.checked,
    });

    localStorage.setItem("currentTask", JSON.stringify(currentTask));
    renderTask();

    taskImp.checked = false;
    taskDesc.value = "";
    taskTitle.value = "";
  });

  /**
 
 * 
    let student =([
        {
            name:'jay',
            sem:5,
        },
        {
            name:'kishan',
            sem:6,
        },{
            name:'nishad',
            sem:8,
        },
    ])

    localStorage.setItem('student',JSON.stringify(student))

    const studentData = JSON.parse(localStorage.getItem('student'))

    console.log(studentData)
    
 */
}

todo();


function dailyPlannr(){

  
 var dayPlanner = document.querySelector('.day-planner')

   var planingsData = JSON.parse(localStorage.getItem('planingsData')) || {}
  
 let hours = Array.from({length:18},(_,idx)=>`${6+idx}:00 - ${7+idx}:00`)

  var wholeDaysum =''
 hours.forEach(function(elem,idx){

     var savedData = planingsData[idx] || ''
    wholeDaysum += `<div class="day-plnr-time">
              <p>${elem} </p>
              <input type="text" placeholder="Panning...." id=${idx} value= ${savedData} >
            </div>`
 })


 dayPlanner.innerHTML = wholeDaysum



 var dayPlnnerInput = document.querySelectorAll('.day-plnr-time input')



 dayPlnnerInput.forEach((elem)=>{
     
       elem.addEventListener('input',function(){

            planingsData[elem.id] = elem.value

      localStorage.setItem('planingsData',JSON.stringify(planingsData))
          
       })

 })


}

dailyPlannr() 





function motivationalQuote() {
    var motivation2Qoutes = document.querySelector('.motivation-2')
 var motivation3Aurthor  = document.querySelector('.motivation-3')

    async function fetchQuote() {

      
 

        let response = await fetch('https://api.allorigins.win/raw?url=https://zenquotes.io/api/random')
        let data = await response.json()


         console.log(data)  


        motivation2Qoutes.innerHTML = ` <h1>${data[0].q} </h1>`
        motivation3Aurthor.innerHTML =   `  <h2>${data[0].a} </h2>  `
    }

    fetchQuote()
}

motivationalQuote()





