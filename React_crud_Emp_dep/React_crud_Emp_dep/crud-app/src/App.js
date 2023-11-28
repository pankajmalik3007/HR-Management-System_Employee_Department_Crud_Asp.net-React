
// import './App.css';
// import CounterComponent from './CounterComponent';

// function App() {
//   return (
//     <div className="App">
//      <CounterComponent/>
//     </div>
//   );
// }

// export default App;

// import React from 'react';
// import { BrowserRouter as Router, Route } from 'react-router-dom';
// import Navbar from './Navbar';
// import HomePage from './HomePage';
// import DepartmentPage from './DepartmentPage';
// import CounterComponent from './CounterComponent';

// function App() {
//   return (
//     <Router>
//       <div className="App">
//         <Navbar />
        
//           <Route path="/" exact component={HomePage} />
//           <Route path="/department" component={DepartmentPage} />
        
//       </div>
//     </Router>
//   );
// }

// export default App;
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './Navbar';
import 'bootstrap/dist/css/bootstrap.min.css';
import HomePage from './HomePage';
// import DepartmentPage from './DepartmentPage';
import CounterComponent from './CounterComponent';
import DepartmentList from './DepartmentList';




function App() {
  return (
    <Router>
      <div className="App">
        <Navbar />
       
        
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/department" element={<DepartmentList />} />
         <Route path="/counter" element={<CounterComponent />} />
        </Routes>
       
      </div>
    </Router>
    
  );
}

export default App;
