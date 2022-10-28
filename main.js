
// change navbar styles on scrollling

window.addEventListener('scroll', () =>{
    document.querySelector('nav').classList.toggle
    ('window-scroll', window.scrollY>0)
})



// show/hide faq answer

const faqs = document.querySelectorAll('.faq');

faqs.forEach(faq =>{
    faq.addEventListener('click', () =>{
        faq.classList.toggle('open');


        //faq icon change

        const icon = faq.querySelector('.faq__icon i');
        if(icon.className === 'uil uil-question-circle'){
            icon.className = "uil uil-angle-up"
        }else{
            icon.className = 'uil uil-question-circle';
        }
    })
})

