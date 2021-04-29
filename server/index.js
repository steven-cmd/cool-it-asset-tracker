const express = require("express");
const itemController = require("./controllers/item_controller");

const app = express();

app.use(express.json());

app.post("/api/items", itemController.add);
app.get("/api/items", itemController.getAll);
app.put("/api/items/:id", itemController.update);
app.delete("/api/items/:id", itemController.delete);
app.get("/api/filteredItems", itemController.filter);

const port = 3001;

app.listen(port, () => {
  console.log(`Server active on port ${port}`);
});
