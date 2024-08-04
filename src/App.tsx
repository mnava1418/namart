import Menu from "./views/components/Menu";
import MainPage from "./views/pages/MainPage";

import './assets/styles/main.css'

function App() {
  return (
    <>
      <Menu />
      <div className="d-flex flex-column justify-content-center align-items-center" style={{width: '100%'}}>
        <MainPage />
      </div>
    </>
  );
}

export default App;
