
// Variables
let experienceEl = document.getElementById("experience");

// Event listeners
window.addEventListener("load", getAllExperiences);

// Functions
// REST request using GET printing all experiences
function getAllExperiences() {
    experienceEl.innerHTML = "";

    fetch("https://webicon.se/tweug/dt173g/projekt/rest/experience.php", {
        method: "GET",
        mode: "cors",
        credentials: "same-origin",
        headers: {
            "Authorization": "Basic bWlja2U6bWlja2U=",
          }, 
    })
    .then(resp => resp.json())
    .then(data => {
        if(data.message) {
            experienceEl.innerHTML = data.message;
        } else {
            data.forEach(experience => {
                experienceEl.innerHTML += `
                    <div>
                        <p>
                            <b>${experience.header} - ${experience.position}</b>
                            <br />
                            <i><span class="small-text">${experience.year}</span></i>
                        </p>
                        <p>
                            ${experience.description}
                        </p>
                    </div>
                `;
            })
        }
    })
    .catch(error => {
        console.log(error);
    })
}
