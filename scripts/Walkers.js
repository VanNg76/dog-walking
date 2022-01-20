import { getWalkers, getCities } from "./database.js"

const walkers = getWalkers()
const cities = getCities()


document.addEventListener(
    "click",
    (clickEvent) => {
        const itemClicked = clickEvent.target
        if (itemClicked.id.startsWith("walker")) {
            const [,walkerId] = itemClicked.id.split("--")

            for (const walker of walkers) {
                if (walker.id === parseInt(walkerId)) {
                    window.alert(`${walker.name} services ${walker.city}`)
                }
            }
        }
    }
)

const getCityNames = (walkerCities) => {
    let cityNames = ""
    for (const walkerCity of walkerCities) {
        for (const city of cities) {
            if (walkerCity.cityId === city.id) {
                cityNames += city.name
                cityNames += " "
            }
        }
    }
    return cityNames

}

export const Walkers = () => {
    let walkerHTML = "<ul>"

    for (const walker of walkers) {
        walkerHTML += `<li id="walker--${walker.id}">${walker.name}</li>`
    }

    walkerHTML += "</ul>"

    return walkerHTML
}

