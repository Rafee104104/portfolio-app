"use client";

import { useEffect, useMemo, useState } from "react";

export const useTypewriter = (
  values: string[],
  speed = 72,
  pauseDuration = 1300,
  deleteSpeed = 34,
) => {
  const phrases = useMemo(() => values.filter(Boolean), [values]);
  const [phraseIndex, setPhraseIndex] = useState(0);
  const [displayText, setDisplayText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    if (phrases.length === 0) {
      return;
    }

    const currentPhrase = phrases[phraseIndex % phrases.length];
    const isComplete = displayText === currentPhrase;
    const isEmpty = displayText.length === 0;
    const delay = isComplete && !isDeleting ? pauseDuration : isDeleting ? deleteSpeed : speed;

    const timeoutId = window.setTimeout(() => {
      if (isComplete && !isDeleting) {
        setIsDeleting(true);
        return;
      }

      if (isDeleting && isEmpty) {
        setIsDeleting(false);
        setPhraseIndex((current) => (current + 1) % phrases.length);
        return;
      }

      const nextLength = displayText.length + (isDeleting ? -1 : 1);
      setDisplayText(currentPhrase.slice(0, nextLength));
    }, delay);

    return () => window.clearTimeout(timeoutId);
  }, [deleteSpeed, displayText, isDeleting, pauseDuration, phraseIndex, phrases, speed]);

  return {
    displayText,
    isTyping: phrases.length > 0,
  };
};
