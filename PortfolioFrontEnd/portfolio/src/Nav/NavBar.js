import {Link} from "react-router-dom";

export default function NavBar() {
    return(
        <>
            <nav className={'Nav'}>
                <div className={'NavLinksCnt'}>
                    <div className={'navLinkTitle'} >
                        <Link to={'/'} >Project</Link>
                    </div>
                </div>
            </nav>
        </>
    )
}