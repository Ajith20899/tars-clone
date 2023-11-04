export const validateLength = (str: string): boolean => {
  if (str?.length === 0) return false;
  return true;
};

export const validateEmail = (email: string): boolean => {
  const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return regex.test(email);
};

export const validatePassword = (password: string): string => {
  if (password.length < 8) {
    return "At least 8 characters long";
  }

  if (!/[A-Z]/.test(password)) {
    return "At least one uppercase letter";
  }

  if (!/[a-z]/.test(password)) {
    return "At least one lowercase letter";
  }

  if (!/[!@#$%^&*(),.?":{}|<>]/.test(password)) {
    return "At least one special character";
  }

  return "";
};
