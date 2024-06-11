import React, { useState, useEffect } from "react";
import FrontSideCard from "./FrontSideCard";
import BackSideCard from "./BackSideCard";
import backgroundMusic from "./assets/audio/background-music.mp3";
import Swal from "sweetalert2";

const Card = () => {
  const [isFlipped, setIsFlipped] = useState(false);
  const [language, setLanguage] = useState("english");
  const [audioError, setAudioError] = useState(false);

  const handleFlip = () => {
    setIsFlipped(!isFlipped);
  };

  const handleLanguageSwitch = () => {
    setLanguage(language === "english" ? "bengali" : "english");
  };

  useEffect(() => {
    const audio = new Audio(backgroundMusic);
    audio.play()
      .then(() => {

      })
      .catch((error) => {
        setAudioError(true);
      });
    return () => {
      audio.pause();
      audio.src = "";
      audio.load();
    };
  }, []);

  useEffect(() => {
    Swal.fire({
      icon: "info",
      title: "You are invited!",
      text: "Devamalya Annaprashan Ceremony on 23 Ashar, 1431 (Bengali), Monday, Noon",
    });
  }, []);

  return (
    <div className="flex flex-col items-center justify-center h-screen">
      {isFlipped ? <BackSideCard language={language} /> : <FrontSideCard language={language} />}
      <div className="mt-4 flex justify-center">
        <button
          onClick={handleFlip}
          className="py-2 px-6 bg-pink-600 text-white font-semibold rounded-lg shadow-md hover:bg-pink-700 mr-4"
        >
          {isFlipped ? "Show Front" : "Show Back"}
        </button>
        <button
          onClick={handleLanguageSwitch}
          className="py-2 px-6 bg-blue-600 text-white font-semibold rounded-lg shadow-md hover:bg-blue-700"
        >
          {language === "english" ? "বাংলা" : "English"}
        </button>
      </div>
    </div>
  );
};

export default Card;
