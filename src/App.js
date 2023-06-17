import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import AppLayOut from 'Layout/AppLayOut';
import { PATHS } from 'utils/Paths/Paths';
import Home from 'screen/Home/Home';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<AppLayOut />}>
          <Route path={PATHS.home} element={<Home />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
