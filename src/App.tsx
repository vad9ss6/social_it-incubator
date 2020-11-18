import React from 'react';
import './App.css';
import Header from "./Components/Header/Header";
import SideBar from "./Components/SideBar/SideBar";
import Profile from "./Components/Profile/Profile";
import Footer from "./Components/Footer/Footer";
import {Route} from 'react-router-dom';
import {DialogsPageType, ProfilePageType} from "./Redux/state";
import {StateType} from "./index";
import DialogsContainer from "./Components/Dialogs/DialogsContainer";




type AppPropsType = {
    state: any
    dispatch: (action: any) => void
    store: any
    // addPost: () => void
    // updateNewPostText: (value: string) => void
}

function App(props: AppPropsType) {
    return (
        <div className="wrapper">
            <Header/>
            <SideBar/>
            <div className={"app-wrapper-content"}>
                <Route path='/dialogs' render={() => <DialogsContainer  dialogsPage={props.state.dialogsPage} dispatch={props.dispatch} />}/>
                <Route path='/profile' render={() => <Profile store={props.store} />}/>
            </div>
            <Footer/>
        </div>
    );
}

export default App;
