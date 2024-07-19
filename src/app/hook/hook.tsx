import { useEffect, useState } from "react";

export const useIsClient = () => {
  const [isClicnet, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, []);

  return isClicnet;
};