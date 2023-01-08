const CityAddresses = [
    {
        name: "Yonkers, NY",
        phone: "+1	914	678 0003",
        adress: "511 Warburton Ave",
        code: "YONKERS"
    },
    {
        name: "Canandaigua, NY",
        phone: "+1	585	393 0001",
        adress: "151 Charlotte Street",
        code: "CANANDAIGUA"
    },
    {
        name: "Sherrill, NY",
        phone: "+1	315	908 0004",
        adress: "14 WEST Noyes BLVD",
        code: "SHERRILL"
    },
    {
        name: "New York City",
        phone: "+1	212	456 0002",
        adress: "9 East 91st Street",
        code: "NEW_YORK"
    }
]
const onFilterBy = (service) => {
    handleClickToFilterButton(service)
    
    const servicesElement = document.getElementById('services')
    const services = servicesElement.getElementsByClassName('service-item')

    for (let item of services) {
        if (item.id !== service) {
            item.classList.add('blured')
        } else {
            item.classList.remove('blured')
        }
    }
}

const handleClickToFilterButton = (service) => {
    const filtersElement = document.getElementById('service-btns')
    const filterButtons = filtersElement.getElementsByClassName('filter-button')

    for (let item of filterButtons) {
        if (item.id === service) {
            item.classList.add('button-activated')
        } else {
            item.classList.remove('button-activated')
        }
    }
}

const onChangeCity = () => {
    const select = document.getElementById('cities')
    const details = document.getElementById('address-details')

    if (select.value !== 'null') {
        details.style.display = 'flex'
        const selectedCity = CityAddresses.find(c => c.code === select.value)

        const nameElement = document.getElementById('city-name')
        const phoneElement = document.getElementById('city-phone')
        const addressElement = document.getElementById('city-address')
    
        nameElement.innerHTML = selectedCity.name
        phoneElement.innerHTML = selectedCity.phone
        addressElement.innerHTML = selectedCity.adress
    } else {
        details.style.display = 'none'
    }
}