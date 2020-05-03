import {default as  users} from './users.js'

// ================task-01==========================================================

// Получить массив имен всех пользователей (поле name).

const getUserNames = users => {
  return users.map(user => user.name)
};

console.log(getUserNames(users));
// [ 'Moore Hensley', 'Sharlene Bush', 'Ross Vazquez', 'Elma Head', 'Carey Barr', 'Blackburn Dotson', 'Sheree Anthony' ]