import { useRef } from "react";
import { ToastContainer, toast } from "react-toastify";
import emailjs from "@emailjs/browser";

import "react-toastify/dist/ReactToastify.css";

export default function Contact() {
  const form = useRef(null);

  const notify = () => {
    toast.success("Success, your message was sent!", {
      position: "bottom-right",
      autoClose: 3000,
      hideProgressBar: true,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: false,
      progress: undefined,
      theme: "dark",
    });
  };

  const sendEmail = (e) => {
    e.preventDefault();

    const name = e.target.name.value.trim();
    const email = e.target.user_email.value.trim();
    const message = e.target.message.value.trim();

    if (!name || !email || !message) {
      toast.error("Please fill in all required fields", {
        position: "bottom-right",
        autoClose: 3000,
        hideProgressBar: true,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: false,
        progress: undefined,
        theme: "dark",
      });
      return;
    }

    emailjs
      .sendForm(
        "service_lwojhle",
        "template_1kgkty5",
        e.target,
        "AsJ3rbV5H9oTVu7ox"
      )
      .then(
        (result) => {
          console.info(result.text);
          notify("success");
          form.current.reset();
        },
        (error) => {
          console.error(error.text);
          notify("error", "Oops, something went wrong!");
        }
      );
  };

  return (
    <section
      className="flex h-screen flex-col justify-center gap-16 font-alt"
      id="contact"
    >
      <div>
        <h2 className="font-main text-xl uppercase text-primary">
          Let's get in touch!
        </h2>
      </div>
      <div className="mx-auto text-sm md:w-2/3">
        <form className="space-y-8" ref={form} onSubmit={sendEmail}>
          <div>
            <label htmlFor="fullname" className="text-light">
              Your Fullname
            </label>
            <input
              className="w-full rounded-lg border border-gray-700 bg-dark p-2.5 text-light outline-none focus:border-primary"
              type="text"
              placeholder="Name and surname"
              id="fullname"
              name="name"
              autoComplete="true"
            />
          </div>
          <div>
            <label htmlFor="email" className="text-light">
              Your email
            </label>
            <input
              className="w-full rounded-lg border border-gray-700 bg-dark p-2.5 text-light outline-none focus:border-primary"
              type="email"
              placeholder="email@example.com"
              id="email"
              name="user_email"
              pattern="^([a-zA-Z0-9_\-\.]+)@([a-zA-Z0-9_\-\.]+)\.([a-zA-Z]{2,5})$"
              title="email@example.com"
              autoComplete="true"
            />
          </div>
          <div>
            <label htmlFor="message" className="text-light">
              Your message
            </label>
            <textarea
              className="w-full rounded-lg border border-gray-700 bg-dark p-2.5 text-light outline-none focus:border-primary"
              placeholder="Leave your message here..."
              rows="6"
              id="message"
              name="message"
            />
          </div>
          <button
            type="submit"
            className="rounded-lg border border-primary bg-transparent px-5 py-3 text-light hover:bg-primary"
          >
            Send message
          </button>
        </form>
        <ToastContainer />
      </div>
    </section>
  );
}
