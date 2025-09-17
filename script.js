const item1 = document.getElementById('fig1');
const item2 = document.getElementById('fig2');
const item3 = document.getElementById('fig3');
function hideAllItems() {
    item1.style.display = 'none';
    item2.style.display = 'none';
    item3.style.display = 'none';
}
item1.addEventListener('click', () => {
    hideAllItems();
    console.log('click');
    item1.style.display = 'block';
});
item2.addEventListener('click', () => {
    hideAllItems();
    console.log('click');
    item2.style.display = 'block';
});
item3.addEventListener('click', () => {
    hideAllItems();
    item3.style.display = 'block';
});
