let items = [
  {
    id: 32,
    assetTag: "1123",
    location: "main floor",
    user: "tourettes guy",
    endOfLife: "2024",
    purchaseDate: "2019",
    purchasePrice: "1000",
    model: "thinkpad",
    type: "laptop",
    serialNumber: "123k2",
    comments: "messed up",
  },
  {
    id: 22,
    assetTag: "131123",
    location: "basement",
    user: "your mom",
    endOfLife: "2022",
    purchaseDate: "2015",
    purchasePrice: "1000",
    model: "mac mini",
    type: "desktop",
    serialNumber: "1df23k2",
    comments: "",
  },
  {
    id: 42,
    assetTag: "12313",
    location: "tower",
    user: "Bob Saget",
    endOfLife: "2022",
    purchaseDate: "2015",
    purchasePrice: "800",
    model: "dell optiplex 3080",
    type: "desktop",
    serialNumber: "12fs33k2",
    comments: "not bad",
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
