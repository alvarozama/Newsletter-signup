const form = document.getElementById("form");
const errorMessage = document.getElementById('error-message');
const emailInput = document.getElementById('email');

const handleSubmit = (e) => {
    e.preventDefault(e);
  
    const formData = new FormData(e.target);
    const data = Object.fromEntries(formData);
  
    console.log(data);

    for (const [key, value] of Object.entries(data)) {    
        console.log(`Key: ${key}, Value: ${value}`);
        const validEmail = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/g;
        if (email.value.match(validEmail)) {
            emailInput.style = '';
            errorMessage.innerHTML = ''; // HACER QUE HAGA ALGO CUANDO ESTÉ BIEN
        } else if (email.value === '' || !validEmail.test(email)) {
            errorStyle();
        }; 
    };
};


form.addEventListener("submit", handleSubmit);

function errorStyle() {
    errorMessage.innerHTML = 'Valid email required';
    emailInput.style.color = 'var(--clr-tomato)';
    emailInput.style.border = 'solid var(--clr-tomato) thin';
    emailInput.style.backgroundColor = "var(--clr-lightomato)";
}

function desktopSuccess() {
    
}