// Define the Engineer class wich extends the Employee class
class Engineer extends Employee {
    constructor(name, id, email, github) {
      super(name, id, email); // call the constructor of the parent class with super()
      this.github = github;
    }
  
    getGithub() {
      return this.github;
    }
  
    getRole() {
      return 'Engineer';
    }
  }
