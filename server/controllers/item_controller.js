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

    let filteredItems = items.filter((item) => {
      return (
        item.assetTag.toLowerCase().includes(assetTag.toLowerCase()) ||
        item.location.toLowerCase().includes(location.toLowerCase()) ||
        item.user.toLowerCase().includes(user.toLowerCase()) ||
        item.endOfLife.toLowerCase().includes(endOfLife.toLowerCase()) ||
        item.purchaseDate.toLowerCase().includes(purchaseDate.toLowerCase()) ||
        item.purchasePrice
          .toLowerCase()
          .includes(purchasePrice.toLowerCase()) ||
        item.model.toLowerCase().includes(model.toLowerCase()) ||
        item.type.toLowerCase().includes(type.toLowerCase()) ||
        item.serialNumber.toLowerCase().includes(serialNumber.toLowerCase()) ||
        item.comments.toLowerCase().includes(comments.toLowerCase())
      );
    });

    res.status(200).send(filteredItems);
  },
};
