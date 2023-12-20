import SearchForm from "./components/SearchForm/SearchForm";
import Header from "./components/header/header";

function App() {
  return (
    <>
      <Header />
      <div className="container">
        <SearchForm/>
      </div>
    </>
  );
}

export default App;
