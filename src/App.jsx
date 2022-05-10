import { Provider, createClient } from "wagmi";
import { BrowserRouter, Route, Routes } from "react-router-dom";

import { Nav } from "./components/Nav";
import { Register } from "./components/Register";
import { StrategyList } from "./components/StrategyList";

import "./App.css";

const client = createClient();

function App() {
  return (
    <BrowserRouter>
      <Provider className="App" client={client}>
        <Nav />
        <Routes>
          <Route path="/register" element={<Register />} />
          <Route path="/" element={<StrategyList />} />
        </Routes>
      </Provider>
    </BrowserRouter>
  );
}

export default App;
