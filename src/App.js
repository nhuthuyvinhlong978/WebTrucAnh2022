import { BrowserRouter, Route } from "react-router-dom";
import MainLayout from "./layouts/MainLayout";

function App() {
  return (
    <BrowserRouter>
      <Route path="/" render={() => <MainLayout />} />
    </BrowserRouter>
  );
}

export default App;
