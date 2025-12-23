import { RegisterPage } from "../../components/register/RegistrationPage";

export const Register = () => {
  return <RegisterPage />;
};

export function RegisterAndClearStorage() {
  localStorage.clear();
  return <Register />;
}
