export function validateUsername(username) {
  
  if (!username.trim()) {
    return 'Username is required.';
  }

  return '';
}

export function validatePassword(password) {
  const regex = /^(?=.*[A-Z])(?=.*\d)(?=.*[\W_]).{8,}$/;

  if (!regex.test(password)) {
    return 'Password must be at least 8 characters long, contain 1 uppercase letter, 1 number, and 1 special character.';
  }

  return '';
}
