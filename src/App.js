import { Route, Routes } from 'react-router-dom';
import './App.css';
import SearchMountainPage from './components/pages/SearchMountainPage';
import MountainListPage from './components/pages/MountainListPage';
import Main from './components/pages/Main';
import MountainInfoPage from './components/pages/MountainInfoPage';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path='/' element={<Main />} />
        <Route path='/SearchMountainPage' element={<SearchMountainPage />} />
        <Route path='/MountainListPage/:pageNo' element={<MountainListPage />} />
        <Route path='/MountainListPage/:pageNo/:searchName' element={<MountainListPage />} />
        <Route path='/MountainInfoPage/:pageNo/:mountainId' element={<MountainInfoPage />} />
        <Route path='/MountainInfoPage/:pageNo/:searchName/:mountainId' element={<MountainInfoPage />} />
      </Routes>
    </div>
  );
}

export default App;
