const  ulRecent = document.getElementById("list-recent");


fetch('https://gist.githubusercontent.com/camdar87/7322961bf2282d41641ace32786905a0/raw/860d430c19c1dd7ee0e918f9a0bf2e61ff43ac64/supertechsitedata')
.then(res => res.json())
.then(data => {
    let recent_song = musicData['MobileOne'];
    recent_song.forEach(track => {
        let li = document.createElement("li");

        let img_div = document.createElement("div");
        img_div.classList.add("recent_img_class");

        let img = document.createElement("img")
        img.setAttribute("src", `${IMG_ASSEST_PATH}${track.img}`);
        img_div.append(img);


        let title = createTextDiv("titleclass",track.title);
        let Artist = createTextDiv("AristClass",track.Artist);
        let times_lastplyed= createTextDiv("listenedclass",track.times_lastplyed);
        
        li.append(img_div);
        li.append(title);
        li.append(Artist);
        li.append(times_lastplyed);

        ulRecent.append(li);

    })
// fetch('https://gist.githubusercontent.com/camdar87/22238292af30fd318fb480152bb9e9f2/raw/92d1089a867907e9696460a599315d677109bdb4/techsite')
// .then(res => {
//     return res.html();
// })
// .then(f => {
//     console.log(f);
});