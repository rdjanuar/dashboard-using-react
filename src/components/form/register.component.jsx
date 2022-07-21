import { LoginForm } from "./auth.form.component";

export const RegisterForm = ({
  handlerChange,
  handlerClick,
  usernameExist,
}) => {
  return (
    <LoginForm
      header={"Create an Account"}
      paragraf={"Sign up now to get started with an account."}
      href={"/login"}
      word={"Log In"}
      auth={"Get Started"}
      account={"Already have an account?"}
      handlerChange={handlerChange}
      handlerClick={handlerClick}
      validatorText={usernameExist}
    />
  );
};
