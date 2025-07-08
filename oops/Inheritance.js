// Inheritance in js
class User{
    constructor(username)
    {
        this.username = username
    }
    logMe(){
        console.log(`Username:${this.username}`);
    }
}

class Teacher extends User{
    constructor(username,email,pswd)
    {
        super(username);
        this.email = email;
        this.pswd = pswd;
    }

    addCourse()
    {
        console.log(`${this.username} added a new course in academics...`);
    }
}

const t1 = new Teacher("Gautam","abc@gmail.com","1234");
console.log(t1);
t1.addCourse();
t1.logMe();

const u1 = new User("John");
console.log(u1);
u1.logMe();

console.log(t1 instanceof Teacher);
console.log(t1 instanceof User);
console.log(u1 instanceof User);
console.log(u1 instanceof Teacher);



