import React from "react";

const Page = () => {
  const terms = {
    regularTerms: [
      "Payment must be done before proceeding to lineart and painting process.",
      "By purchasing, you agree that i can use the commissioned art as my portfolio (i still can't use it for commercial use)",
    ],
    accepting: [
      "Anthropomorphic Characters, Furries, Ferals",
      "Humans",
      "Casual outfits, swimsuits, undergarments",
      "Minimum nudity",
      "Simple backgrounds",
    ],
    notAccepting: [
      "Obscene fetishes, kinks",
      "Heavily political theme",
      "Nudity, or erotic/sexual theme",
      "Copyrighted characters (unless with proper permission)",
    ],
  };
  return (
    <div className="container px-20 py-5">
      <div className="container py-5 w-52">
        <a href="/commission">
          <div className="text-xl">back</div>
        </a>
      </div>
      <div className="p-5">
        <div className="text-3xl text-center">
          art by Cons&apos; commission terms and conditions
        </div>
        <div className="text-2xl">Terms</div>
        <div className="text-xl container">
          <ul className="list-decimal">
            {terms.regularTerms.map((item, index) => (
              <li key={index}>{item}</li>
            ))}
          </ul>
        </div>
      </div>
      <div className="p-5 hover:scale-105 transition hover:translate-x-10">
        <div className="text-2xl">What i accept</div>
        <div className="text-xl container">
          <ul className="list-decimal">
            {terms.accepting.map((item, index) => (
              <li key={index}>{item}</li>
            ))}
          </ul>
        </div>
      </div>
      <div className="p-5 hover:scale-105 transition hover:translate-x-10">
        <div className="text-2xl text-red-300">What i DO NOT accept</div>
        <div className="text-xl container">
          <ul className="list-decimal">
            {terms.notAccepting.map((item, index) => (
              <li key={index}>{item}</li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Page;
