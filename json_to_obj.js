// json to object

const jsondata='{"name":"john", "age":23}';   //json data

const jsonobj= JSON.parse(jsondata);   // covertion

console.log(jsonobj.age);  // accessing data
