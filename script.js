let namePerson = prompt("Ваше имя?");
function showName() {
    alert("Вы написали имя: " + namePerson);
    let nameVar = document.getElementById("name");
    nameVar.textContent = namePerson;
    console.log(nameVar);
}
function getAge() {
    let age2 = parseInt(prompt("Сколько вам лет?"));
    alert(age2+" лет");
    let ageVar = document.getElementById("age")
    switch (true) {
        case (age2>=0 && age2<=17):{
            ageVar.textContent = "Иди ещё учись";
            break;
        }
        case (age2>17 && age2<=65):{
            ageVar.textContent = "Иди на работу";
            break;
        }
        default:{
            ageVar.textContent = "Наслаждайся пенсией";
            break;
        }
    }
}
showName();
getAge();

