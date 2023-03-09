let table = document.getElementById("table");
let formEle = document.getElementById("myform");
let tbody = document.getElementById('tabledata');
let nameEle = document.getElementById("name");
let emailEle = document.getElementById("email");
let genderEle = document.querySelectorAll('input[name = "gender"]');
let hobbyEle = document.querySelectorAll('input[type = "checkbox"]');
let ageEle = document.getElementById("age");
let countryEle = document.getElementById("country");
let stateEle = document.getElementById("state");
let cityEle = document.getElementById("city");
let buttonEle = document.getElementById("submit");
let searchEle = document.getElementById("search");
let id = 3;

// Country Options
const countryArray = [
    { id: 1, country: "India" },
    { id: 2, country: "Canada" },
    { id: 3, country: "USA" }];
let newCountry = '<option value=""> --Select-- </option>';
for (const key in countryArray) {
    newCountry += `<option value=${countryArray[key].id}>${countryArray[key].country}</option>`;
    countryEle.innerHTML = newCountry;
}

//State Options
const optionsState = [
    { id: 1, country_id: 1, state: "Gujarat" },
    { id: 2, country_id: 1, state: "Punjab" },
    { id: 3, country_id: 1, state: "Maharashtra" },
    { id: 4, country_id: 2, state: "Alberta" },
    { id: 5, country_id: 2, state: "British Columbia" },
    { id: 6, country_id: 2, state: "Ontario" },
    { id: 7, country_id: 3, state: "California" },
    { id: 8, country_id: 3, state: "Texas" },
    { id: 9, country_id: 3, state: "Florida" }];
const populateState = (state) => {
    state = document.myform.country.value;
    let newState = '<option value=""> --Select-- </option>';
    for (const key in optionsState) {
        if (state == optionsState[key].country_id) {
            newState += `<option value=${optionsState[key].id}>${optionsState[key].state}</option>`;
            stateEle.innerHTML = newState;
        }
    }
}

//City Objects
const optionsCity = [
    { id: 2, state_id: 1, country_id: 1, city: "Ahmedabad" },
    { id: 3, state_id: 1, country_id: 1, city: "Vadodara" },
    { id: 4, state_id: 1, country_id: 1, city: "Rajkot" },
    { id: 1, state_id: 1, country_id: 1, city: "Surat" },
    { id: 5, state_id: 2, country_id: 1, city: "Ludhiana" },
    { id: 6, state_id: 2, country_id: 1, city: "Amritsar" },
    { id: 7, state_id: 2, country_id: 1, city: "Jalandhar" },
    { id: 8, state_id: 2, country_id: 1, city: "Patiala" },
    { id: 9, state_id: 3, country_id: 1, city: "Mumbai" },
    { id: 10, state_id: 3, country_id: 1, city: "Pune" },
    { id: 11, state_id: 3, country_id: 1, city: "Nagpur" },
    { id: 12, state_id: 3, country_id: 1, city: "Kalyan-Dombivli" },
    { id: 13, state_id: 4, country_id: 2, city: "Calgary" },
    { id: 14, state_id: 4, country_id: 2, city: "Edmonton" },
    { id: 15, state_id: 4, country_id: 2, city: "Lethbridge" },
    { id: 16, state_id: 4, country_id: 2, city: "St. Albert" },
    { id: 17, state_id: 5, country_id: 2, city: "Vancouver" },
    { id: 18, state_id: 5, country_id: 2, city: "Victoria" },
    { id: 19, state_id: 5, country_id: 2, city: "Kelowna" },
    { id: 20, state_id: 5, country_id: 2, city: "Abbotsford" },
    { id: 21, state_id: 6, country_id: 2, city: "Mississauga" },
    { id: 22, state_id: 6, country_id: 2, city: "Brampton" },
    { id: 23, state_id: 6, country_id: 2, city: "Hamilton" },
    { id: 24, state_id: 6, country_id: 2, city: "Kitchener" },
    { id: 25, state_id: 7, country_id: 3, city: "Los Angeles" },
    { id: 26, state_id: 7, country_id: 3, city: "San Diego" },
    { id: 27, state_id: 7, country_id: 3, city: "Frenso" },
    { id: 28, state_id: 7, country_id: 3, city: "Oakland" },
    { id: 29, state_id: 8, country_id: 3, city: "Houston" },
    { id: 30, state_id: 8, country_id: 3, city: "Dallas" },
    { id: 31, state_id: 8, country_id: 3, city: "Austin" },
    { id: 32, state_id: 8, country_id: 3, city: "San Antonio" },
    { id: 33, state_id: 9, country_id: 3, city: "Jacksonville" },
    { id: 34, state_id: 9, country_id: 3, city: "Miami" },
    { id: 35, state_id: 9, country_id: 3, city: "Tampa" },
    { id: 36, state_id: 9, country_id: 3, city: "Sarasota" }];
