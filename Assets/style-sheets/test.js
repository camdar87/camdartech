fetch('https://pokeapi.co/api/v2/pokemon/132/encounters')
.then(r => {
    return r.json();
})
.then(n => {
    console.log(n[2]["location_area"]["name"]);
    document.querySelector("#other-text").innerHTML = n[2]["location_area"]["name"];
});


fetch('https://gist.githubusercontent.com/camdar87/7d26ddd989219f18e5907991158cddd8/raw/886dd5cc849a30a53eb2a2f5859ce5dca99b4246/test')
.then(res => {
    return res.json();
})
.then(f => {
    console.log(f["Rock"][1]["Artist"]);
});

