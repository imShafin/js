class User {
    constructor(email, password) {
        this.email = email
        this.password = password
    }

    get password() {
        return this._password.toUpperCase()
    }

    set password(password) {
        this._password = password
    }
}

const shafin = new User('shafin@mail.com', 'mew')
console.log(shafin.password)