export type SignInFlow = "signIn" | "signUp";

export const useLogin = () => {
  const signInFlow = useState<SignInFlow>("signInFlow", () => "signIn");

  const changeLoginState = (state: SignInFlow) => {
    console.log("changeLoginState", state);
    signInFlow.value = state;
  };

  return {
    signInFlow,
    changeLoginState,
  };
};
