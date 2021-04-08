// const  ulRecent = document.getElementById("list-recent");


// fetch('https://mdn.github.io/learning-area/javascript/oojs/json/superheroes.json')
// .then(res => res.json())
// .then(data => {
//     let recent_song = musicData['recent'];
//     recent_song.forEach(track => {
//         let li = document.createElement("li");

//         let img_div = document.createElement("div");
//         img_div.classList.add("recent_img_class");

//         let img = document.createElement("img")
//         img.setAttribute("src", `${IMG_ASSEST_PATH}${track.img}`);
//         img_div.append(img);


//         let title = createTextDiv("titleclass",track.title);
//         let Artist = createTextDiv("AristClass",track.Artist);
//         let times_lastplyed= createTextDiv("listenedclass",track.times_lastplyed);
        
//         li.append(img_div);
//         li.append(title);
//         li.append(Artist);
//         li.append(times_lastplyed);

//         ulRecent.append(li);

//     })
'Access-Control-Allow-Origin: *'
fetch('https://camdarwebdata.herokuapp.com/')
.then(res => {
    return res.json();
})
.then(f => {
    console.log(f);
});