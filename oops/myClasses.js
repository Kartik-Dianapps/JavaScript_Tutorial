class User{

    // Param constructor and by default it have default constructor
    constructor(username,email,pswd)
    {
        this.username = username;
        this.email = email;
        this.pswd = pswd;
    }
    encryptPswd(){
        return `${this.pswd}abc`;
    }
    changeName(){
        return `${this.username.toUpperCase()}`
    }
}

// const user1 = new User("John","abc@gmail.com","1234");
// console.log(user1);
// console.log(user1.encryptPswd());
// console.log(user1.changeName());


class Employee{

    // gives error as a class can have only one constructor
    // constructor(){

    // }
    
    constructor(username,designation,salary)
    {
        this.username = username;
        this.designation = designation;
        this.salary = salary;
    }
    getSalary()
    {
        return this.salary;
    }
    changeSalary(salary)
    {
        this.salary = salary;
    }
    printDetails(){
        return `${this.username}:${this.designation}:${this.salary}`;
    }
}

const emp1 = new Employee("Kartik","Software Trainee",30000);
console.log(emp1);
console.log(emp1.getSalary());
console.log(emp1.printDetails())
emp1.changeSalary(50000);
console.log(emp1.printDetails());


// What if we create employee without giving parameters then also it creates the object but with undefined properties value
const emp2 = new Employee();
console.log(emp2);
emp2.changeSalary(30000);
console.log(emp2.printDetails());




