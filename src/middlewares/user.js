module.exports = function (req, res, next) {
  const {
    fullname,
    idCard,
    birthDate,
    city,
    email,
  } = req.body;

  const fullnameRegexp = /^([A-Z][a-z]+ [A-Z]\. [A-Z]\.)$/;
  const idCardRegexp = /^([A-Z]{2} №[0-9]{6})$/;
  const birthDateRegexp = /^((\d){2}\.(\d){2}\.(\d){4})$/;
  const cityRegexp = /^([A-Z][a-z]+)$/;
  const emailRegexp = /^([a-zA-Z0-9]+(?:\.[a-zA-Z0-9]+)*@[a-zA-Z0-9]+(?:\.[a-zA-Z0-9]+)*)$/;

  if(
    !fullnameRegexp.test(fullname)
    || !idCardRegexp.test(idCard)
    || !birthDateRegexp.test(birthDate)
    || !cityRegexp.test(city)
    || !emailRegexp.test(email)
    ) {
      res.json({ message: 'Wrong format in some field' });
  } else {
    next();
  }
}