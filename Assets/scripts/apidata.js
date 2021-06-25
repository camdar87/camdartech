// $(document).ready(function() {




//     $.getJSON ( "https://gist.githubusercontent.com/camdar87/7d26ddd989219f18e5907991158cddd8/raw/5866487f5f89a379b4e11b08ff6897c70a5c3be5/test",  function(data) {




//         //append data to site form json link.
//         //most of this file uses jqury

//         $.each(data.MobileOne, function(i,f) {
//             $("#ImgTarget").prepend("<ul><br>   Title: " +  f.type + f.img + " / > </ul>  ");

//            });
        


//             $.each(data.rap, function(i,f) {
//               $("#Rap_MM").prepend("<ul><br>   Title: " +  f.title+ "<br> Artist: " + f.Artist + "<br> Lastplayed: " + f.times_lastplyed + "<br> "  + "<br><a id=button href='" + f.ytlink +"'>Play on youtube</a></br> "+  "<br><img id=the_i src=../Assets/DataImage/" + f.img + " / > </ul>  ");
 
//              });


//              $.each(data.Rock, function(i,f) {
//                 $("#ImgTarget").prepend("<ul><br>   Title: " +  f.title+ "<br> Artist: " + f.Artist + "<br> Lastplayed: " + f.times_lastplyed + "<br> "  + "<br><a id=button href='" + f.ytlink +"'>Play on youtube</a></br> "+  " "  + "<br><a id=button href='" + f.ytlink +"'>Play on Spotify </a></br> "+ "<br><img id=the_i src=../Assets/DataImage/" + f.img + " / > </ul>  ");
   
//                }); 

//             $.each(data.recent, function(i,f) {
//                 $("#recent").prepend("<ul><br>   Title: " +  f.title+ "<br> Artist: " + f.Artist + "<br> Lastplayed: " + f.times_lastplyed + "<br> "  + "<br><a id=button href='" + f.ytlink +"'>Play on youtube</a></br> "+  " "  + "<br><a id=button href='" + f.ytlink +"'>Play on Spotify </a></br> "+ "<br><img id=the_i src=../Assets/DataImage/" + f.img + " / > </ul>  ");
   
//                });

//         });
//     })
