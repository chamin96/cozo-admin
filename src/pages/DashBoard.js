import React from 'react';
// import { Link } from 'react-router-dom';
import NavigationPanel from '../components/NavigationPanel';
import Footer from '../components/Footer';
import SideBar from '../components/SideBar';
import RegisteredVendors from '../components/RegisteredVendors';

class DashBoard extends React.Component {
    render() {
       return (
        <div className="page-header-fixed sidemenu-closed-hidelogo page-content-white page-md header-white dark-sidebar-color logo-dark">
            <div className="page-wrapper">
            <NavigationPanel></NavigationPanel>
            <div className="page-container">
                <SideBar></SideBar>
                <RegisteredVendors></RegisteredVendors>
            </div>
            <Footer></Footer>
            </div>
        </div>
       );
    }
 }

 export default DashBoard;