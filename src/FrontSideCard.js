import React, { useState, useEffect } from "react";
import babyImage from "./Image/baby.png";
import cartoonCharacter1 from "./Image/character1.png";
import cartoonCharacter2 from "./Image/character2.png";
import cartoonCharacter3 from "./Image/character3.png";

const FrontSideCard = ({ language }) => {
  const [content, setContent] = useState(null);

  useEffect(() => {
    import(`./locales/${language}.json`)
      .then((data) => {
        setContent(data);
      })
      .catch((error) => {
        console.error("Error loading language file:", error);
      });
  }, [language]);

  if (!content) {
    return <p>Loading...</p>;
  }

  return (
    <div className="relative bg-pink-100 p-4 rounded-lg shadow-lg max-w-md mx-auto my-8">
      <div className="text-center">
        <h2 className="text-sm font-bold text-gray-700">{content.omShree}</h2>
        <h1 className="text-2xl font-bold text-pink-600 mt-2">{content.invitationTitle}</h1>
      </div>
      <div className="flex justify-center mt-4">
        <img
          src={babyImage}
          alt="Baby"
          className="w-32 h-32 rounded-full border-4 border-pink-300"
        />
      </div>
      <div className="text-center mt-4">
        <h3 className="text-lg font-semibold text-gray-800">{content.parentsNames}</h3>
        <p className="text-gray-600 mt-2">
          {content.invitationMessage}
        </p>
        <p className="text-pink-600 font-bold mt-2">
          {content.ceremonyTitle}
        </p>
        <h2 className="text-2xl font-bold text-pink-700 mt-2">{content.childName}</h2>
        <p className="text-gray-600 mt-2">
          {content.invitationDetail}
        </p>
      </div>
      <div className="text-center mt-4">
        <h3 className="text-xl font-semibold text-gray-800">{content.ceremonyHeading}</h3>
        <p className="text-gray-600 mt-2">{content.ceremonyDate}</p>
        <p className="text-gray-600 mt-2">
          {content.venue}
        </p>
        <p className="text-gray-600 mt-2">{content.thankyou}</p>
      </div>
      <div className="absolute left-4 top-0 mt-16 pl-4"> {/* Add padding to the left side */}
        <img
          src={cartoonCharacter3}
          alt="Cartoon Character 1"
          className="w-24 h-24"
        />
      </div>
      <div className="absolute right-0 top-0 mt-16 mr-4">
        <img
          src={cartoonCharacter2}
          alt="Cartoon Character 2"
          className="w-24 h-24"
        />
      </div>
      {/* <div className="absolute right-0 bottom-0 mb-16 mr-4">
        <img
          src={cartoonCharacter1}
          alt="Cartoon Character 3"
          className="w-24 h-24"
        />
      </div> */}
    </div>
  );
};

export default FrontSideCard;
