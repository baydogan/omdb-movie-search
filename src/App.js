import SearchSection from "./layouts/SearchSection";
import Resultlist from "./layouts/ResultList";


function App() {
  return (
    <div className="container">
      <div>
        <h1 className="header">OMDb API</h1>
        <h2 className="title">The Open Movie Database 🍿</h2>
      </div>
      <SearchSection />
      <Resultlist />
    </div>
  );
}

export default App;
