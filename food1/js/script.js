const futurs = document.getElementById('futurs');
const footer = document.getElementById('footer');

futurs.addEventListener('click',()=>{
    footer.classList.toggle("footers");
    futurs.classList.toggle("cliks");
})

const contact = document.getElementById('contact');
const conta = document.getElementById('conta');

contact.addEventListener('click',()=>{
    conta.classList.toggle("contacts");
    contact.classList.toggle("cliks");
    
})