/*
[How to handle the Effect firing twice in development?](https://beta.reactjs.org/learn/synchronizing-with-effects#how-to-handle-the-effect-firing-twice-in-development)
https://stackoverflow.com/questions/72238175/why-useeffect-running-twice-and-how-to-handle-it-well-in-react */
import { useRef, useEffect } from "react";

const isDevelopmentRun =
  !process.env.NODE_ENV || process.env.NODE_ENV === "development";

const useEffectOnce = (cb, deps) => {
  const isMountedRef = useRef(!isDevelopmentRun);

  useEffect(() => {
    if (!isMountedRef.current) {
      isMountedRef.current = true;
      return undefined;
    }

    return cb();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, deps);
};

export default useEffectOnce;
