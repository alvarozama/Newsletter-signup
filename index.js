const form = document.getElementById("form");
const errorMessage = document.getElementById('error-message');
const emailInput = document.getElementById('email');
const mainContainer = document.getElementById('main-container');
const successContainer = document.getElementById('success');


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
            success();
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

function success() {
    successContainer.innerHTML = `
      <div class="success-photo">
        <img src="./assets/images/icon-success.svg" alt="#">
      </div>
      
      <h1>Thanks for subscribing!</h1>

      <p>A confirmation email has been sent to <b>${email.value}</b>. 
        Please open it and click the button inside to confirm your subscription.
      </p>

      <div class="dismiss-button" id="dismiss-button">Dismiss message</div>
    `
    mainContainer.style.display = 'none';
    successContainer.style.display = 'flex';

    const dismissBtn = document.getElementById('dismiss-button');
    function dismiss() {
        successContainer.style.display = 'none';
        mainContainer.style.display = 'flex';
    }
    
    dismissBtn.addEventListener('click', () => {
        dismiss();
    });
}
