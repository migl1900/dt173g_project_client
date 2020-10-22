
// Variables
let educationEl = document.getElementById("education");

// Event listeners
window.addEventListener("load", getAllCourses);

// Functions
// REST request using GET printing all courses
function getAllCourses() {
    educationEl.innerHTML = "";
    fetch("https://webicon.se/tweug/dt173g/projekt/rest/education.php", {
        method: "GET",
        mode: "cors",
        credentials: "same-origin",
        headers: {
            "Authorization": "Basic " + btoa("micke:micke"),
          }, 
    })
    .then(resp => resp.json())
    .then(data => {
        if(data.message) {
            educationEl.innerHTML = data.message;
        } else {
            data.forEach(course => {
                educationEl.innerHTML += `
                    <div>
                        <div class="tooltip"><b>${course.course}</b>
                            <span class="tooltiptext">${course.description}</span>
                        </div>
                        <br />
                        <i><span class="small-text">${course.year} - ${course.school}</span></i>
                    </div>
                    <br />
                `;
            })
        }
    })
    .catch(error => {
        console.log(error);
    })
}