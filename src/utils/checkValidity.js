export const checkValidity = (email, password) => {
  const emailValidation = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
  const passwordValidation =
    /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[!@#$%^&amp;*()\-_=+[{\]};:'",/?]).{8,}$/.test(
      password
    );
  // const nameValidation = /^[a-zA-Z]+(?:-[a-zA-Z]+)*$/.test(name);

  // if (!nameValidation) return "Name is not valid!";
  if (!emailValidation) return "Email is not valid!";
  if (!passwordValidation) return "password is not valid!";

  return null;
};
export const checkValiditySignIn = (email, password) => {
  const emailValidation = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
  const passwordValidation =
    /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[!@#$%^&amp;*()\-_=+[{\]};:'",/?]).{8,}$/.test(
      password
    );

  if (!emailValidation) return "Email is not valid!";
  if (!passwordValidation) return "password is not valid!";

  return null;
};