const populateCity = (city) => {
    city = document.myform.state.value;
    let newCity = '<option value=""> --Select-- </option>';
    for (const key in optionsCity) {
        if (city == optionsCity[key].state_id) {
            newCity += `<option value=${optionsCity[key].id}>${optionsCity[key].city}</option>`;
            cityEle.innerHTML = newCity;
        }
    }
}

//show error color
const showError = (input, message) => {
    const formControl = input.parentNode;
    formControl.className = 'myform error';
    const span = formControl.querySelector('span');
    span.innerText = message;
}

//show success colour
const showSuccess = (input) => {
    const formControl = input.parentNode;
    formControl.className = 'myform success';
}

//check email is valid
const checkEmail = (input) => {
    const re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    if (re.test(input.value.trim())) {
        showSuccess(input);
        return true;
    } else {
        showError(input, 'Email is not valid');
        return false;
    }
}

//checkRequired fields
const checkRequired = (inputArr) => {
    inputArr.forEach(function (input) {
        if (input.value.trim() === '') {
            showError(input, `${getFieldName(input)} is required`);
            return false;
        } else {
            showSuccess(input);
            return true;
        }
    });
}

//check input Length
const checkLength = (input, min, max) => {
    if (input.value.length < min) {
        showError(input, `${getFieldName(input)} must be at least ${min} characters`);
        return false;
    } else if (input.value.length > max) {
        showError(input, `${getFieldName(input)} must be less than ${max} characters`);
        return false;
    } else {
        showSuccess(input);
        return true;
    }
}

//get FieldName
const getFieldName = (input) => {
    return input.id.charAt(0).toUpperCase() + input.id.slice(1);
}

//check age validation
const checkAge = (input) => {
    if (input.value == "" || input.value < 1 || input.value > 100) {
        showError(input, 'Age is not valid');
        return false;
    }
    else {
        showSuccess(input);
        return true;
    }
}

//check dropdown
const checkDropdown = (input) => {
    if (input.value == "") {
        showError(input, `${getFieldName(input)} is required`);
        return false;
    } else {
        showSuccess(input);
        return true;
    }
}

//Event Listeners
const validationForm = () => {
    let flag = false;
    checkRequired([nameEle, emailEle, ageEle, countryEle, stateEle, cityEle]);
    let lengthState = checkLength(nameEle, 3, 15);
    let emailState = checkEmail(emailEle);
    let ageState = checkAge(ageEle);
    let countryState = checkDropdown(countryEle);
    let stateState = checkDropdown(stateEle);
    let cityState = checkDropdown(cityEle);
    let genderState = getGender();
    let hobbyState = getHobby();
    if (lengthState == true && emailState == true && ageState == true && countryState == true && stateState == true && cityState == true && genderState != false && hobbyState != false) {
        return flag = true;
    }
    return flag;
}

//get time
const getTime = () => {
    let d = new Date();
    let date = d.getDate();
    let month = d.getMonth() + 1;
    let year = d.getFullYear();
    let hours = d.getHours();
    let minutes = d.getMinutes();
    let seconds = d.getSeconds();
    if (date < 10) date = "0" + date;
    if (month < 10) month = "0" + month;
    if (hours < 10) hours = "0" + hours;
    if (minutes < 10) minutes = "0" + minutes;
    if (seconds < 10) seconds = "0" + seconds;
    let timeEle = `${date}/${month}/${year} ${hours}:${minutes}:${seconds}`;
    return timeEle;
}

