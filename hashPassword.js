import { genSalt, hash as _hash } from 'bcrypt';
const password = 'admin123'; // Replace with the password you want to hash

genSalt(10, (err, salt) => {
  if (err) throw err;
  _hash(password, salt, (err, hash) => {
    if (err) throw err;
    console.log('Hashed password:', hash);
  });
});