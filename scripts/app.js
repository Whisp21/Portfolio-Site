const footerText = document.getElementById('footer').querySelector('p');

const form = document.getElementById('contact-form');

const year = new Date().getFullYear();

footerText.textContent = `Copyright ${year} Amy Venter`;

const init = () => {
  emailjs.init("user_ZKCHOKdQUy7QqYAcwB6hb");
}

window.onload = () => {
            form.addEventListener('submit', (event) => {
                event.preventDefault();

                form.contact_number.value = Math.random() * 100000 | 0;

                if(form.from_name.value == 0 || form.from_email.value == 0 || form.message.value == 0) {
                  document.querySelector('.form-message').style.display='block';
                } else {
                  emailjs.sendForm('service_z0sko2r', 'contact_form', form)
                    .then(() => {
                        console.log('SUCCESS!');
                        form.reset();
                        swal('Thank you for contacting me!', 'I will get back as soon as I can.');
                        document.querySelector('.form-message').style.display='none';
                      }, (error) => {
                          console.log('FAILED...', error);
                          swal('Something went wrong', 'Please try again');
                      });
                }
            });
        }

init();
