const generatePassword = passlen => {
  let characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!@#$%^&*()';
  let randomPassword = '';
  for (let i = 0; i < passlen; i++) {
    randomPassword += characters[Math.floor(Math.random() * characters.length)];
  }
  return randomPassword;
};

let password = generatePassword(12);

console.log(`Generated password: ${password}`)
