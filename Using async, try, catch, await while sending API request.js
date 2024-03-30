let url = "https://catfact.ninja/fact2";
async function APIReq() {
    try {
        let response = await fetch(url);
        let data = await response.json();
        console.log(data.fact);
        let response2 = await fetch(url);
        let data2 = await response2.json();
        console.log(data2.fact);
        let response3 = await fetch(url);
        let data3 = await response3.json();
        console.log(data3.fact);
        let response4 = await fetch(url);
        let data4 = await response4.json();
        console.log(data4.fact);
        let response5 = await fetch(url);
        let data5 = await response5.json();
        console.log(data5.fact);
    } catch (error) {
        console.log(error);
    }
    console.log("Apna College");
}
APIReq();