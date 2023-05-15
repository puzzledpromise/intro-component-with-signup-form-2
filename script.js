const form = document.getElementById("form");

const firstname = form.querySelector("firstname")
const lastname = form.querySelector("lastname")
const email = form.querySelector("email")
const password = form.querySelector("password ")

form.addEventListener('submit', e=> {
    e.preventDefault()

    const firstname = form['firstname'].value;
    const lastname = form['lastname'].value;
    const email = form['email'].value;
    const password = form['password'].value


    if(firstname === ''){
        addErrorTo('firstname', 'First name is required');
    }else{
       removeErrorFrom('firstname');
    }

    if(lastname === ''){
        addErrorTo('lastname', 'Last name is required');
    }else{
        removeErrorFrom('lastname');
    }

    if(!validateEmail(email) || email === '' ){
        addErrorTo('email', 'Email is not valid');
    }else{
        removeErrorFrom('email');
    }

    if(password === ''){
        addErrorTo('password', 'Password is required');
    }else{
        removeErrorFrom('password');
    }
});

function addErrorTo(field, message){
    const formControl = form[field].parentNode
    formControl.classList.add('error')
    const small = form[field].parentNode.querySelector('small')
    small.innerText = message;
    small.style.opacity = 1;
}

function removeErrorFrom(field){
    const small = form[field].parentNode.querySelector('small')
    small.style.opacity = '0';
    const formControl = form[field].parentNode
    formControl.classList.remove('error')
}
const validateEmail = (email) => {
    return String(email)
        .toLowerCase()
        .match(
            /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|.(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
        );
};
