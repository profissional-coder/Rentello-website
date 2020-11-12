export default function checkInfo(values) {
  let errors = {};

  if (!values.username.trim()) {
    errors.username = "Username required";
  }
}
