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

fetch('https://mdn.github.io/learning-area/javascript/oojs/json/superheroes.json')
.then(r => {
    return r.json();
})
.then(n => {
    const superHeroes = n;
    populateHeader(superHeroes);
    showHeroes(superHeroes);
});

function populateHeader(obj) {
    const myH1 = document.createElement('h1');
    myH1.textContent = obj['squadName'];
    header.appendChild(myH1);

    const myPara = document.createElement('p');
    myPara.textContent = 'Hometown: ' + obj['homeTown'] + ' // Formed: ' + obj['formed'];
    header.appendChild(myPara);
  }

  function showHeroes(obj) {
    const heroes = obj['members'];

    for(let i = 0; i < heroes.length; i++) {
      const myArticle = document.createElement('article');
      const myH2 = document.createElement('h2');
      const myPara1 = document.createElement('p');
      const myPara2 = document.createElement('p');
      const myPara3 = document.createElement('p');
      const myList = document.createElement('ul');

      myH2.textContent = heroes[i].name;
      myPara1.textContent = 'Secret identity: ' + heroes[i].secretIdentity;
      myPara2.textContent = 'Age: ' + heroes[i].age;
      myPara3.textContent = 'Superpowers:';

      const superPowers = heroes[i].powers;
      for(let j = 0; j < superPowers.length; j++) {
        const listItem = document.createElement('li');
        listItem.textContent = superPowers[j];
        myList.appendChild(listItem);
      }

      myArticle.appendChild(myH2);
      myArticle.appendChild(myPara1);
      myArticle.appendChild(myPara2);
      myArticle.appendChild(myPara3);
      myArticle.appendChild(myList);

      section.appendChild(myArticle);
    }
  }

  //https://developer.mozilla.org/en-US/docs/Learn/JavaScript/Objects/JSON


// fetch('https://gist.githubusercontent.com/camdar87/7d26ddd989219f18e5907991158cddd8/raw/886dd5cc849a30a53eb2a2f5859ce5dca99b4246/test')
// .then(res => {
//     return res.json();
// })
// .then(f => {
//     console.log(f["Rock"][1]["Artist"]);
// });

// fetch('https://pokeapi.co/api/v2/pokemon/132/encounters')

