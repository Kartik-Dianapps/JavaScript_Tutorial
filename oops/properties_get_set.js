function User(email,passwd) {
    this._email = email;
    this._passwd = passwd;

    Object.defineProperty(this,'email',{
        get:function(){
            return this._email.toUpperCase();
        },
        set:function(value){
            this._email = value;
        }
    })

    Object.defineProperty(this,'passwd',{
        get:function(){
            return this._passwd.toUpperCase();
        },
        set:function(value){
            this._passwd = value;
        }
    })
}

const u1 = new User("abc@gmail.com",123);
console.log(u1);
console.log(u1.email);

