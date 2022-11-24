import { useState } from "react";
import { Route, Switch } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import DashBoard from "../components/Dashboard";
import Login from "../components/Login";
import Modal from "../components/Modal";
import Register from "../components/Register";
import TechContext  from "../contexts/TechContext";

const Routes = () => {
    const [openModal, setOpenModal] = useState(false)

    return (
        <Switch>
            <Route exact path="/">
                <ToastContainer />
                <Login />
            </Route>
            <Route exact path="/register">
                <ToastContainer />
                <Register />
            </Route>
            <Route exact path="/dashboard">
                <TechContext>
                <ToastContainer />
                <DashBoard openModal={openModal} setOpenModal={setOpenModal} />
                    {openModal && (
                        <Modal openModal={openModal} setOpenModal={setOpenModal} />
                    )}
                </TechContext>
            </Route>
        </Switch>
    )
}

export default Routes;