let currentStep = 1;
const maxSteps=18;

function updateProgress(step) {
    const progress = document.getElementById("progress");
    const progressValue =document.getElementById("progressValue");
    const percentage = Math.floor((step/maxSteps)*100);

    progress.style.width=`${percentage}%`;
    progressValue.innerText =`${percentage}%`;
    progress.style.width=`${(step/maxSteps)*100}%`;
}


function nextStep() {
    const current = document.getElementById(`step${currentStep}`);
    current.style.display = "none";
    currentStep++;
    if (currentStep <= maxSteps) {
        const next = document.getElementById(`step${currentStep}`);
        next.style.display = "block";
    } else {
        displayValues();
    }
    updateProgress(currentStep);

    const inputs =document.querySelectorAll("#step"+ currentStep + "input");
    inputs.forEach(input =>{
        sessionStorage.setItem(input.id,input.value);
    });
    displayValues()
}

function prevStep(){
    const current = document.getElementById(`step${currentStep}`);
    current.style.display="none";
    currentStep--;
    const prev = document.getElementById(`step${currentStep}`);
    prev.style.display = "block";
    updateProgress(currentStep);

    const inputs =document.querySelectorAll("#step"+ currentStep + "input");
    inputs.forEach(input =>{
        const storedValue = sessionStorage.getItem(input.id);
        if (storedValue) {
            input.value=storedValue
        }
    });
    displayValues() 
}


document.getElementById("form").addEventListener("submit", (event) => {
    event.preventDefault();
    updateProgress(maxSteps);
    displayValues();
   
});

function displayValues(){
    const inputs = document.querySelectorAll("#form input");
    let summaryContent = document.getElementById("summaryContent");
    summaryContent.innerHTML = "";

    inputs.forEach(input => {
        let value = input.value;
        let name = input.previousElementSibling.innerText;
        let p = document.createElement("p");
        p.textContent = `${name} ${value}`;
        summaryContent.appendChild(p);
    });
}

updateProgress(0);
function ale(){
    alert("Form submitted sucessfully");
}
