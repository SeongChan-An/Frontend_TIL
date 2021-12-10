// https://www.geeksforgeeks.org/arrow-functions-in-javascript/

// case 1
let People = function(person, age) {
    this.person = person;
    this.age = age;
    this.info = function() {

     // logs People
     document.write(this);

     setTimeout(function() {
        // here this!=People
       document.write(this.person + " is " + this.age +
                                          " years old");
      }, 3000);
    }
}
let person1 = new People('John', 21);

// logs : undefined is undefined years old after 3 seconds
person1.info();

// case 2

let People2 = function(person, age) {
    this.person = person;
    this.age = age;
    this.info = function() {

        // logs People
        document.write(this + ' ');

        // here this=People
        document.write(this.person + " is " + this.age +
                                  " years old" + '<br>');
    }
}

let person2
= new People2('John', 21);

// logs : John is 21 years old
person2.info();

// separating the method info() from its
// object by storing it in a variable
let separated = person2.info;

// logs : undefined is undefined years old
separated();