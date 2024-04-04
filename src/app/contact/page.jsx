import React from 'react'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'

const page = () => {
  return (
    <>
      <Navbar />
      <h1 className='font-montserrat text-5xl font-semibold flex justify-center items-center mt-16 mb-16'>Contact Us</h1>

      <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3619.7521516961883!2d67.05454477532896!3d24.872313244783342!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3eb33f171277b2e7%3A0xd279dda1f08cd42!2sExpoBird%20Digital%20Marketing%20Agency%20%7C%20Social%20Media%20Marketing%20%7C%20Professional%20SEO%20Services%20Pakistan!5e0!3m2!1sen!2s!4v1708174580698!5m2!1sen!2s" width="100%" height="450" style={{ border: 0 }} allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>


      <h1 className='font-montserrat text-5xl font-semibold flex justify-center items-center mt-20 mb-16'>Feel Free To Contact Us</h1>
      <div class="flex items-center justify-center p-12 mt-[100px] mb-[100px] shadow-2xl font-montserrat">
        <div class="mx-auto w-full max-w-[600px]">
          <form action="https://formbold.com/s/FORM_ID" method="POST">
            <div class="mb-5">
              <label
                for="name"
                class="mb-4 block text-xl font-bold text-black"
              >
                Full Name
              </label>
              <input
                type="text"
                name="name"
                id="name"
                placeholder="Full Name"
                class="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-black outline-none focus:newColor focus:shadow-md"
              />
            </div>
            <div class="mb-5">
              <label
                for="email"
                class="mb-4 block text-xl font-bold text-black"
              >
                Email Address
              </label>
              <input
                type="email"
                name="email"
                id="email"
                placeholder="example@domain.com"
                class="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-black outline-none focus:border-[#6A64F1] focus:shadow-md"
              />
            </div>
            <div class="mb-5">
              <label
                for="subject"
                class="mb-4 block text-xl font-bold text-black"
              >
                Subject
              </label>
              <input
                type="text"
                name="subject"
                id="subject"
                placeholder="Enter your subject"
                class="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-black outline-none focus:border-[#6A64F1] focus:shadow-md"
              />
            </div>
            <div class="mb-5">
              <label
                for="message"
                class="mb-4 block text-xl font-bold text-black"
              >
                Message
              </label>
              <textarea
                rows="4"
                name="message"
                id="message"
                placeholder="Type your message"
                class="w-full resize-none rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-black outline-none focus:border-[#6A64F1] focus:shadow-md"
              ></textarea>
            </div>
            <div>
              <button
                class="hover:shadow-form rounded-md newColor py-4 px-9 font-semibold text-white text-xl outline-none"
              >
                Submit
              </button>
            </div>
          </form>
        </div>
      </div>

      <section class="dark:bg-[#141415] font-montserrat shadow-lg" id="contact">
        <div class="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8 lg:py-20">
          <div class="mb-4">
            <div class="mb-6 max-w-3xl text-center sm:text-center md:mx-auto md:mb-12">
              <h2
                class="font-heading mb-4 font-bold tracking-tight text-white text-4xl sm:text-5xl">
                Get in Touch
              </h2>
            </div>
          </div>
          <div class="flex items-stretch justify-center">
            <div class="grid md:grid-cols-2">
              <div class="h-full pr-6">
                <p class="mt-3 mb-12 text-lg text-white">
                  We turn your ideas into numbers. Expo Digital helps you grow your Websites & Web Applications with a proven record of successful case studies.
                </p>
                <ul class="mb-6 md:mb-0">
                  <li class="flex">
                    <div class="flex h-10 w-10 items-center justify-center rounded newColor text-white">
                      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"
                        fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"
                        stroke-linejoin="round" class="h-6 w-6">
                        <path d="M9 11a3 3 0 1 0 6 0a3 3 0 0 0 -6 0"></path>
                        <path
                          d="M17.657 16.657l-4.243 4.243a2 2 0 0 1 -2.827 0l-4.244 -4.243a8 8 0 1 1 11.314 0z">
                        </path>
                      </svg>
                    </div>
                    <div class="ml-4 mb-4">
                      <h3 class="mb-2 text-xl font-bold leading-6 text-white">Our Address
                      </h3>
                      <p class="text-white">1230 Maecenas Street Donec Road</p>
                      <p class="text-white">New York, EEUU</p>
                    </div>
                  </li>
                  <li class="flex">
                    <div class="flex h-10 w-10 items-center justify-center rounded newColor text-white">
                      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"
                        fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"
                        stroke-linejoin="round" class="h-6 w-6">
                        <path
                          d="M5 4h4l2 5l-2.5 1.5a11 11 0 0 0 5 5l1.5 -2.5l5 2v4a2 2 0 0 1 -2 2a16 16 0 0 1 -15 -15a2 2 0 0 1 2 -2">
                        </path>
                        <path d="M15 7a2 2 0 0 1 2 2"></path>
                        <path d="M15 3a6 6 0 0 1 6 6"></path>
                      </svg>
                    </div>
                    <div class="ml-4 mb-4">
                      <h3 class="mb-2 text-xl font-bold leading-6 text-white">Contact
                      </h3>
                      <p class="text-white">Mobile: +1 (123) 456-7890</p>
                      <p class="text-white">Mail: tailnext@gmail.com</p>
                    </div>
                  </li>
                  <li class="flex">
                    <div class="flex h-10 w-10 items-center justify-center rounded newColor text-gray-50">
                      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"
                        fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"
                        stroke-linejoin="round" class="h-6 w-6">
                        <path d="M3 12a9 9 0 1 0 18 0a9 9 0 0 0 -18 0"></path>
                        <path d="M12 7v5l3 3"></path>
                      </svg>
                    </div>
                    <div class="ml-4 mb-4">
                      <h3 class="mb-2 text-xl font-bold leading-6 text-white">Working
                        hours</h3>
                      <p class="text-white">Monday - Friday: 08:00 - 17:00</p>
                      <p class="text-white">Saturday &amp; Sunday: 08:00 - 12:00</p>
                    </div>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </>
  )
}

export default page