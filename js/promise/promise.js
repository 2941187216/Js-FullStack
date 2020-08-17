class HD {
    static PENDING = 'pending';
    static FUFILLED = 'fulfilled';
    static REJECTED = 'rejected'
    constructor(executor){
        this.status = HD.PENDING;
        this.value = null;
       try {
            executor(this.resolve.bind(this), this.reject.bind(this))
       } catch (error) {
           this.reject(error)
       }
    }
    resolve(value) {
        // console.log(this);
        if (this.status === HD.PENDING) {
            this.status = HD.FUFILLED;
            this.value = value;
        }
       
    }
    reject(reason) {
        // console.log(this);
        if (this.status === HD.REJECTED) {
            this.status = HD.REJECTED;
            this.value = reason;
        }
        
    }
}

// new Promise((resolve, reject) => {

// })