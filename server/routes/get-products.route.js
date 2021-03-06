const PRODUCTS = {
  3: {
    id: "p1100#",
    name: "Desmocap® 11 A",
    description:
      "Branched polymer with ether and urethane groups; contains crosslinking, blocked isocyanate groups.",
    currentPrice: "19",
    lastUpdate: "2021/03/08",
  },
  1: {
    id: "p10#",
    name: "Hyperlite® E-850",
    description:
      "is a polyoxyalkylene polyol; hydroxyl number, 18.2 - 22.2 mg KOH/g ; specific gravity at 25°C, 1.06",
    currentPrice: "10",
    lastUpdate: "2020/02/01",
  },
  2: {
    id: "p15#",
    name: "Hyperlite® E-863",
    description:
      "is a polyoxyalkylene polyol; hydroxyl number, 30.0 – 33.0 mg KOH/g ; specific gravity at 25°C, 1.03",
    currentPrice: "20",
    lastUpdate: "2021/03/08",
  },
};

module.exports = (app) => {
  app.get("/api/products", (req, res) => {
    console.log("Retrieving products data ...");

    setTimeout(() => {
      res.status(200).json({ payload: Object.values(PRODUCTS) });
    }, 1000);
  });
};
