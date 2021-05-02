let items = [
  {
    id: 999,
    assetTag: "PC01",
    location: "main floor",
    user: "Danny",
    endOfLife: "2020",
    purchaseDate: "2015",
    purchasePrice: "1500",
    model: "lenovo thinkpad",
    type: "laptop",
    serialNumber: "9812374981234",
    comments: "messed up",
  },
  {
    id: 998,
    assetTag: "PC02",
    location: "main floor",
    user: "Puff Daddy",
    endOfLife: "2021",
    purchaseDate: "2016",
    purchasePrice: "1000",
    model: "apple mac mini",
    type: "desktop",
    serialNumber: "123847612",
    comments: "",
  },
  {
    id: 997,
    assetTag: "PC03",
    location: "main floor",
    user: "Bob Saget",
    endOfLife: "2022",
    purchaseDate: "2017",
    purchasePrice: "1000",
    model: "dell optiplex",
    type: "desktop",
    serialNumber: "213846891234",
    comments: "",
  },
  {
    id: 996,
    assetTag: "PC04",
    location: "main floor",
    user: "Shirlena",
    endOfLife: "2023",
    purchaseDate: "2018",
    purchasePrice: "1000",
    model: "dell latitude",
    type: "laptop",
    serialNumber: "187263489123",
    comments: "",
  },
  {
    id: 995,
    assetTag: "PC05",
    location: "basement",
    user: "Rick Moranis",
    endOfLife: "2024",
    purchaseDate: "2019",
    purchasePrice: "1000",
    model: "apple macbook",
    type: "laptop",
    serialNumber: "2184761238",
    comments: "",
  },
  {
    id: 994,
    assetTag: "PC06",
    location: "basement",
    user: "Ronald McDonald",
    endOfLife: "2025",
    purchaseDate: "2020",
    purchasePrice: "1000",
    model: "dell optiplex",
    type: "desktop",
    serialNumber: "5876239817",
    comments: "greasy keys",
  },
  {
    id: 993,
    assetTag: "PC07",
    location: "basement",
    user: "Randy Travis",
    endOfLife: "2026",
    purchaseDate: "2021",
    purchasePrice: "1500",
    model: "lenovo thinkpad",
    type: "laptop",
    serialNumber: "12834891234",
    comments: "",
  },
  {
    id: 992,
    assetTag: "PC08",
    location: "it storage",
    user: "none",
    endOfLife: "2026",
    purchaseDate: "2021",
    purchasePrice: "1500",
    model: "apple m1 macbook air",
    type: "laptop",
    serialNumber: "128394109283477",
    comments: "new",
  },
  {
    id: 991,
    assetTag: "PC09",
    location: "it storage",
    user: "none",
    endOfLife: "2026",
    purchaseDate: "2021",
    purchasePrice: "1500",
    model: "dell optiplex",
    type: "desktop",
    serialNumber: "912873409182734",
    comments: "new",
  },
];
let id = 0;

module.exports = {
  add: (req, res) => {
    const {
      assetTag,
      location,
      user,
      endOfLife,
      purchaseDate,
      purchasePrice,
      model,
      type,
      serialNumber,
      comments,
    } = req.body;

    items.push({
      id,
      assetTag,
      location,
      user,
      endOfLife,
      purchaseDate,
      purchasePrice,
      model,
      type,
      serialNumber,
      comments,
    });

    id++;
    res.status(200).send(items);
  },
  getAll: (req, res) => {
    res.status(200).send(items);
  },
  update: (req, res) => {
    const {
      assetTag,
      location,
      user,
      endOfLife,
      purchaseDate,
      purchasePrice,
      model,
      type,
      serialNumber,
      comments,
    } = req.body;
    const itemId = req.params.id;
    const index = items.findIndex((item) => item.id === +itemId);
    if (index === -1) {
      return res.status(500).send("No such item, fool");
    }
    let item = items[index];

    items[index] = {
      id: item.id,
      assetTag: assetTag || item.assetTag,
      location: location || item.location,
      user: user || item.user,
      endOfLife: endOfLife || item.endOfLife,
      purchaseDate: purchaseDate || item.purchaseDate,
      purchasePrice: purchasePrice || item.purchasePrice,
      model: model || item.model,
      type: type || item.type,
      serialNumber: serialNumber || item.serialNumber,
      comments: comments || item.comments,
    };

    res.status(200).send(items);
  },
  delete: (req, res) => {
    const itemId = req.params.id;
    const index = items.findIndex((item) => item.id === +itemId);
    if (index === -1) {
      return res.status(500).send("No such item, fool");
    }
    items.splice(index, 1);
    res.status(200).send(items);
  },
  filter: (req, res) => {
    let filteredItems = items.filter((item) => {
      let returnBool = true;
      for (property in req.body) {
        if (
          req.body[property] &&
          !item[property]
            .toLowerCase()
            .includes(req.body[property].toLowerCase())
        ) {
          returnBool = false;
        }
      }
      return returnBool;
    });

    res.status(200).send(filteredItems);
  },
};
