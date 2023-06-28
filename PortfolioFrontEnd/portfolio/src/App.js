// All the imports for the app in the parent folder
import { lazy, Suspense  } from "react";
import { CandidateProvider } from "./components/CandidateContext";
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { Route, Routes } from "react-router-dom";
import LoadingPage from "./components/LoadingPage";
import CircleLoader from "react-spinners/CircleLoader";
// import Login from "./components/Admin/Login";
// import Saumya from "./components/Saumya";
// import NavBar from "./Nav/NavBar";
// import ProjectContainer from "./components/Projects/ProjectContainer";
// import ItSkillContainer from "./components/IT_Skills/ItSkillContainer";
// import OtherSkillContainer from "./components/Other_Skill/OtherSkillContainer";
// import OpenProject from "./components/Projects/OpenProject";
// import EditProject from "./components/Admin/EditProject";
// import ContactMe from "./components/ContactMe";


// Lazy loading the components
const ProjectContainer = lazy(() => import("./components/Projects/ProjectContainer"));
const OpenProject = lazy(() => import("./components/Projects/OpenProject"));
const Saumya = lazy(() => import("./components/Saumya"));
const ContactMe = lazy(() => import("./components/ContactMe"));
const NavBar = lazy(() => import("./Nav/NavBar"));
const ItSkillContainer = lazy(() => import("./components/IT_Skills/ItSkillContainer"));
const OtherSkillContainer = lazy(() => import("./components/Other_Skill/OtherSkillContainer"));
const Login = lazy(() => import('./components/Admin/Login'));
const Admin = lazy(() => import('./components/Admin/Admin'));
const EditProject = lazy(() => import('./components/Admin/EditProject'));
const EditITSkill = lazy(() => import('./components/Admin/EditITSkill'));
const EditOtherSkill = lazy(() => import('./components/Admin/EditOtherSkill'));

export default function App() {
    return(
        <CandidateProvider>
            <div className={'AppContailer'}>
                <Suspense fallback={<CircleLoader className={'App-Loader'} color="#11c713" />}>
                    <div >
                    {/* className="introContainer" */}
                        <Saumya></Saumya>
                    </div>
                    <div className={'NavContainer'}>
                        <NavBar/>
                    </div>
                    <div className={'content'} >
                        <Routes>
                            <Route path={'/'} element={<ProjectContainer/>}></Route>
                            <Route path={'/project'} element={<ProjectContainer/>}></Route>
                            <Route path={'/project/getProject/:id'} element={<OpenProject/>}></Route>
                            <Route path={'/it-skills'} element={<ItSkillContainer />}></Route>
                            <Route path={'/other-skills'} element={<OtherSkillContainer />}></Route>
                            <Route path={'/login'} element={<Login />}></Route>
                            <Route path={'/cand_admin'} element={<Admin />}></Route>
                            <Route path={'/admin/getProject/:id'} element={<EditProject />}></Route>
                            <Route path={'/admin/getITSkill/:id'} element={<EditITSkill />}></Route>
                            <Route path={'/admin/getOtherSkill/:id'} element={<EditOtherSkill />}></Route>
                            {/* <Route path={'/'} element={<ContactMe />}></Route> */}
                        </Routes>
                    </div>
                    <div className={'ContactParent'}>
                        <ContactMe ></ContactMe>
                    </div>
                </Suspense>
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