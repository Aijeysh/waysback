import jwt from "jsonwebtoken";

const generateToken = (res, userId) => {
  const token = jwt.sign({ userId }, process.env.JWTSECRET, {
    expiresIn: '7d',
  });

  res.cookie('jwt', token, {
    httpOnly: true,
    secure: process.env.NODE_ENV !== 'development',
    sameSite: 'none',
    maxAge: 7 * 24 * 60 * 60 * 1000,
    domain: 'waysprivate.com.np', // Replace with the desired domain
  })
}

export default generateToken;
