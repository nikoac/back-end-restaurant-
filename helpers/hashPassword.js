const bcrypt = require('bcrypt')

const hasingPassword = async (user) => {
  const saltRounds = bcrypt.genSaltSync(10);
  user.password = bcrypt.hashSync(user.password, saltRounds);
  return user
};

const passMatch = async (password, passwordHash) => {
  return bcrypt.compareSync(password, passwordHash)
}

module.exports ={
  hasingPassword,
  passMatch
}