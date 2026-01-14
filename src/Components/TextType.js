import React, { useEffect, useState } from "react";

const TextType = (props) => {
  const {
    text = [],
    typingSpeed = 75,
    pauseDuration = 1500,
    showCursor = true,
    cursorCharacter = "|"
  } = props;

  const [displayText, setDisplayText] = useState("");
  const [textIndex, setTextIndex] = useState(0);
  const [charIndex, setCharIndex] = useState(0);

  useEffect(() => {
    const currentText = text[textIndex];
    let timeout;

    if (charIndex <= currentText.length) {
      timeout = setTimeout(() => {
        setDisplayText(currentText.slice(0, charIndex));
        setCharIndex(charIndex + 1);
      }, typingSpeed);
    } else {
      timeout = setTimeout(() => {
        setCharIndex(0);
        setTextIndex((prev) => (prev + 1) % text.length);
      }, pauseDuration);
    }

    return () => clearTimeout(timeout);
  }, [charIndex, textIndex, text, typingSpeed, pauseDuration]);

  return React.createElement(
    "span",
    null,
    displayText,
    showCursor
      ? React.createElement("span", null, cursorCharacter)
      : null
  );
};

export default TextType;
