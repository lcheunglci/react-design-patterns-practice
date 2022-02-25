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
import { UncontrolledPage } from "./pages/UncontrolledPage";
import { ControlledPage } from "./pages/ControlledPage";
import HighOrderPage from "./pages/HighOrderPage";
import CustomHooksPage from './pages/CustomHooksPage'
import RecursivePage from "./pages/RecursivePage";
import CompositionPage from "./pages/CompositionPage";

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
            <Route path="/uncontrolled" element={ <UncontrolledPage />} />
            <Route path="/controlled" element={ <ControlledPage />} />
            <Route path="/high-order" element={ <HighOrderPage />} />
            <Route path="/custom-hooks" element={ <CustomHooksPage />} />
            <Route path="/recursive" element={ <RecursivePage />} />
			<Route path="/composition" element={ <CompositionPage/>} />
            <Route element={NotFoundPage} />
        </Routes>
    </div>
    </div>
    </Router>
  );
}

export default App;
