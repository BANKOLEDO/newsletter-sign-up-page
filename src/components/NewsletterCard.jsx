import EmailForm from './EmailForm'

const NewsletterCard = ({ setIsSuccess, setEmail }) => {
  return (
    <div className="bg-white flex flex-col md:flex-row w-full ">
      {/* IMAGE SECTION (mobile first) */}
      <div className="w-full md:w-1/2 order-1 md:order-2">
        {/* Mobile image */}
        <img
          src="/assets/images/illustration-sign-up-mobile.svg"
          alt="Signup Illustration Mobile"
          className="w-full h-full object-cover md:hidden"
        />

        {/* Desktop image */}
        <img
          src="/assets/images/illustration-sign-up-desktop.svg"
          alt="Signup Illustration Desktop"
          className="w-full h-full object-cover hidden md:block md:rounded-r-2xl"
        />
      </div>

      {/* TEXT/FORM SECTION */}
      <div className="w-full md:w-1/2 md:self-center p-6 order-2 md:order-1">
        <h1 className="text-3xl font-bold text-blue-800 mb-4">Stay updated!</h1>
        <p className="text-gray mb-4">
          Join 60,000+ product managers receiving monthly updates on:
        </p>

        <ul className="space-y-2 mb-6">
          <li className="flex items-start gap-2">
            <img src="/assets/images/icon-list.svg" alt="check" />
            <span>Product discovery and building what matters</span>
          </li>
          <li className="flex items-start gap-2">
            <img src="/assets/images/icon-list.svg" alt="check" />
            <span>Measuring to ensure updates are a success</span>
          </li>
          <li className="flex items-start gap-2">
            <img src="/assets/images/icon-list.svg" alt="check" />
            <span>And much more!</span>
          </li>
        </ul>

        <EmailForm setIsSuccess={setIsSuccess} setEmail={setEmail} />
      </div>
    </div>
  );
};

export default NewsletterCard;
