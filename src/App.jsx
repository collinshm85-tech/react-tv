
import { useState } from "react";
import { tvShows } from "./shows/data";
import ShowDetails from "./shows/ShowDetails";
import ShowSelection from "./shows/ShowSelection";

const App = () => {
  const [shows] = useState(tvShows);
  const [selectedShow, setSelectedShow] = useState(null);

  return (
    <>
      <header>
        <h1>React TV</h1>
        <ShowSelection
          shows={shows}
          setSelectedShow={setSelectedShow}
        />
      </header>

      <main>
        <ShowDetails
          key={selectedShow ? selectedShow.name : "none"}
          show={selectedShow}
        />
      </main>
    </>
  );
};

export default App;