// Get Gender
const getGender = () => {
    let selectedGender = document.querySelector('input[name="gender"]:checked');
    if (selectedGender == null) {
        document.getElementById("gendererr").innerHTML = "Gender is required";
        return false;
    }
    else {
        document.getElementById("gendererr").innerHTML = "";
        return selectedGender.value;
    }
}

// Get Hobby
const getHobby = () => {
    let selectedHobby = document.querySelectorAll('input[type="checkbox"]:checked');
    let listSelectedHobbyValue = '';
    selectedHobby.forEach(element => {
        listSelectedHobbyValue += element.value + " ";
    });
    if (listSelectedHobbyValue == "") {
        document.getElementById("hobbyerr").innerHTML = "Hobby is required";
        return false;
    }
    else {
        document.getElementById("hobbyerr").innerHTML = "";
        return listSelectedHobbyValue;
    }
}

///////------ store data in array-------//////
const storeDataArray = (event) => {
    event.preventDefault();

    genderEle.forEach(element => {
        element.addEventListener("change", getGender);
    });
    hobbyEle.forEach(element => {
        element.addEventListener("change", getHobby);
    });
    let validate = validationForm();

    const selectedCountry = () => {
        let country;
        countryArray.forEach(element => {
            if (countryEle.value === element.country) {
                country = parseInt(element.id);
            }
            else if(countryEle.value == element.id){
                country = parseInt(countryEle.value);
            }
        });
        return country;
    }
    const selectedState = () => {
        let state;
        optionsState.forEach(element => {
            if (stateEle.value === element.state) {
                state = parseInt(element.id);
            }
            else if(stateEle.value == element.id){
                state = parseInt(stateEle.value);
            }
        });
        return state;
    }
    const selectedCity = () => {
        let city;
        optionsCity.forEach(element => {
            if (cityEle.value === element.city) {
                city =  parseInt(element.id);
            }
            else if(cityEle.value == element.id){
                city = parseInt(cityEle.value);
            }
        });
        return city;
    }

    if (validate) {
        data = {
            id: ++id,
            name: nameEle.value,
            email: emailEle.value,
            gender: getGender(),
            hobby: getHobby(),
            age: ageEle.value,
            country: selectedCountry(),
            state: selectedState(),
            city: selectedCity(),
            time: getTime()
        }
        information.push(data);
        document.getElementById("myform").reset();
    }
    displayData();
}
buttonEle.addEventListener("click", storeDataArray);    

//////------ Display data in table ------//////
const displayData = () => {
    let tableData = '';
    information.forEach(element => {
        const selectedCountry = () => {
            for (const iterator of countryArray) {
                if (iterator.id === element.country) {
                    return iterator.country;
                }
            }
        }
        const selectedState = () => {
            for (const iterator of optionsState) {
                if (iterator.id === element.state) {
                    return iterator.state;
                }
            }
        }
        const selectedCity = () => {
            for (const iterator of optionsCity) {
                if (iterator.id === element.city) {
                    return iterator.city;
                }
            }
        }
        tableData += `<tr class="rows">
            <td>${element.name}</td>
            <td>${element.email}</td>
            <td>${element.gender}</td>  
            <td>${element.hobby}</td>
            <td>${element.age}</td>
            <td>${selectedCountry()}</td>
            <td>${selectedState()}</td>
            <td>${selectedCity()}</td>
            <td>${element.time}</td>
            <td colspan="2">
                <Button id="delete" onclick="deleteBtn(${element.id})">Delete</Button>
                <Button id="edit" onclick="editBtn(${element.id})">Edit</Button>
            </td>
        </tr>`;
    });
    tbody.innerHTML = tableData;
}
const information = [{
    id: 1,
    name: "XYZ",
    email: "xyz@gmail.com",
    gender: "Female",
    hobby: "Travelling",
    age: 25,
    country: 1,
    state: 1,
    city: 1,
    time: getTime()
}, {
    id: 2,
    name: "Taskin",
    email: "taskin1234@gmail.com",
    gender: "Female",
    hobby: "Reading",
    age: 22,
    country: 2,
    state: 6,
    city: 23,
    time: getTime()
}, {
    id: 3,
    name: "Krunal",
    email: "krunal1234@gmail.com",
    gender: "Male",
    hobby: "Sports",
    age: 25,
    country: 3,
    state: 7,
    city: 26,
    time: getTime()
}];
displayData();

