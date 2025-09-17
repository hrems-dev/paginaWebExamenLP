// Banner
const bannerItems = [
    document.getElementById('fig1'),
    document.getElementById('fig2'),
    document.getElementById('fig3')
];
const controls = [
    document.getElementById('item1'),
    document.getElementById('item2'),
    document.getElementById('item3')
];
const darkColor = '#46683aff';
let currentIndex = 0;
let intervalId;

function showItem(index) {
    bannerItems.forEach((item, i) => {
        if (i === index) {
            item.classList.add('active');
        } else {
            item.classList.remove('active');
        }
    });

    controls.forEach((control, i) => {
        if (i === index) {
            control.style.backgroundColor = darkColor;
        } else {
            control.style.backgroundColor = '';
        }
    });
}

function nextItem() {
    currentIndex = (currentIndex + 1) % bannerItems.length;
    showItem(currentIndex);
}

function startAutoSlide() {
    intervalId = setInterval(nextItem, 8000);
}

function stopAutoSlide() {
    clearInterval(intervalId);
}

controls.forEach((control, index) => {
    control.addEventListener('click', () => {
        stopAutoSlide();
        currentIndex = index;
        showItem(currentIndex);
        startAutoSlide();
    });
});

// Initialize banner
showItem(currentIndex);
startAutoSlide();


// Mobile menu
const menuIcon = document.getElementById('menu-icon');
const menuContainer = document.getElementById('menu-container');

menuIcon.addEventListener('click', () => {
    menuContainer.classList.toggle('show');
});