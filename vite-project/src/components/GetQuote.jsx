import React, { useState } from "react";
import GetQuoteForm from "./GetQuoteForm";

function GetQuote() {
  const [isSubmitted, setSubmitted] = useState(false);
  const form = <GetQuoteForm setSubmitted={setSubmitted} />;
  const submittedPrompt = (
    <div className="popup min-w-[400px] mx-auto flex flex-col items-center justify-center bg-green-100 text-green-800 p-6 rounded-md shadow-lg">
      <h2 className="text-2xl font-bold mb-4">Quote Request Received</h2>
      <p className="text-center">
        Thank you for reaching out! We’ve received your request and will get
        back to you shortly to discuss the details.
      </p>
    </div>
  );
  return (
    <div className="max-w-xl min-h-[500px] mx-auto p-6 flex flex-wrap justify-center items-center bg-white rounded-lg mt-20">
      {!isSubmitted && (
        <h2 className="text-2xl font-bold mb-6 text-gray-800">Get a Quote</h2>
      )}
      {isSubmitted ? submittedPrompt : form}
    </div>
  );
}

export default GetQuote;
