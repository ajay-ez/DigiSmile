import { useEffect, useState } from "react";

const useAuthCheck = (): boolean => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  useEffect(() => {
    const userId = localStorage.getItem("userId");
    const token = localStorage.getItem("authToken");
    if (userId && token) {
      setIsAuthenticated(true);
    } else {
      setIsAuthenticated(false);
    }
  }, []);

  return isAuthenticated;
};

export default useAuthCheck;
