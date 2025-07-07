const SuccessCard = ({ email, onDismiss }) => {
    return (
        <div className="bg-white flex flex-col min-h-full justify-center md:max-w-md md:rounded-2xl  p-6 md:p-10">
            <div className="flex flex-col gap-6 mt-40 md:mt-0">
            <img src="/assets/images/icon-success.svg" alt="Success" className="w-12 mt-100" />
            <h1 className="text-4xl md:text-5xl font-extrabold text-blue-700 leading-tight">
                Thanks for subscribing!
            </h1>
            <p className="text-blue-800 font-bold text-sm">
                A confirmation email has been sent to <strong>{email}</strong>. Please
                open it and click the button inside to confirm your subscription.
            </p>
        </div>
    
        <div className="mt-auto md:mt-5">
            <button
            onClick={onDismiss}
            className="w-full py-4 bg-blue-800 hover:bg-gradient-to-r from-primary to-orange-400 text-white font-semibold rounded-md shadow-md hover:shadow-black hover:opacity-90 active:scale-[0.98] hover:transition-all"
            >
            Dismiss message
            </button>
        </div>
    </div>
    );
};

export default SuccessCard;
