//Converting JSON to JavaScript Objects
let apiData =
    '{"fact": "Spanish-Jewish folklore recounts that Adams first wife, Lilith, became a black vampire cat, sucking the blood from sleeping babies. This may be the root of the superstition that a cat will smother a sleeping baby or suck out the child’s breath.", "length": 245}';
console.log(apiData);
let apiDataJSON = JSON.parse(apiData);
console.log(apiDataJSON);
console.log(apiDataJSON.fact);
//Converting JavaScript Objects to JSON
let studentInfo = {
    Name: "Aman Verma",
    Stream: "ECE",
    Section: "A"
};