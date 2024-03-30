let url = "https://catfact.ninja/fact";
fetch(url)
    .then((res) => {
        // console.log(res);
        return (res.json());
    })
    .then((data) => {
        console.log(data.fact);
        return (fetch(url));
    })
    .then((res) => {
        return (res.json())
    })
    .then((data) => {
        console.log(data.fact);
        return (fetch(url));
    })
    .then((res) => {
        return (res.json())
    })
    .then((data) => {
        console.log(data.fact);
        return (fetch(url));
    })
    .then((res) => {
        return (res.json())
    })
    .then((data) => {
        console.log(data.fact);
        return (fetch(url));
    })
    .catch((err) => {
        console.log(err);
    });
console.log("Apna College");