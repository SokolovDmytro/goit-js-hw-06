import {
    default as users
} from './users.js'

// ================task-01==========================================================

// Получить массив имен всех пользователей (поле name).

const getUserNames = users => {
    return users.map(user => user.name)
};

console.log(getUserNames(users));
// [ 'Moore Hensley', 'Sharlene Bush', 'Ross Vazquez', 'Elma Head', 'Carey Barr', 'Blackburn Dotson', 'Sheree Anthony' ]

// ================task-02==========================================================

// Получить массив объектов пользователей по цвету глаз (поле eyeColor).

const getUsersWithEyeColor = (users, color) => {
    return users.filter(user => user.eyeColor === color)
};

console.log(getUsersWithEyeColor(users, 'blue')); // [объект Moore Hensley, объект Sharlene Bush, объект Carey Barr]

// ================task-03==========================================================

// Получить массив имен пользователей по полу (поле gender).

const getUsersWithGender = (users, gender) => {
    return users.filter(user => user.gender === gender).map(user => user.name)
};

console.log(getUsersWithGender(users, 'male')); // [ 'Moore Hensley', 'Ross Vazquez', 'Carey Barr', 'Blackburn Dotson' ]

// ================task-04==========================================================

Получить массив только неактивных пользователей (поле isActive).

const getInactiveUsers = users => {
  // твой код
};

console.log(getInactiveUsers(users)); // [объект Moore Hensley, объект Ross Vazquez, объект Blackburn Dotson]