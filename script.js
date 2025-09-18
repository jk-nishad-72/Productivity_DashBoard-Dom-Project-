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

function dailyPlannr() {
  var dayPlanner = document.querySelector(".day-planner");

  var planingsData = JSON.parse(localStorage.getItem("planingsData")) || {};

  let hours = Array.from(
    { length: 18 },
    (_, idx) => `${6 + idx}:00 - ${7 + idx}:00`
  );

  var wholeDaysum = "";
  hours.forEach(function (elem, idx) {
    var savedData = planingsData[idx] || "";
    wholeDaysum += `<div class="day-plnr-time">
              <p>${elem} </p>
              <input type="text" placeholder="Panning...." id=${idx} value= ${savedData} >
            </div>`;
  });

  dayPlanner.innerHTML = wholeDaysum;

  var dayPlnnerInput = document.querySelectorAll(".day-plnr-time input");

  dayPlnnerInput.forEach((elem) => {
    elem.addEventListener("input", function () {
      planingsData[elem.id] = elem.value;

      localStorage.setItem("planingsData", JSON.stringify(planingsData));
    });
  });
}

dailyPlannr();

function motivationalQuote() {
  var motivation2Qoutes = document.querySelector(".motivation-2");
  var motivation3Aurthor = document.querySelector(".motivation-3");

  async function fetchQuote() {
    let response = await fetch(
      "https://api.allorigins.win/raw?url=https://zenquotes.io/api/random"  
    );
    let data = await response.json();

    console.log(data);

    motivation2Qoutes.innerHTML = ` <h1>${data[0].q} </h1>`;
    motivation3Aurthor.innerHTML = `  <h2>${data[0].a} </h2>  `;
  }

  fetchQuote();
}

motivationalQuote();


function pomodorTimer(){

  
let timer = document.querySelector(".pomo-timer h1");
var startTimer = document.querySelector(".start-timer");
var pauseTimer = document.querySelector(".pause-timer");
var resetTimer = document.querySelector(".reset-timer");
var sesstion = document.querySelector('.session')
var isWorkSession = true

let timerInerval = null;
var totalSecoconds = 25 * 60;


function upDateTime() {
  let minuts = Math.floor(totalSecoconds / 60);
  let seconds = totalSecoconds % 60;

  timer.innerHTML = `${String(minuts).padStart("2", "0")} : 
  ${String(seconds).padStart("2", "0")} `;
}



function StartTimer() {

  clearInterval(timerInerval)

  if(isWorkSession){

      timerInerval = setInterval(() => {
    if (totalSecoconds > 0) {
      totalSecoconds--;
      upDateTime();
    } else {
       isWorkSession = false
      clearInterval(timerInerval);
      timer.innerHTML = '05 : 00'
      sesstion.innerHTML = 'Take a Break '
       sesstion.style.backgroundColor = 'var(--blue)'
       totalSecoconds = 5*60
    }
  }, 1000);
    
  } else{
      timerInerval = setInterval(() => {
    if (totalSecoconds > 0) {
      totalSecoconds--;
      upDateTime();
    } else {
       isWorkSession = true
      clearInterval(timerInerval);
      timer.innerHTML = '25 : 00'
      sesstion.innerHTML = 'Work Session '
       sesstion.style.backgroundColor = 'var(--green)'
       totalSecoconds = 25*60
    }
  }, 1000);

}

}

function PauseTimer() {
  clearInterval(timerInerval);
}


function ResetTimer() {
  totalSecoconds = 25 * 60;
  upDateTime();
}

startTimer.addEventListener("click", function () {
  StartTimer();
});
pauseTimer.addEventListener("click", PauseTimer);

resetTimer.addEventListener("click", function () {
  ResetTimer();
});

}   


pomodorTimer() 


var api = '14a8aab8d78c4226bac162912251809';
var city = 'london'
var data = null;

 async function weatherAPIcALL(){

        var response = await fetch(`http://api.weatherapi.com/v1/current.json?key=${api}&q=${city}`)
       data  = await response.json()
        console.log(data);
        

}

weatherAPIcALL() 


function timeDate(){

   let date = new Date()

    console.log(date);
    

  }

  timeDate()