var fullImgBox = document.getElementById("fullImgBox");
var fullImg = document.getElementById("fullImg");
var darkModeBtn = document.querySelector('.dark-mode-btn'); 

var images = [
    'Grid_Gallery_Img/img1.jpg',
    'Grid_Gallery_Img/img2.jpg',
    'Grid_Gallery_Img/img3.jpg',
    'Grid_Gallery_Img/img4.jpg',
    'Grid_Gallery_Img/img5.jpg',
    'Grid_Gallery_Img/img6.jpg',
    'Grid_Gallery_Img/img7.jpg',
    'Grid_Gallery_Img/img8.jpg'
];

var currentIndex = 0;

function OpenFullImg(imgSrc) {
    fullImgBox.style.display = "flex";
    fullImg.src = imgSrc;
    currentIndex = images.indexOf(imgSrc);
    darkModeBtn.style.display = "none"; 
}

function CloseFullImg() {
    fullImgBox.style.display = "none";
    darkModeBtn.style.display = "block"; 
}

function downloadImage() {
    var link = document.createElement('a');
    link.href = fullImg.src;
    link.download = fullImg.src.split('/').pop();
    link.click();
}

function prevImage() {
    if (currentIndex > 0) {
        currentIndex--;
    } else {
        currentIndex = images.length - 1;
    }
    fullImg.src = images[currentIndex];
}

function nextImage() {
    if (currentIndex < images.length - 1) {
        currentIndex++;
    } else {
        currentIndex = 0;
    }
    fullImg.src = images[currentIndex];
}

function toggleDarkMode() {
    document.body.classList.toggle('dark-mode');
}