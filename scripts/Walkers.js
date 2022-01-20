import { getWalkers, getCities, getWalkerCities } from "./database.js"

const walkers = getWalkers()
const cities = getCities()
const walkerCities = getWalkerCities()


document.addEventListener(
    "click",
    (clickEvent) => {
        const itemClicked = clickEvent.target
        if (itemClicked.id.startsWith("walker")) {
            const [,walkerId] = itemClicked.id.split("--")

            for (const walker of walkers) {
                const filterWalkerCities = filterWalkerCitiesByWalker(walker)
                const cityNames = getCityNames(filterWalkerCities)
                if (walker.id === parseInt(walkerId)) {
                    window.alert(`${walker.name} services ${cityNames}`)
                }
            }
        }
    }
)

export const Walkers = () => {
    let walkerHTML = "<ul>"

    for (const walker of walkers) {
        walkerHTML += `<li id="walker--${walker.id}">${walker.name}</li>`
    }

    walkerHTML += "</ul>"

    return walkerHTML
}

// The function need the walker information, so define a parameter
const filterWalkerCitiesByWalker = (walker) => {
    // Define an empty array to store all of the assignment objects
    let filteredWalkerCities = []
    // Iterate the array value of walkerCities
    for (const walkerCity of walkerCities) {
            // Check if the primary key of the walker equals the foreign key on the assignment
            if (walkerCity.walkerId === walker.id) {
                // If it does, add the current object to the array of assignments
                filteredWalkerCities.push(walkerCity)
            }
    }
    
    // After the loop is done, return the assignments array
    return filteredWalkerCities
}


// Get city names for walkers
const getCityNames = (walkerCities) => {
    let cityNames = ""
    for (let i = 0; i < walkerCities.length; i++) {
        for (const city of cities) {
            if (walkerCities[i].cityId === city.id) {
                if (cityNames === "") {
                    cityNames += city.name
                } else {
                    cityNames += "-"
                    cityNames += city.name
                }
            }
        }
    }
    return cityNames
    
}

// Display "walker" in "walker cities"
// export const Assignments = () => {
//     let assignmentHTML = "<ul>"
    
//     for (const walker of walkers) {
//         const cityNames = getCityNames(filterWalkerCitiesByWalker(walker))
//         assignmentHTML += `
//         <li>
//         ${walker.name} services in ${cityNames}
//         </li>
//         `
//     }
    
//     assignmentHTML += "</ul>"
    
//     return assignmentHTML
// }