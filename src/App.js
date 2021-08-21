import React,{useCallback} from 'react';

import './App.css';

import EmployeeCard from './Components/employee card/employee.card';
import Header from './Components/header/Header';
import SideForm from './Components/SideForm/SideForm.jsx'
import TopFormComponent from './Components/TopForm/TopFormComponent';


function App() {




  return (
    <div className="App">
      <Header/>
     
    
    <div className="form-header">
      
      <TopFormComponent/>
    </div>

    <div className="MainBodyContainer">
      <div className="sidebar">
         Filters
         <SideForm />
      </div>
        
      <div className="employee">
       
        <EmployeeCard />    

        
      </div>
    


    </div>
     
   
    </div>
  );
}

export default App;
