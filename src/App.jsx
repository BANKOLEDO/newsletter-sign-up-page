import './App.css'
import { useState } from "react";
import NewsletterCard from "./components/NewsletterCard";
import SuccessCard from "./components/SuccessCard";


function App() {
  const [isSuccess, setIsSuccess] = useState(false);
  const [email, setEmail] = useState("");
  return (
    <div className="min-h-screen bg-white md:bg-blue-800 flex md:items-center md:justify-center md:p-7">
        {isSuccess ? 
        (<div className="w-full bg-white md:max-w-[500px] md: md:max-h-[500px] md:rounded-2xl md:shadow-xl md:overflow-hidden md:p-5">
        
          <SuccessCard email={email} onDismiss={() => setIsSuccess(false)} /> 
        </div>
        )
        :
        ( <div className="w-full bg-white md:max-w-[800px] md: min-h-[500px] md:rounded-2xl md:shadow-xl md:overflow-hidden md:p-5 ">
          <NewsletterCard setIsSuccess={setIsSuccess} setEmail={setEmail} />
      </div> )
}
    </div>
  );
}

export default App;

