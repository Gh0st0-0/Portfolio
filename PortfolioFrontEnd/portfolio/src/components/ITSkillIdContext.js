import { useState } from "react";

const {createContext} = require("react");

const ITSkillIdContext = createContext({});

export function ITSkillIdProvider({children}) {
    const [itSkill_id, setItSkill_id] = useState(0);
    return (
        <ITSkillIdContext.Provider value = {{itSkill_id, setItSkill_id}}>
            {children}
        </ITSkillIdContext.Provider>
    )
}

export default ITSkillIdContext;