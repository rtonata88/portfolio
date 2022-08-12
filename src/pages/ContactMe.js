import react, { useState } from 'react';
import { useForm, ValidationError } from '@formspree/react';

const ContactMe = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [state, handleSubmit] = useForm('xnqlyrdg');

  return (
    <section
      id="contact-me"
      className="relative overflow-hidden bg-slate-50 pb-20 lg:pb-24 xl:pb-32 h-full">
      <div className="mx-auto max-w-7xl px-4 sm:mt-12 sm:px-6 md:mt-16 lg:mt-20 lg:px-8 xl:mt-28">
        <div className="sm:text-center mb-10">
          <h1 className="text-2xl tracking-tight font-extrabold text-white sm:text-5xl md:text-4xl">
            <span className="block xl:inline text-black">
              Get in{' '}
              <span className="block text-orange-600 xl:inline">
                Touch<span className="text-black">.</span>
              </span>
            </span>
          </h1>
        </div>
        <div className="flex justify-center flex-column flex-wrap">
          <form
            className="flex w-full max-w-sm space-x-3"
            action="https://formspree.io/f/xnqlyrdg"
            onSubmit={handleSubmit}>
            <div className="w-full max-w-2xl px-5 py-10 m-auto mt-10 bg-white rounded-lg shadow dark:bg-gray-800">
              <div className="grid max-w-xl grid-cols-2 gap-4 m-auto">
                <div className="col-span-2 lg:col-span-2">
                  <div className=" relative ">
                    {state.succeeded ? (
                      <p className="text-green-600 p-2">
                        Thank you for getting in touch. I will get back to you
                        as soon as I can.
                      </p>
                    ) : (
                      ''
                    )}
                    <input
                      type="text"
                      id="contact-form-name"
                      className=" rounded-lg border-transparent flex-1 appearance-none border border-gray-300 w-full py-2 px-4 bg-white text-gray-700 placeholder-gray-400 shadow-sm text-base focus:outline-none focus:ring-2 focus:ring-orange-600 focus:border-transparent"
                      placeholder="Your name"
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                    />
                  </div>
                </div>
                <div className="col-span-2 lg:col-span-2">
                  <div className=" relative ">
                    <input
                      type="text"
                      id="contact-form-email"
                      className=" rounded-lg border-transparent flex-1 appearance-none border border-gray-300 w-full py-2 px-4 bg-white text-gray-700 placeholder-gray-400 shadow-sm text-base focus:outline-none focus:ring-2 focus:ring-orange-600 focus:border-transparent"
                      placeholder="Your email address"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                    />
                    <ValidationError
                      prefix="Email"
                      field="email"
                      errors={state.errors}
                    />
                  </div>
                </div>
                <div className="col-span-2">
                  <label className="text-gray-700" for="name">
                    <textarea
                      className="flex-1 appearance-none border border-gray-300 w-full py-2 px-4 bg-white text-gray-700 placeholder-gray-400 rounded-lg text-base focus:outline-none focus:ring-2 focus:ring-orange-600 focus:border-transparent"
                      id="comment"
                      placeholder="Write your message here"
                      name="comment"
                      rows="5"
                      cols="40"
                      value={message}
                      onChange={(e) => setMessage(e.target.value)}></textarea>
                    <ValidationError
                      prefix="Message"
                      field="message"
                      errors={state.errors}
                    />
                  </label>
                </div>
                <div className="col-span-2 text-right">
                  <button
                    type="submit"
                    disabled={state.submitting}
                    className="py-2 px-4  bg-orange-600 hover:bg-orange-700 focus:ring-orange-500 focus:ring-offset-orange-200 text-white w-full transition ease-in duration-200 text-center text-base font-semibold shadow-md focus:outline-none focus:ring-2 focus:ring-offset-2  rounded-lg ">
                    Send
                  </button>
                </div>
              </div>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
};

export default ContactMe;
