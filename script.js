var pictures = document.getElementById("pictures");
for(let i = 0; i < 5 ; i++){
    var picture = document.createElement("img");
    picture.setAttribute("src", "https://picsum.photos/200");
    pictures.append(picture);
}
if('serviceWorker' in navigator) {
    navigator.serviceWorker.register('./sw.js');
};


//TODO adapter ça à ce que j'ai fait au-dessus
// var json = JSON.parse(pictures.json);
// var images = '';
// for( var i=0; i < json.length; i++ ) {
//     images += '<img src="' + json[i]['image_path'] + '" />';
// }
// document.getElementById( 'pictures' ).innerHTML = images;