import { useState } from "react";

const {createContext} = require("react");

const OtherSkillIdContext = createContext({});

export function OtherSkillIdProvider({children}) {
    const [otherSkill_id, serOtherSkill_id] = useState(0);
    return (
        <OtherSkillIdContext.Provider value={{otherSkill_id, serOtherSkill_id}}>
            {children}
        </OtherSkillIdContext.Provider>
    )
}

export default OtherSkillIdContext;