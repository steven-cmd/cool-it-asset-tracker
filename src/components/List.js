import Item from "./Item";

function List(props) {
  return (
    <main className="list">
      {props.items.map((item) => {
        return (
          <Item
            key={item.id}
            item={item}
            handleDelete={props.handleDelete}
            handleEditItem={props.handleEditItem}
          />
        );
      })}
    </main>
  );
}

export default List;
