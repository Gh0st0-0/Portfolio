// All the imports for the app in the parent folder
import { CandidateProvider } from "./components/CandidateContext";
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Saumya from "./components/Saumya";
import NavBar from "./Nav/NavBar";
import ProjectContainer from "./components/Projects/ProjectContainer";
import ContactMe from "./components/ContactMe";
import { Route, Routes } from "react-router-dom";

export default function App() {
    return(
        <CandidateProvider>
            <div className={'AppContailer'}>
                <div >
                {/* className="introContainer" */}
                    <Saumya></Saumya>
                </div>
                <div className={'content'} >
                    <Routes>
                        <Route path={'/'} element={<ProjectContainer/>}></Route>
                        {/* <Route path={'/'} element={<ContactMe />}></Route> */}
                    </Routes>
                </div>
                <div>
                    <NavBar/>
                </div>
                <div className={'ContactParent'}>
                    <ContactMe ></ContactMe>
                </div>
            </div>


            {/* Tost container always at the last totrigger message after any action with a custom message */}
            <ToastContainer
                position="top-left"
                autoClose={5000}
                hideProgressBar={false}
                newestOnTop={false}
                closeOnClick
                rtl={false}
                pauseOnFocusLoss
                draggable
                pauseOnHover
                theme="colored"
            />
        </CandidateProvider>
    )
}