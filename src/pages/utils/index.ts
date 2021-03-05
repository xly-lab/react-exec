import { useCallback, useEffect, useRef, useState } from "react";
export function debounce(fn: Function, wait: number) {
  let timeId: any;
  return (...args: any) => {
    if (timeId) clearTimeout(timeId); //只是清除了定时器，不会清除timeID 的实际值
    let nowDo = !timeId; //此时的timeId肯有值
    timeId = setTimeout(() => {
      timeId = null;
    }, wait);
    if (nowDo) {
      fn(...args);
    }
  };
}

export const useDebounce = (fn: Function, waitTime: number, deps: any) => {
  const [timer, setTimer] = useState<any>(null);
  const ref: any = useRef();
  useEffect(() => {
    ref.fn = fn;
  }, [fn]);
  return useCallback(
    (...args: any) => {
      if (timer) clearTimeout(timer);
      let doIt = !timer;
      let timer_ = setTimeout(() => {
        setTimer(null);
      }, waitTime);
      setTimer(timer_);
      if (doIt) {
        fn(...args);
      }
    },
    [deps]
  );
};
