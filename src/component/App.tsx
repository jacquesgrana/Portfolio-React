import Header from './template/Header';
import Footer from './template/Footer';
import { Outlet } from 'react-router-dom';
import CustomToast from './common/CustomToast';
import { useRef, useState } from 'react';
import IToast from '../interface/IToast';

const App = () => {
  const [showToast, setShowToast] = useState(false);
  const outletProps = {
    displayToast: (toast: IToast) => displayToast(toast)
  };

  const toastRef = useRef<IToast>(
    {
        title: "Test.",
        subtitle: "Test.",
        message: "Test affichage d'un toast.",
        mode: "success"
    }
  );

  const toggleShowToast = () => setShowToast(!showToast);

  const displayToast = (toast: IToast) => {
    toastRef.current = toast;
    toggleShowToast();
}

  return (
    <div className="App"  id="container_all">
        <Header />
          <main id="main">
            <Outlet context={outletProps}/>
          </main>
        <Footer />
        <CustomToast
                show={showToast}
                toast={toastRef.current}
                toggleShow={toggleShowToast}
            />
    </div>
  );
}

export default App;
