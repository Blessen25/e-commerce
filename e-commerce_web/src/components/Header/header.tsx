import { MainContainer } from "../extras"
import "./header.css"

const HeaderComp = () => {

    return(

        <>
            <div id="header">
                <div className="headerdiv">
                    <MainContainer 
                        child = {
                            <>
                                <div className="headermain">
                                    <div className="headerlogo">
                                        <div className="logoname">
                                            <div className="logo">BVM</div>
                                        </div>
                                    </div>
                                    <div className="logodetails">
                                            <a href="#">Home</a>
                                            <a href="#">About</a>
                                            <a href="#">Contact</a>
                                    </div>
                                </div>
                            </>
                        }
                     />
                </div>
            </div>
        </>
    )
}

export default HeaderComp