import Menu from "./views/components/Menu";
import MainPage from "./views/pages/MainPage";
import Footer from "./views/components/Footer";

import './styles/main.css'

function App() {
  return (
    <>
      <Menu />
      <div className="d-flex flex-column justify-content-center align-items-center" style={{width: '100%'}}>
        <MainPage />
        <Footer />
      </div>
    </>
  );
}

export default App;
