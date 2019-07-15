import React from 'react';
import Header from './Header/Header';
import Banner from './Banner/Banner';
import Possibilities from './Possibilities/Possibilities';
import Lamp from './Lamp/Lamp';
import Community from './Community/Community';
import Footer from './Footer/Footer';


const Home = () => {
  return (
    <div className="app-main">
      <Header />
      <Banner />
      <Possibilities />
      <Lamp />
      <Community />
      <Footer />
    </div>
  );
}

export default Home;













// import React from 'react';
// import logo from './logo.svg';
// import './App.sass';
//
// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Edit <code>src/App.js</code> and save to reload.
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>
//       </header>
//     </div>
//   );
// }
//
// export default App;