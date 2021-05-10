module.exports = (app) => {
  app.post("/api/login", (req, res) => {
    console.log("User login attempt ...");
    console.log(req.body);
    const { email, password } = req.body;

    console.log(email);
    console.log(password);

    const user = authenticate(email, password);

    if (user) {
      res.status(200).json({ id: user.id, email: user.email, name: user.name });
    } else {
      res.sendStatus(403);
    }
  });
};

const USERS = {
  1: {
    id: 1,
    email: "covestro-admin@covestro.com",
    password: "admin",
    name: "Coverstro Admin",
  },
};

const authenticate = (email, password) => {
  const user = Object.values(USERS).find((user) => user.email === email);

  if (user && user.password == password) {
    return user;
  } else {
    return undefined;
  }
};
