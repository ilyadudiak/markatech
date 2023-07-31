document.querySelector('.burger').addEventListener('click', () => {
    document.querySelector('.burger-menu').classList.add('burger-menu_active');
    document.body.style.overflow = 'hidden'

})
document.querySelector('.burger-close').addEventListener('click', () => {
    document.querySelector('.burger-menu').classList.remove('burger-menu_active');
    document.body.style.overflow = 'auto';
})
document.querySelectorAll('.burger-menu a').forEach(el => {
    el.addEventListener('click', () => {
        document.querySelector('.burger-menu').classList.remove('burger-menu_active');
        document.body.style.overflow = 'auto';
    })
});
console.log(document.querySelector('.burger-menu'));