export interface LoginResponse {
  message: string;
  token: string;
  user_id: string;
}

const useAuthToken = () => {
  const setAuthToken = (loginResponse: LoginResponse) => {
    localStorage.setItem("authToken", `Bearer ${loginResponse.token}`);
    localStorage.setItem("userId", loginResponse.user_id);
  };

  const clearAuthToken = () => {
    localStorage.clear();
  };

  return { setAuthToken, clearAuthToken };
};

export default useAuthToken;
