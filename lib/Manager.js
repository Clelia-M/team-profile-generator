// Define the Manager class which extends the employee class

class Manager extends employee {
    constructor(name, id, email, OfficeNumber) {
        // call the constructor of the parent class with super ()
        super(name, id, email);
        this.officeNumber = officeNumber;
    }

    getRole() {
        return 'Manager';
    }
}
