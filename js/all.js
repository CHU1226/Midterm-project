let phoneScreen = document.querySelector('.phone-screen > div');
function phoneMove(){
    let phoneBlock = document.querySelector('.phone-block');
    let phoneCircle = document.querySelectorAll('.ph-circle');
    let phone = document.getElementById('phone')

    if(window.scrollY > 500 && window.scrollY < 1400){
        phoneBlock.classList.add('slide');
        phoneCircle.forEach(e => e.style.background = `transparent`);
        phone.style.transform = `rotate(0)`;
        phoneScreen.style.transform = `translateX(-100%)`

    }else if(window.scrollY > 1400 && window.scrollY < 2300){
        phone.style.transform = `rotate(15deg)`;
        phoneScreen.style.transform = `translateX(-200%)`
    }else{ 
        phoneBlock.classList.remove('slide');
        phoneCircle.forEach(e => e.style.background = `var(--light-blue)`);
        phone.style.transform = `rotate(0)`;
        phoneScreen.style.transform = `translateX(0)`
    }
}
window.addEventListener('scroll', phoneMove)