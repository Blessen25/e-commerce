import { use, useState } from "react"
import { Button_Comp, MainContainer } from "../extras"
import "./header.css"

const HeaderComp = () => {

    const [Login, setLogin] = useState(false);
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
                                    <div className="headerdetails">
                                            <a href="#">Home</a>
                                            <a href="#">About</a>
                                            <a href="#">Contact</a>
                                    </div>
                                    <div className="headerthirdsection">
                                        <div className="headersearchbar">
                                            <input type="text" placeholder="Search products..." className="seachbar"/>
                                            <i className="fa-solid fa-magnifying-glass icon-font-normal"></i>
                                        </div>
                                        {Login ? (
                                        <>
                                        <i className="fa-regular fa-heart icon-font-normal"></i>                                        
                                        <i className="fa-regular fa-user icon-font-normal"></i>
                                        <i className="fa-solid fa-cart-shopping icon-font-normal"></i>
                                        </>
                                        ) : (
                                            <>
                                            <a href="#">Register</a>
                                            <Button_Comp text='Signup'/>
                                            </>
                                        )}                                        
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