import { useEffect, useState } from "react";

// adapted from https://codepen.io/alvarotrigo/pen/ZEJgqLN

export function useTypingText(wordlist: string[]) {
  const [text, setText] = useState("");

  useEffect(() => {
    let i = 0,
      offset = 0,
      forwards = true,
      skip_count = 0,
      skip_delay = 15,
      speed = 70,
      len = wordlist.length;

    const interval = setInterval(function () {
      if (forwards) {
        if (offset >= wordlist[i].length) {
          ++skip_count;
          if (skip_count == skip_delay) {
            forwards = false;
            skip_count = 0;
          }
        }
      } else {
        if (offset == 0) {
          forwards = true;
          i++;
          offset = 0;
          if (i >= len) {
            i = 0;
          }
        }
      }
      const part = wordlist[i].slice(0, offset);
      if (skip_count == 0) {
        if (forwards) {
          offset++;
        } else {
          offset--;
        }
      }

      setText(part);
    }, speed);
    return () => {
      clearInterval(interval);
    };
  }, [wordlist]);

  return text;
}
