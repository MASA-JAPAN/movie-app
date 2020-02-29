import Modal from "./modal";
import MovieCreateForm from "./movieCreateForm";

const SideMenu = props => {
  return (
    <div>
      <Modal>
        <MovieCreateForm />
      </Modal>
      <h1 className="my-4">{props.appName}</h1>
      <div className="list-group">
        {props.categories.map(c => (
          <a key={c.id} href="#" className="list-group-item">
            {c.name}
          </a>
        ))}
      </div>
    </div>
  );
};

export default SideMenu;
