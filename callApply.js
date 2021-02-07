const normalPerson ={
    firstName:'Shahinur',
    lastName:'islam',
    salary:15000,
    getFullName :function () {
        console.log(this.firstName, this.lastName);
    },
    chargeBill :function (amount) {
        this.salary =this.salary-amount;
        return this.salary;
    }
}
normalPerson.chargeBill(1000);
console.log(normalPerson.salary);