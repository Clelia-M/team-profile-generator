// Define the intern class which extends the Employee class
class Intern extends Employee {
    constructor(name, ide, email, school) {
        // call the constructor of the parent class with super()
        super(name, ide, email); 
        this.school = school;
    }

    getSchool() {
        return this.school;
    }

    getRole() {
        return 'Intern';
    }
}

// Export the class so it can be used in other files
module.exports = {
    Intern
};