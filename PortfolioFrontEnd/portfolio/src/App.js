// All the imports for the app in the parent folder
import { lazy, Suspense } from "react";
import { CandidateProvider } from "./components/CandidateContext";
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { Route, Routes } from "react-router-dom";
// import Saumya from "./components/Saumya";
// import NavBar from "./Nav/NavBar";
// import ProjectContainer from "./components/Projects/ProjectContainer";
// import OpenProject from "./components/Projects/OpenProject";
// import ContactMe from "./components/ContactMe";

// Lazy loading the components
const ProjectContainer = lazy(() => import("./components/Projects/ProjectContainer"));
const OpenProject = lazy(() => import("./components/Projects/OpenProject"));
const Saumya = lazy(() => import("./components/Saumya"));
const ContactMe = lazy(() => import("./components/ContactMe"));
const NavBar = lazy(() => import("./Nav/NavBar"));

export default function App() {
    return(
        <CandidateProvider>
            <Suspense fallback={<h1>Loading...</h1>}>
                <div className={'AppContailer'}>
                    <div >
                    {/* className="introContainer" */}
                        <Saumya></Saumya>
                    </div>
                    <div>
                        <NavBar/>
                    </div>
                    <div className={'content'} >
                        <Routes>
                            <Route path={'/'} element={<ProjectContainer/>}></Route>
                            <Route path={'/project'} element={<ProjectContainer/>}></Route>
                            <Route path={'/getProject/:id'} element={<OpenProject/>}></Route>
                            {/* <Route path={'/'} element={<ContactMe />}></Route> */}
                        </Routes>
                    </div>
                    <div className={'ContactParent'}>
                        <ContactMe ></ContactMe>
                    </div>
                </div>
            </Suspense>


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