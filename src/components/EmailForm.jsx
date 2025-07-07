import { useState } from "react";

const EmailForm = ({ setIsSuccess, setEmail }) => {
  const [inputValue, setInputValue] = useState("");
  const [error, setError] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    const isValid = emailRegex.test(inputValue);

  if (!isValid) {
      setError(true);
    } else {
      setError(false);
      setEmail(inputValue);
      setIsSuccess(true);
    }
  };

  return (
    <form onSubmit={handleSubmit} noValidate className="flex flex-col space-y-2">
      <div className="flex justify-between items-center">
        <label htmlFor="email" className="text-sm font-semibold text-blue-800">
          Email address
        </label>
        {error && (
          <span className="text-sm text-primary font-semibold">
            Valid email required
          </span>
        )}
      </div>

      <input
        type="text" // important: NOT "email"
        id="email"
        value={inputValue}
        onChange={(e) => setInputValue(e.target.value)}
        placeholder="email@company.com"
        className={`w-full p-4 border rounded-md focus:outline-none ${
          error
            ? "border-primary bg-red-50 text-primary placeholder:text-primary"
            : "border-gray focus:ring-2 focus:ring-blue-800 focus:border-blue-800"
        }`}
      />

      <button
        type="submit"
        className="w-full py-4 bg-blue-800 hover:bg-gradient-to-r from-primary to-orange-400 text-white font-semibold rounded-md shadow-md hover:shadow-black hover:opacity-90 active:scale-[0.98] hover:transition-all"
      >
        Subscribe to monthly newsletter
      </button>
    </form>
  );
};

export default EmailForm;
