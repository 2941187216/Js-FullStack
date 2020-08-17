class HD {
    static PENDING = 'pending';
    static FUFILLED = 'fulfilled';
    static REJECTED = 'rejected'
    constructor(executor){
        this.status = HD.PENDING;
        this.value = null;
        executor(this.resolve.bind(this), this.reject.bind(this))
    }
    resolve(value) {
        console.log(this);
        this.status = HD.FUFILLED;
        this.value = value;
    }
    reject(reason) {
        console.log(this);
        this.status = HD.REJECTED;
        this.value = value;
    }
}

// new Promise((resolve, reject) => {

// })