//(Accessing json Data)
//JAVSCRIPT OBJECT
const data= {
    "name":"Jack",
    "age":"23",
    "place": "bangalore",


    "skills": {
        "technical": "cyber Security",
        "software": "Front end Development",

    }
    
}
//Accecing Json object
console.log(data.name);   //one method
console.log(data["age"]);  // second method

console.log(data.skills);
console.log(data.skills.software);
