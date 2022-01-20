import { getPets, getWalkers, getWalkerCities, getCities } from "./database.js"


// Get copy of state for use in this module
const pets = getPets()
const walkers = getWalkers()
// const walkerCities = getWalkerCities()
// const cities = getCities()


// Function whose responsibility is to find the walker assigned to a pet
const findWalker = (pet, allWalker) => {
    let petWalker = null

    for (const walker of allWalker) {
        if (walker.id === pet.walkerId) {
            petWalker = walker
        }
    }

    return petWalker
}

// Assignment
export const Assignments = () => {
    let assignmentHTML = ""
    assignmentHTML += "<ul>"

    for (const currentPet of pets) {
        const currentPetWalker = findWalker(currentPet, walkers)
        assignmentHTML += `
            <li>
                ${currentPet.name} is being walked by ${currentPetWalker.name}
            </li>
        `
    }

    assignmentHTML += "</ul>"

    return assignmentHTML
}

