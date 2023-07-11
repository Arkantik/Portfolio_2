export default function Contact() {
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
      <div className="mx-auto px-4 py-8 md:w-2/3 lg:py-16">
        <form className="space-y-8">
          <div>
            <label for="fullname" className="text-sm text-light">
              Your Fullname
            </label>
            <input
              type="name"
              id="name"
              className="w-full rounded-lg border border-gray-700 bg-dark p-2.5 text-sm text-gray-900 outline-none focus:border-primary"
              placeholder="Name and surname"
              required
            />
          </div>
          <div>
            <label for="email" className="text-sm text-light">
              Your email
            </label>
            <input
              type="email"
              id="email"
              className="w-full rounded-lg border border-gray-700 bg-dark p-2.5 text-sm text-gray-900 outline-none focus:border-primary"
              placeholder="your@email.com"
              required
            />
          </div>
          <div className="sm:col-span-2">
            <label for="message" className="text-sm text-light">
              Your message
            </label>
            <textarea
              id="message"
              rows="6"
              className="w-full rounded-lg border border-gray-700 bg-dark p-2.5 text-sm text-gray-900 outline-none focus:border-primary"
              placeholder="Leave your message here..."
              required
            ></textarea>
          </div>
          <button
            type="submit"
            className="rounded-lg border border-primary bg-transparent px-5 py-3 text-light hover:bg-primary"
          >
            Send message
          </button>
        </form>
      </div>
    </section>
  );
}
