class User{
    constructor(username)
    {
        this.username = username;
    }

    logMe(){
        console.log(`${this.username}`)
    }
    static createId(){
        return "123";
    }
}
class Teacher extends User{
    constructor(username,email)
    {
        super(username);
        this.email = email;
    }
    getEmail()
    {
        return this.email;
    }
}
const u1 = new User("Danny");
console.log(u1);
u1.logMe();

// If we make something static it can not be accessible by object
// console.log(u1.createId());

// but by class name it can be
console.log(User.createId());


// same for child class also as its object also cannot access the static things
const t1 = new Teacher("Gautam","abc@gmail.com");
console.log(t1.getEmail());

// gives error same as u1
// console.log(t1.createId());

// but can access using class name
console.log(Teacher.createId());
