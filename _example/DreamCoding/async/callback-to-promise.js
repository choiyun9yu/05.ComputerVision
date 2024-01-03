"use strict";

// Callback Hell example
// class UserStorage {
//     loginUser(id, password, onSuccess, onError) {
//         setTimeout( () => {
//             if (
//                 (id === 'ellie' && password === 'dream') ||
//                 (id === 'coder' && password === 'academy') 
//             ) {
//                 onSuccess(id);
//             } else {
//                 onError(new Error('not found'));
//             }
//         }, 2000);
//     }

//     getRoles(user, onSuccess, onError) {
//         setTimeout( () => {
//             if (user === 'ellie') {
//                 onSuccess( {name: 'ellie', role: 'admin'});
//             } else {
//                 onError(new Error('no access'));
//             }
//         }, 1000);
//     }
// }

// const userStorage = new UserStorage();
// const id = prompt('enter your id');
// const password = prompt('enter your password');

// userStorage.loginUser(
//     id, 
//     password,
//     user => {
//         userStorage.getRoles(
//             user,
//             userWithRole => {
//                 alert(
//                     `Hello ${userWithRole.name}, you hava a ${userWithRole.role} role`
//                 );
//             }, 
//             error => {
//                 console.log(error);
//             }
//         );
//     },
//     error => {
//         console.log(error)
//     }
// );




// Callback to Promise

class UserStorage {
    loginUser(id, password) {
        return new Promise((resolve, reject) => {
            setTimeout( () => {
                if (
                    (id === 'ellie' && password === 'dream') ||
                    (id === 'coder' && password === 'academy') 
                ) {
                    resolve(id);
                } else {
                    reject(new Error('not found'));
                }
            }, 2000);
        });
    }

    getRoles(user) {
        return new Promise((resolve, reject) => {
            setTimeout( () => {
                if (user === 'ellie') {
                    onSuccess( {name: 'ellie', role: 'admin'});
                } else {
                    onError(new Error('no access'));
                }
            }, 1000);
        });
    }
}

const userStorage = new UserStorage();
const id = prompt('enter your id');
const password = prompt('enter your password');

userStorage
.loginUser(id, password)
.then(userStorage.getRoles) // 인자가 똑같으니까 간단히 생략 가능
.then(user => alert( `Hello ${user.name}, you hava a ${user.role} role`))
.catch(console.log);