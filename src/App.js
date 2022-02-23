import React from "react";
import {
   BrowserRouter as Router,
   Routes,
   Route
} from 'react-router-dom'

import ContainerPage from "./pages/ContainerPage";
import ListPage from "./pages/ListPage";
import ModalPage from "./pages/ModalPage";
import SplitScreenPage from "./pages/SplitScreenPage";
import HomePage from "./pages/HomePage";
import NotFoundPage from "./pages/NotFoundPage";
import NavBar from "./NavBar";
import { UncontrolledFormPage } from "./pages/UncontrolledFormPage";
import { ControlledFormPage } from "./pages/ControlledFormPage";

const App = () => {
  return (
    <Router>
     <div className="App">
     <NavBar />
    <div>
        <Routes>
            <Route path="/" element={<HomePage />} exact/>
            <Route path="/modal" element={ <ModalPage />} />
            <Route path="/list" element={ <ListPage />} />
            <Route path="/split-screen" element={ <SplitScreenPage />} />
            <Route path="/container" element={ <ContainerPage />} />
            <Route path="/uncontrolled" element={ <UncontrolledFormPage />} />
            <Route path="/controlled" element={ <ControlledFormPage />} />
            <Route element={NotFoundPage} />
        </Routes>
    </div>
    </div>
    </Router>
  );
}

export default App;
