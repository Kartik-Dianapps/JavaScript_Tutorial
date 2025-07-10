class User{
    constructor(email,passwd)
    {
        this.email = email;
        this.passwd = passwd;
    }
    get passwd(){
        return this._passwd;
    }

    set passwd(value)
    {
        this._passwd = value;
    }

    get email(){
        return this._email;
    }

    set email(value)
    {
        this._email = value;
    }
}

const u1 = new User("abc@gmail.com","1234");
console.log(u1);
console.log(u1.passwd);
console.log(u1.email);


