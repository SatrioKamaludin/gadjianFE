import React, { useEffect } from 'react';
import Header from './components/header/header';
import Menu from './components/menu/menu';
import EmployeeCard from './components/employeeCard/employeeCard';
import { connect } from 'react-redux';
import { getAllEmployee, noRefresh } from './redux/actions';
import './App.css';

function App(props) {
  useEffect(() => {
    let theEmployees = JSON.parse(localStorage.getItem('employeeData'))
    if(theEmployees) {
      props.noRefresh(theEmployees)
    } else {
      props.getAllEmployee()
    }
  },[])

  return (
    <div className="App">
      <Header />
      <Menu />
      <EmployeeCard />
    </div>
  );
}

export default connect(null,{getAllEmployee,noRefresh}) (App);
