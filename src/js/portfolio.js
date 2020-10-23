
// Variables
let portfolioEl = document.getElementById("portfolio");

// Event listeners
window.addEventListener("load", getAllReferences);

// Functions
// REST request using GET printing all references
function getAllReferences() {
    portfolioEl.innerHTML = "";

    fetch("https://webicon.se/tweug/dt173g/projekt/rest/portfolio.php", {
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
            portfolioEl.innerHTML = data.message;
        } else {
            data.forEach(reference => {
                portfolioEl.innerHTML += `
                <div class="reference">
                    <img src="https://webicon.se/tweug/dt173g/projekt/admin/upload/${reference.image}" alt="${reference.alt}" />
                    <h6>${reference.header}</h6>
                    <p>${reference.description}</p>
                    <p><a href="${reference.link}">Besök sidan</a></p>
                </div>
                `;
            })
        }
    })
    .catch(error => {
        console.log(error);
    })
}