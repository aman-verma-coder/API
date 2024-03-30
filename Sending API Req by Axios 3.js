let url = "http://universities.hipolabs.com/search?name=";
let btn = document.querySelector("button");
btn.addEventListener("click", async () => {
    let country = document.querySelector("#country").value;
    console.log("clicked");
    var cols = await getColleges(country);
    abcd(cols);
})
async function getColleges(country) {
    try {
        let result = await axios.get(url + country);
        return (result.data);
    } catch (error) {
        console.log(error);
        return ([]);
    }
}
async function efgj(country) {

}
function abcd(cols) {
    let list = document.querySelector("#list");
    list.innerText = "";
    for (const col of cols) {
        console.log(col.name);
        let li = document.createElement("li");
        li.innerText = col.name;
        list.appendChild(li);
    }
}
// efgj();