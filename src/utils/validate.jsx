export const CheckValidData = (email, password) => {
  const isEmailValid = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/.test(email);
  const isPasswordValid = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}$/.test(password);

  // if(name === "") return 'Full Name is Required'
  if (!isEmailValid) return 'Email is Not Valid';
  if (!isPasswordValid) return 'Password is Not Valid';
  

  return null;
};
