import React, { useState, useEffect } from "react";

const BackSideCard = ({ language }) => {
  const [content, setContent] = useState(null);
  useEffect(() => {
    import(`./locales/${language}.json`)
      .then((data) => {
        console.log("Loaded content:", data);
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
    <div
      className="relative bg-pink-100 p-4 rounded-lg shadow-lg max-w-md mx-auto my-8"
      style={{
        backgroundImage: `url(${content.backgroundImage})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <div className="bg-white bg-opacity-75 p-4 rounded-lg">
        <div className="flex justify-between">
          <div className="text-left">
            <h3 className="text-lg font-semibold text-gray-800">
              {content.family}:
            </h3>
            <ul className="text-gray-600">
              {content.familyMembers.map((member, index) => (
                <li key={index}>{member}</li>
              ))}
            </ul>
          </div>
          <div className="text-right w-1/2 p-4">
            <div className="text-gray-800">
              <h3 className="text-sm font-semibold italic">{content.poem.title}</h3>
              <p className="mt-2 text-sm italic">
                {content.poem.lines.map((line, index) => (
                  <React.Fragment key={index}>
                    {line}
                    <br />
                  </React.Fragment>
                ))}
              </p>
            </div>
          </div>
        </div>
        <div className="text-center mt-4">
          <h2 className="text-2xl font-bold text-pink-600 mt-2">
            {content.thankYouMessage}
          </h2>
          <p className="text-gray-600 mt-4">{content.gratitudeMessage}</p>
        </div>
        <div className="text-center mt-4">
          <h3 className="text-xl font-semibold text-gray-800">
            {content.withLove}
          </h3>
          <p className="text-gray-600 mt-2">{content.names}</p>
          <p className="text-gray-600 mt-2">{content.thankyou}</p>
        </div>
      </div>
    </div>
  );
};

export default BackSideCard;
