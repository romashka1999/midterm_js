//User class
class User {

    constructor({id, name, username, email}){
        this.id = id;
        this.name = name;
        this.username = username;
        this.email = email;
    }

    getDetails(){
        const url =`https://jsonplaceholder.typicode.com/users?id=${this.id}`;
        return new Promise( (resolve, reject) => {
            fetch(url)
                .then(res => res.json())
                .then(user => resolve(user))
                .catch( err => reject(err))
        });
    }

    getTodoItems(){
        const url =`https://jsonplaceholder.typicode.com/todos?userId=${this.id}`;
        return new Promise( (resolve, reject) => {
                fetch(url)
                    .then(res => res.json())
                    .then(todos => resolve(todos))
                    .catch( err => reject(err))
        });
    }

    getCompletedTodos(){
        const url =`https://jsonplaceholder.typicode.com/todos?userId=${this.id}`;
        return new Promise( (resolve, reject) => {
                fetch(url)
                    .then(res => res.json())
                    .then(todos => {
                        let completedTodos = [];
                        for(let todo of todos){
                            if(todo.completed){
                                completedTodos.push(todo);
                            }
                        }
                        resolve(completedTodos);
                    })
                    .catch( err => reject(err))
        });
    }
}


// Json place holder Class
class JsonPlaceHolder {

    constructor() {}

    getUsers(){
        let usersInstances = [];
        const url =`https://jsonplaceholder.typicode.com/users`;
        return new Promise ( (resolve , reject) => {
            fetch(url)
                .then(res => res.json())
                .then(users => {
                    console.log('All JsonplaceHolders Users: ',users);

                    for(let user of users){
                        //create User class instance
                        const u = new User(user);
                        usersInstances.push(u);
                    }

                    resolve(usersInstances);
                })
                .catch( err => reject(err))
        })
    }

    
    
    getAllTodos(){
        const url =`https://jsonplaceholder.typicode.com/todos`;
        return new Promise( (resolve, reject) => {
                fetch(url)
                    .then(res => res.json())
                    .then(todos => resolve(todos))
                    .catch( err => reject(err))
        });
    }

    
}

/****************************** DRIVER CODE *************************************/


/******************************  jsonplaceholder  C L A S S ****************************/
const jsonplaceholder = new JsonPlaceHolder();
jsonplaceholder.getUsers().then( usersInstances => {console.log(usersInstances);}).catch( (err) => console.log(err));

jsonplaceholder.getAllTodos().then( (todos) => console.log(todos)).catch( (err) => console.log(err));


/******************************  U S E R  C L A S S ****************************/
const user = new User({
    id:1,
    name:'as',
    username:'asas',
    email:'asd'
})

user.getDetails().then( (user) => console.log(user)).catch( (err) => console.log(err));

user.getTodoItems().then( (todos) => console.log(todos)).catch( (err) => console.log(err));

user.getCompletedTodos().then( (completedTodos) => console.log(completedTodos)).catch( (err) => console.log(err));