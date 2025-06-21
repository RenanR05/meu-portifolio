import { useEffect, useState } from 'react';

interface TypingEffectProps {
  words: string[];
}

const TypingEffect: React.FC<TypingEffectProps> = ({ words }) => {
  const [text, setText] = useState('');
  const [wordIndex, setWordIndex] = useState(0);
  const [charIndex, setCharIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const currentWord = words[wordIndex];

    const typingSpeed = isDeleting ? 50 : 120; 
    const delayBeforeDeleting = 1500; 

    const timeout = setTimeout(() => {
      if (!isDeleting) {
        setText(currentWord.substring(0, charIndex + 1));
        setCharIndex(charIndex + 1);

        if (charIndex + 1 === currentWord.length) {
          setTimeout(() => setIsDeleting(true), delayBeforeDeleting);
        }
      } else {
        setText(currentWord.substring(0, charIndex - 1));
        setCharIndex(charIndex - 1);

        if (charIndex - 1 === 0) {
          setIsDeleting(false);
          setWordIndex((prevIndex) => (prevIndex + 1) % words.length);
        }
      }
    }, typingSpeed);

    return () => clearTimeout(timeout);
  }, [charIndex, isDeleting, wordIndex, words]);

  return <span className="typing-effect">{text}</span>;
};

export default TypingEffect;
