function setName(username) {
    console.log(this);
    this.username = username;
    console.log(this);
}

function createUser(username,email,pswd)
{
    // setName(username);
    // so the sol is use call
    setName.call(this,username);
    this.email = email;
    this.pswd = pswd;
}

let user = new createUser("Doe","abc@@gmail.com","1234");
console.log(user);
