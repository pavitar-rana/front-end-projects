function red(url) {
  window.location = url;
}
let images = [
  "https://bangladeshpost.net/webroot/uploads/featureimage/2022-04/6267f8e72940c.jpg",
  "https://static-prod.adweek.com/wp-content/uploads/2019/05/john-wick-poster-qa-hed-page-2019.jpg",
  "https://w0.peakpx.com/wallpaper/667/376/HD-wallpaper-john-wick-2-bluray-poster-john-wick-chapter-2-2017-movies-movies-keanu-reeves.jpg",
];
var container = document.getElementById("slideshow");

function slideshow() {
  let count = 0;

  setInterval(function () {
    container.innerHTML = null;
    if (count === images.length) {
      count = 0;
    }

    let img = document.createElement("img");

    img.src = images[count];

    container.append(img);
    count++;
  }, 4000);
}
slideshow();