// Delete Functionality  
const deleteBtn = (eleId) => {
    let index = information.findIndex((obj => obj.id == eleId));
    if (index > -1) {
        information.splice(index, 1);
    }
    displayData();
}

// Edit Fuctionality
const editBtn = (eleId) => {
    let index = information.findIndex((obj => obj.id == eleId));
    for (const key in genderEle) {
        if (information[index].gender == genderEle[key].value) genderEle[key].checked = true;
    }
    let hobby = information[index].hobby.split(" ");
    for (const key in hobbyEle) {
        hobby.forEach(element => {
            if (element === hobbyEle[key].value) hobbyEle[key].checked = true;
        });
    }
    nameEle.value = information[index].name;
    emailEle.value = information[index].email;
    ageEle.value = information[index].age;
    countryEle.value = information[index].country;

    // for state
    const countryValue = information[index].country;
    let stateObj = countryArray.find((o) => o.id === countryValue);
    selectedState = optionsState.filter((element) => {
        return element.country_id === stateObj.id;
    });
    let editedState = `<option value="">--Select--</option>`;
    selectedState.forEach((element) => {
        editedState += `<option value="${element.state}">${element.state}</option>`;
        stateEle.innerHTML = editedState;
    });
    let stateObj2 = optionsState.find(o => o.id === information[index].state);
    stateEle.value = stateObj2.state;

    // for city
    const selectedValue = information[index].state;
    let obj = optionsState.find((o) => o.id === selectedValue);
    selectedCity = optionsCity.filter((element) => {
        return element.state_id === obj.id;
    });
    let editedcity = `<option value="">--Select--</option>`;
    selectedCity.forEach((element) => {
        editedcity += `<option value="${element.city}">${element.city}</option>`
        cityEle.innerHTML = editedcity;
    });
    let obj2 = optionsCity.find(o => o.id === information[index].city);
    cityEle.value = obj2.city;

    buttonEle.style.display = "none";
    buttons = document.getElementById("buttons");
    let editbtn = ' ';
    editbtn += `<input type="button" onclick="updateBtn(${eleId})" id="update" value="UPDATE">
        <input type="button" onclick="cancelBtn()" id="cancel" value="CANCEL">`;
    buttons.innerHTML = editbtn;
}

// Updtate Fuctionality
const updateBtn = (eleId) => {
    deleteBtn(eleId);
    storeDataArray(event);
    buttonEle.style.display = "";
    document.getElementById("update").style.display = "none";
    document.getElementById("cancel").style.display = "none";
}

// Cancel Functionality
const cancelBtn = () => {
    buttonEle.style.display = "";
    document.getElementById("update").style.display = "none";
    document.getElementById("cancel").style.display = "none";
    document.getElementById("myform").reset();
}

// Search Functionality
const searchFunc = () => {
    let search = searchEle.value.toUpperCase();
    let tr = tbody.getElementsByTagName("tr");
    for (let i = 0; i < tr.length; i++) {
        let td = tr[i].getElementsByTagName("td")[0];
        let tdtext = td.innerHTML;
        if (tdtext.toUpperCase().indexOf(search) > -1) tr[i].style.display = "";
        else tr[i].style.display = "none";
    }
}

// Sort Functionality
const sortFunc = (n) => {
    let sort = document.getElementById("sorting").value;
    if (sort == "Ascending") {
        data = [...tbody.rows];
        data.sort((a, b) => {
            let x = a.getElementsByTagName("td")[n].innerHTML.toUpperCase();
            let y = b.getElementsByTagName("td")[n].innerHTML.toUpperCase();
            return x < y ? -1 : 1;
        })
        data.map((element) => {
            tbody.appendChild(element);
        });
    }
    else if (sort == "Descending") {
        data = [...tbody.rows];
        data.sort((a, b) => {
            let x = a.getElementsByTagName("td")[n].innerHTML.toUpperCase();
            let y = b.getElementsByTagName("td")[n].innerHTML.toUpperCase();
            return x < y ? 1 : -1;
        })
        data.map((element) => {
            tbody.appendChild(element);
        });
    }
}