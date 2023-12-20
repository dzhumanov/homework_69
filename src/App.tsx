import { Route, Routes } from "react-router-dom";
import Header from "./components/header/header";
import Home from "./containers/Home/Home";
import ShowInfo from "./containers/ShowInfo/ShowInfo";
import { useSelector } from "react-redux";

function App() {

  return (
    <>
      <Header />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/shows/:id" element={<ShowInfo/>} />
        <Route path="*" element={<h1>Not Found!</h1>} />
      </Routes>
    </>
  );
}

export default App;
