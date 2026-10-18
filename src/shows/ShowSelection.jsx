
import "./shows.css";

const ShowSelection = ({ shows, setSelectedShow }) => {
  return (
    <nav className="shows">
      {shows.map((show) => (
        <a
          key={show.name}
          className="show"
          href="#"
          onClick={(event) => {
            event.preventDefault();
            setSelectedShow(show);
          }}
        >
          {show.name}
        </a>
      ))}
    </nav>
  );
};

export default ShowSelection;
