import { Route, Routes } from "react-router-dom";
import Home from "./containers/Home/Home";
import ShowInfo from "./containers/ShowInfo/ShowInfo";
import Layout from "./containers/Layout/Layout";

function App() {
  return (
    <>
      <Layout />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/shows/:id" element={<ShowInfo />} />
        <Route path="*" element={<h1>Not Found!</h1>} />
      </Routes>
    </>
  );
}

export default App;
