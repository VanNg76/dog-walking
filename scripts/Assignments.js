import { getPets, getWalkers, getWalkerCities, getCities } from "./database.js"


// Get copy of state for use in this module
// const pets = getPets()
const walkers = getWalkers()
const walkerCities = getWalkerCities()
const cities = getCities()


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
                cityNames += city.name
                cityNames += " "
            }
        }
    }
    return cityNames
    
}

// Display "walker" in "walker cities"
export const Assignments = () => {
    let assignmentHTML = "<ul>"
    
    for (const walker of walkers) {
        const cityNames = getCityNames(filterWalkerCitiesByWalker(walker))
        assignmentHTML += `
        <li>
        ${walker.name} services in ${cityNames}
        </li>
        `
    }
    
    assignmentHTML += "</ul>"
    
    return assignmentHTML
}


// Function whose responsibility is to find the walker assigned to a pet
// const findWalker = (pet, allWalker) => {
//     let petWalker = null

//     for (const walker of allWalker) {
//         if (walker.id === pet.walkerId) {
//             petWalker = walker
//         }
//     }

//     return petWalker
// }

// export const Assignments = () => {
//     let assignmentHTML = ""
//     assignmentHTML += "<ul>"

//     for (const currentPet of pets) {
//         const currentPetWalker = findWalker(currentPet, walkers)
//         assignmentHTML += `
//             <li>
//                 ${currentPet.name} is being walked by
//                 ${currentPetWalker.name} in ${currentPetWalker.name}
//             </li>
//         `
//     }

//     assignmentHTML += "</ul>"

//     return assignmentHTML
// }

