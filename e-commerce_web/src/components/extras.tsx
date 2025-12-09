import type { Button_CompProps, MainContainerProps } from '../interface';
import './extras.css';

const SaleBanner = () => {

    return(
        <>
            <div className="sale-banner">
                <h1 className='para-small font-wei-lighter'>Summer Sale For All Swim Suits And Free Express Delivery - OFF 50%!</h1>
                <a href="#" className='para-small shop_now font-wei-600'>Shop Now</a>
            </div>
        </>
    )
}

const MainContainer:React.FC<MainContainerProps> = (props) => {

    return(

        <>
        <div className="centercontainer">
                <div className={`maincontainer ${props.cstm_class ? props.cstm_class : ""}`} style={props.cstm_style ? props.cstm_style : {}} >
                    {props.child}
                </div>
        </div>
        </>
    )
}

const Button_Comp:React.FC<Button_CompProps> = (props) => {

    return(
        <>
            <a href={`${props.route ? props.route : '#'}`} className={`buttonCstm ${props.cstm_class ? props.cstm_class : ""}`} style={props.cstm_style ? props.cstm_style : {}} onClick={props.onClick}>{props.text}</a>
        </>
    )
}

const Button_withIcon:React.FC<Button_CompProps> = (props) => {

    return(

        <>
            <a href={`${props.route ? props.route : '#'}`} 
            className={`buttonCstm buttoncstm_withicon ${props.cstm_class ? props.cstm_class : ""}`}
            style={props.cstm_style ? props.cstm_style : {}}
            onClick={props.onClick}>
            {props.iconPosition === "right" ? (
                <>
                    <span>{props.text}</span>
                    {props.icon && <span className={`buttonIcon icon-font-normal ${props.iconclass ? props.iconclass : ""}`}>{props.icon}</span>}
                </>
            ): (
                <>
                    {props.icon && <span className={`buttonIcon icon-font-normal ${props.iconclass ? props.iconclass : ""}`}>{props.icon}</span>}
                    <span>{props.text}</span>
                </>
            )}              
            </a>
        
        </>
    )
}



export { SaleBanner, MainContainer, Button_Comp, Button_withIcon}
