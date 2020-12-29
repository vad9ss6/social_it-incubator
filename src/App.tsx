import React from 'react';
import './App.css';
import SideBar from "./Components/SideBar/SideBar";
import Footer from "./Components/Footer/Footer";
import {Route} from 'react-router-dom';
import DialogsContainer from "./Components/Dialogs/DialogsContainer";
import {UsersContainer} from "./Components/Users/UsersContainer";
import ProfileContainer from "./Components/Profile/ProfileInfo/ProfileContainer";
import HeaderContainer from "./Components/Header/HeaderContainer";





function App() {
    return (
        <div className="wrapper">
            <HeaderContainer/>
            <SideBar/>
            <div className={"app-wrapper-content"}>
                <Route path='/dialogs' render={() => <DialogsContainer />}/>
                <Route path='/profile/:userId?' render={() => <ProfileContainer/>}/>
                <Route path='/usersAPIComponent' render={() => <UsersContainer />}/>
            </div>
            <Footer/>
        </div>
    );
}

export default App;
