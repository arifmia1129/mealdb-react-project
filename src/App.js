import logo from './logo.svg';
import './App.css';
import Header from './components/Header/Header';
import { Route, Routes } from 'react-router-dom';
import Home from './components/Home/Home';
import Search from './components/Search/Search';
import Account from './components/Account/Account';
import About from './components/About/About';
import Wrong from './components/Wrong/Wrong';

function App() {
  return (
    <div className="App">
      <Header></Header>
      <Routes>
        <Route path='/' element={<Home></Home>}></Route>
        <Route path='search' element={<Search></Search>}></Route>
        <Route path='account' element={<Account></Account>}></Route>
        <Route path='about' element={<About></About>}></Route>
        <Route path='*' element={<Wrong></Wrong>}></Route>
      </Routes>
    </div>
  );
}

export default App;
