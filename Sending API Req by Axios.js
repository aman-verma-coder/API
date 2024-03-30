let btn = document.querySelector("button");
btn.addEventListener("click", async () => {
    let para = document.querySelector("#result");
    let factt = await APIReq();
    console.log(factt);
    para.innerText = factt;
})
let url = "https://catfact.ninja/fact";
async function APIReq() {
    try {
        let response = await axios.get(url);
        return (response.data.fact);
    } catch (error) {
        console.log(error);
        return
    }
}