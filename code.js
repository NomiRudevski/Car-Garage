
var btn = document.getElementById("editBtn");
var close = document.getElementById("closeBtn");
var temp = '';
let cars = [
    { "customerName": "John", "carColor": "Red", "carType": "Kia", "makeYear": "2020" },
    { "customerName": "Anna", "carColor": "Blue", "carType": "Peugeot", "makeYear": "2010" },
    { "customerName": "Bob", "carColor": "Green", "carType": "Toyota", "makeYear": "2017" }
]

function displayData() {
    var temp = `<table class = "table-a"> 
        <tr>
            <th class = x ></th>
            <th>Customer</th>
            <th>Car color</th>
            <th>Company</th>
            <th>Make year</th>
            <th class = x ></th>
      </tr> `
    for (let index = 0; index < cars.length; index++) {
        temp += `<tr>
            <td><button class="table-button" type="button" onclick = "deletCar(${index})">&#9746;</button></td>
            <td>${cars[index].customerName}</td>
            <td>${cars[index].carColor}</td>
            <td>${cars[index].carType}</td>
            <td>${cars[index].makeYear}</td>
            <td> <button id = "editBtn" class = "table-button" type = "button" onclick = "showModal(${index})">&#9998;</button> </td>
            </tr>`

    }
    temp += '</table>'
    document.getElementById("carsDisplay").innerHTML = temp
}

function load() {
    if (localStorage.getItem("cars")) {
        cars = JSON.parse(localStorage.getItem("cars"))
    }
    displayData()
}

function save() {
    localStorage.setItem("cars", JSON.stringify(cars))
}

function resetInput() {
    cName.value = ""
    cColor.value = ""
    cCompany.value = ""
    cYear.value = ""
}

function addCar() {
    if (cName.value != "" && cColor.value != "" && cCompany.value != "" && cYear.value != "") {
        cars.push({ "customerName": cName.value, "carColor": cColor.value, "carType": cCompany.value, "makeYear": cYear.value })
        resetInput()
        save()
        displayData()
    } else {
        alert('You need to fill all the input sels')
    }

}

function deletCar(index) {
    cars.splice(index, 1)
    save()
    displayData()
}
function closemodule() {
    document.getElementById("myModal").style.visibility = "hidden";
}


function showModal(ind) {
    document.getElementById("myModal").style.visibility = "visible";
    temp = ind
}
function updateCar() {
    ind = temp
    newName = document.getElementById("Nname").value
    newColor = document.getElementById("NcarColor").value
    newComp = document.getElementById("NcarComp").value
    newYear = document.getElementById("NcarYear").value

    if (newName != "" && newColor != "" && newComp != "" && newYear != "") {
        cars[ind] = { "customerName": newName, "carColor": newColor, "carType": newComp, "makeYear": newYear }
        save()
        load()
        closemodule()
    } else {
        alert('You need to fill all the input sels')
    }
}