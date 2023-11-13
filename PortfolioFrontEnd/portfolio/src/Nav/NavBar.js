import {Link} from "react-router-dom";

export default function NavBar() {
    return(
        <>
            <nav className={'Nav'}>
                <Link to={'/experience'} >
                    <div className={'NavLinksCnt'}>
                        <div className={'navLinkTitle'} >
                            Experience
                        </div>
                    </div>
                </Link>
                <Link to={'/project'} >
                    <div className={'NavLinksCnt'}>
                        <div className={'navLinkTitle'} >
                            Project
                        </div>
                    </div>
                </Link>
                <Link to={'/it-skills'} >
                    <div className={'NavLinksCnt'}>
                        <div className={'navLinkTitle'} >
                            IT-Technologies
                        </div>
                    </div>
                </Link>
                <Link to={'/other-skills'} >
                    <div className={'NavLinksCnt'}>
                        <div className={'navLinkTitle'} >
                            Non-IT-Technologies
                        </div>
                    </div>
                </Link>
                <Link to={'/academics'} >
                    <div className={'NavLinksCnt'}>
                        <div className={'navLinkTitle'} >
                            Academics
                        </div>
                    </div>
                </Link>
            </nav>
        </>
    )
}