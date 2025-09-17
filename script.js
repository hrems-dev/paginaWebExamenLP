const item1 = document.getElementById('item1');
const item2 = document.getElementById('item2');
const item3 = document.getElementById('item3');
const fig1 = document.getElementById('fig1');
const fig2 = document.getElementById('fig2');
const fig3 = document.getElementById('fig3');

function resetItemColors() {
    item1.style.backgroundColor = '';
    item2.style.backgroundColor = '';
    item3.style.backgroundColor = '';
}

const darkColor = '#46683aff';

item1.addEventListener('click', () => {
    resetItemColors();
    item1.style.backgroundColor = darkColor;
});

item2.addEventListener('click', () => {
    resetItemColors();
    item2.style.backgroundColor = darkColor;
});

item3.addEventListener('click', () => {
    resetItemColors();
    item3.style.backgroundColor = darkColor;
});
item1.addEventListener('click', () => {
    fig1.style.display = 'block';
    fig2.style.display = 'none';
    fig3.style.display = 'none';
});

item2.addEventListener('click', () => {
    fig1.style.display = 'none';
    fig2.style.display = 'block';
    fig3.style.display = 'none';
});

item3.addEventListener('click', () => {
    fig1.style.display = 'none';
    fig2.style.display = 'none';
    fig3.style.display = 'block';
});
