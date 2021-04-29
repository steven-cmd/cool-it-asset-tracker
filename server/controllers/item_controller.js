let items = [
  {
    id: 32,
    assetTag: "1123",
    location: "main",
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
    model: "mac pro",
    type: "desktop",
    serialNumber: "123k2",
    comments: "fubar",
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
        item.assetTag.includes(assetTag) ||
        item.location.includes(location) ||
        item.user.includes(user) ||
        item.endOfLife.includes(endOfLife) ||
        item.purchaseDate.includes(purchaseDate) ||
        item.purchasePrice.includes(purchasePrice) ||
        item.model.includes(model) ||
        item.type.includes(type) ||
        item.serialNumber.includes(serialNumber) ||
        item.comments.includes(comments)
      );
    });

    res.status(200).send(filteredItems);
  },
};
