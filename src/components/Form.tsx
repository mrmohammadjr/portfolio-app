import React,{useState,useEffect,useRef,use} from 'react';
import Swal from 'sweetalert2'
import {ThemeContext,ThemeProvider} from "../context/ThemeContext"
import emailjs from '@emailjs/browser';

const Form = () => {
  const { theme,toggleTheme } = use(ThemeContext)
  const form = useRef<HTMLFormElement>(null);
  const [isSubmitting, setIsSubmitting] = useState(false);

  // Email validation function
  const isValidEmail = (email: string) => {
    const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return re.test(email);
  };

  const sendEmail = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      if (!form.current) {
        throw new Error('Form reference not found');
      }

      // Get form data
      const formData = new FormData(form.current);
      const email = formData.get('user_email') as string;

      // Validate email
      if (!isValidEmail(email)) {
        throw new Error('Invalid email address');
      }

      // Send email
      const result = await emailjs.sendForm(
        'service_9shaqt9',
        'template_yl5xkfn',
        form.current,
        { publicKey: 'XYbdAzB-BYiOCAIbr' }
      );

      if (result.status === 200) {
        await Swal.fire("Your message has been sent successfully");
        form.current.reset(); // Reset form after successful submission
      } else {
        throw new Error('Failed to send email');
      }
    } catch (error) {
      console.error('Error:', error);
      await Swal.fire(error instanceof Error ? error.message : 'Failed to send message, please try again');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <form
      ref={form}
      onSubmit={sendEmail}
      className={`lg:w-[70%] lg:h-[33rem] mx-auto p-6 ${
        theme === "light" ? "bg-[#d1d1d1] text-black" : "bg-neutral-700 text-white"
      } rounded-xl shadow-md mt-5 frank gap-3 flex flex-col`}
    >
      <label className="block lg:text-2xl sm:text-sm font-medium my-2">Name</label>
      <input
        type="text"
        name="user_name"
        required
        className={`w-full px-3 py-2 border-2 ${
          theme === "light" ? "bg-[#f3f3f3] text-black border-black" : "bg-neutral-700 border-white text-white"
        } rounded-md outline-none`}
      />

      <label className="block lg:text-2xl sm:text-sm font-medium my-2">Email</label>
      <input
        type="email"
        name="user_email"
        required
        className={`w-full px-3 py-2 border-2 ${
          theme === "light" ? "bg-[#f3f3f3] text-black border-black" : "bg-neutral-700 border-white text-white"
        } rounded-md outline-none`}
      />

      <label className="block lg:text-2xl sm:text-sm font-medium my-2">Message</label>
      <textarea
        name="message"
        required
        className={`w-full h-32 px-3 py-2 border-2 ${
          theme === "light" ? "bg-[#f3f3f3] text-black border-black" : "bg-neutral-700 border-white text-white"
        } rounded-md outline-none`}
      />

      <button
        type="submit"
        disabled={isSubmitting}
        className={`w-full bg-black lg:text-2xl sm:text-sm text-white py-4 px-4 rounded-md hover:bg-white hover:text-black transition duration-200 focus:outline-none focus:ring-offset-2 ${
          isSubmitting ? 'opacity-50 cursor-not-allowed' : ''
        }`}
      >
        {isSubmitting ? 'Sending...' : 'Send'}
      </button>
    </form>
  );
};

export default Form;