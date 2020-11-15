export default function validation(values) {
  let errors = {};

  if (!values.Fullname.trim()) {
    errors.Fullname = "Fullname required";
  }

  if (!values.email) {
    errors.email = "Email required";
  } else if (!/\S+@\S+\.\S+/.test(values.email)) {
    errors.email = "Email address is invalid";
  }

  if (!values.password) {
    errors.password = "Password required";
  } else if (values.password.length < 6) {
    errors.password = "Passwrod should be more that 6 characters";
  }

  if (!values.password2) {
    errors.password2 = "Password required";
  } else if (values.password2 !== values.password) {
    errors.password2 = "Passwords do not match";
  }

  if (!values.city.trim()) {
    errors.city = "City required";
  }

  return errors;
}
