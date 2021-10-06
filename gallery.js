let images = [
  {url:"./images/portrait1.jpg", alt:"portrait1"},
  {url:"./images/portrait2.jpg", alt:"portrait2"},
  {url:"./images/portrait3.jpg", alt:"portrait3"},
  {url:"./images/portrait4.jpg", alt:"portrait4"},
  {url:"./images/portrait5.jpg", alt:"portrait5"},
  {url:"./images/portrait6.jpg", alt:"portrait6"}
];
let num = 0;  // Индекс, указывающий на текущую картинки

function forward() {
  num++;
  if (num == images.length) {
    num = 0;
  }
  showImage (num);
}

function back() {
  num--;
  if (num < 0) {
    num = images.length - 1;
  }
  showImage (num);
}

function showImage (num) {
  let image = document.getElementById('image');
  image.src = images[num].url;
  image.alt = images[num].alt;
}

showImage (num);