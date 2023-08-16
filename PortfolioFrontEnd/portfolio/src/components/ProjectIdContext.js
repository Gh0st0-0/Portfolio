import { useState } from "react";

const {createContext} = require("react");

const ProjectIdContext = createContext({});

export function ProjectIdProvider({children}) {
    const [proj_id, setProj_id] = useState(0);
    return (
        <ProjectIdContext.Provider value = {{proj_id, setProj_id}}>
            {children}
        </ProjectIdContext.Provider>
    )
}

export default ProjectIdContext;