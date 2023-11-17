// let age = +prompt(`How old are you?`)
// if (age <= 10) {
//     alert(`Добро пожаловать в детский мир`)
// } else if (age <= 20) {
//     alert(`Подросток`)
// } else if (age <= 30) {
//     alert(`Не ищи жену все равно мама найдет`)
// } else if (age <= 40) {
//     alert(`Дяденька работяга`)
// } else if (age <= 50) {
//     alert(`Одна нога здесь другая там`)
// }  else {
//     alert(`Ты шайтан?`)
// }

let answer = +prompt("Сколько человек в клубе?")
if(answer <10 && answer>=0) {
let name = prompt(`Как тебя зовут?`).trim().toLowerCase()
if(name.charAt(0) === `a`) {
let age = +prompt(`Сколько тебе лет?`)
if(age >= 20 && age <= 40) {
let money = prompt(`Сколько у тебя денег братищка`)
if(money >= 100) {
let peoples = prompt(`Сколько вас тут алкашов?`)
if(peoples <=10 - answer) {
    alert(`проходите`)
} else {
    alert(`Уходите отсюда голобушки)`)
}
} else{
    alert(`у тебя денег нету`)
}
} else{
    alert(`Ты еще мелкий`)
}
} else{
alert(`Ты не а...`)
}
} else{
    alert(`мест нету`)
}


 
