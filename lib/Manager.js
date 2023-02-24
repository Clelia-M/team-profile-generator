const Employee = require('./Employee');

// Define the Manager class which extends the employee class
class Manager extends Employee {
    constructor(name, id, email, officeNumber) {
        // call the constructor of the parent class with super ()
        super(name, id, email);
        this.officeNumber = officeNumber;
    }

    getRole() {
        return 'Manager';
    }
}

// Export the class so it can be used in other files
module.exports = Manager;