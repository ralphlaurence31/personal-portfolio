import React, { useRef } from 'react';
import "aos/dist/aos.css";

function Contact() {
  const firstNameRef = useRef();
  const lastNameRef = useRef();
  const emailRef = useRef();
  const subjectRef = useRef();
  const messageRef = useRef();


  const sendEmail = (e) => {
    e.preventDefault(); // Prevent the default form submission

    // Validate that all fields are filled
    if (
      !firstNameRef.current.value ||
      !lastNameRef.current.value ||
      !emailRef.current.value ||
      !subjectRef.current.value ||
      !messageRef.current.value
    ) {
      Swal.fire({
        title: "Error!",
        text: "Please fill in all fields.",
        icon: "error"
      });
      return; // Stop the function execution if validation fails
    }

    const bodyMessage = `Full Name: ${firstNameRef.current.value} ${lastNameRef.current.value} <br> Email: ${emailRef.current.value} <br> Message: ${messageRef.current.value}`;
    
    Email.send({
      Host: "smtp.elasticemail.com",
      Username: "ralphlaurencerazonable@gmail.com",
      Password: "FDF49797F8E77211DC35C6A02700D12BF296",
      To: 'ralphlaurencerazonable@gmail.com',
      From: "ralphlaurencerazonable@gmail.com",
      Subject: subjectRef.current.value,
      Body: bodyMessage
    })
    .then((message) => {
      if (message == "OK"){
        Swal.fire({
          title: "Success!",
          text: "Message sent successfully!",
          icon: "success"
        });
      }
      // Clear input fields
      firstNameRef.current.value = '';
      lastNameRef.current.value = '';
      emailRef.current.value = '';
      subjectRef.current.value = '';
      messageRef.current.value = '';
    })
    .catch((error) => console.error("Error sending email:", error));
  };
  
  return (
    <div className='contact bg-white px-6 py-24 sm:py-32 lg:px-8 flex items-center justify-center'id='contact'>

      <div data-aos="fade-up" className="contact-me">

        <div className='contact-text'>
            <p className='text-3xl text-center'>Contact</p>

            <p className='text-lr text-center font-light mt-3'>If you want to know more about me, please contact me below.</p>
        </div>

        <form onSubmit={sendEmail} action='#' className='mt-5 bg-blue-200 rounded-md p-5 w-auto'>
          <div className="first-name">

            <label htmlFor="first-name" className='block text-sm font-semibold leading-6 text-gray-900'>First Name</label>
            <div class="mt-2.5">
              <input type="text" ref={firstNameRef} name='first-name' id='first-name' autoComplete='given-name' className='block w-full rounded-md border-0 py-1.5 pl-7 pr-7 text-gray-900 font-light shadow-sm ring-1 ring-inset ring-gray-800 placeholder:text-gray-400' placeholder='First Name'/>
            </div>
          </div>

          <div className="last-name mt-2.5">

            <label htmlFor="last-name" className='block text-sm font-semibold leading-6 text-gray-900'>Last Name</label>
            <div class="mt-2.5">
              <input type="text" ref={lastNameRef} name='last-name' id='last-name' autoComplete='family-name' className='block w-full rounded-md border-0 py-1.5 pl-7 pr-7 text-gray-900 font-light shadow-sm ring-1 ring-inset ring-gray-800 placeholder:text-gray-400' placeholder='Last Name'/>
            </div>
          </div>

          <div class="sm:col-span-2 mt-2.5">
            <label for="email" class="block text-sm font-semibold leading-6 text-gray-900">Email</label>
            <div class="mt-2.5">
              <input type="email" ref={emailRef} name="email" id="email" autocomplete="email" class='block w-full rounded-md border-0 py-1.5 pl-7 pr-7 text-gray-900 font-light shadow-sm ring-1 ring-inset ring-gray-800 placeholder:text-gray-400' placeholder='Email Adress'/>
            </div>
          </div>

          <div className="last-name mt-2.5">

            <label htmlFor="subject" className='block text-sm font-semibold leading-6 text-gray-900'>Subject</label>
            <div class="mt-2.5">
              <input type="text" ref={subjectRef} name='subject' id='subject' autoComplete='subject' className='block w-full rounded-md border-0 py-1.5 pl-7 pr-7 text-gray-900 font-light shadow-sm ring-1 ring-inset ring-gray-800 placeholder:text-gray-400' placeholder='Enter Subject'/>
            </div>
          </div>

          <div class="sm:col-span-2 mt-2.5">
            <label for="message" class="block text-sm font-semibold leading-6 text-gray-900">Message</label>
            <div class="mt-2.5">
              <textarea name="message" ref={messageRef} id="message" rows="4" class="block w-full rounded-md border-0 py-1.5 pl-7 pr-7 text-gray-900 font-light shadow-sm ring-1 ring-inset ring-gray-800 placeholder:text-gray-400" placeholder='Your message'></textarea>
            </div>
          </div>

          <div className="mt-2.5 flex justify-center items-center">
            <button type='submit' className='btn text-white bg-green-700 hover:bg-green-800 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-green-600 dark:hover:bg-green-700 flex items-center gap-1'>
              Send Message
            </button>
          </div>

        </form>



      </div>
      
    </div>
    
  )
}



export default Contact
