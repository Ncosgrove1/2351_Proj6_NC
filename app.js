// This is an example of a simple array // 

const vegetables = ["potatoes", "onions", "tomatoes", "lettuce", "carrots", "broccoli", "cucumbers"];

console.log (vegetables);

// This is an example of an array method, specifically the "splice()" method // 

console.log("\n");

vegetables.splice(3, 3);
console.log(vegetables);

// Another example array method, specifically the "join()" method // 

console.log("\n");

const vegetables1 = ["potatoes", "onions", "tomatoes", "lettuce", "carrots", "broccoli", "cucumbers"];

console.log(vegetables1.join(" & "));

// This is an example of an object // 

console.log("\n")

const person1 = { 
    name: "Olivia Jones", 
    age: 22,
    attendance: 90, 
};

console.log(person1.name, "\n", person1.age);

// This is an example of an object method // 

console.log("\n");

let person2 = {
    name: "Jake Simmons",
    semester: "Senior",
    attendance: 85,
 
    details: function () {
        return this.name + " |Semester - " + this.semester
            + " |Attendace - " + this.attendance + " ";
    }
};
 
// show the final object data // 
console.log("ENROLLED - " + person2.details());