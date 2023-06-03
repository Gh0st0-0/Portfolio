import { useState } from "react";

const {createContext} = require("react");
const CandidateContext = createContext({});

export function CandidateProvider({children}){
    const [candidate, setCandidate] = useState({});
    return (
        <CandidateContext.Provider value = {{candidate, setCandidate}}>
            {children}
        </CandidateContext.Provider>
    )
}

export default CandidateContext;