export default function validation(values) {
  let errors = {};

  if (!values.email) {
    errors.email = "Email required";
  } else if (!/\S+@\S+\.\S+/.test(values.email)) {
    errors.email = "Invalid Email Address";
  }

  if (!values.password) {
    errors.password = "Password Required";
  } else if (values.password.length < 6) {
    errors.password = "Incorrect Password";
  }

  return errors;
}
