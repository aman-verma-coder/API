let btn = document.querySelector("button");
btn.addEventListener("click", async () => {
    let imgg = document.querySelector("#result");
    let link = await APIReq();
    console.log(link);
    imgg.setAttribute("src", link);
})
let url = "https://dog.ceo/api/breeds/image/random";
async function APIReq() {
    try {
        let response = await axios.get(url);
        return (response.data.message);
    } catch (error) {
        console.log(error);
        return("error");
    }
}