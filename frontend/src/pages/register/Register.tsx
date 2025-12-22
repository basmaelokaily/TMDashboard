export const Register = () => {
  return <div>Register</div>;
};

export function RegisterAndClearStorage() {
  localStorage.clear();
  return <Register />;
}
