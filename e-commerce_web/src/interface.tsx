export interface MainContainerProps {

    child : React.ReactNode;
    cstm_style ?: React.CSSProperties;
    cstm_class ?: string;
}

export interface Button_CompProps {

    text : string;
    cstm_class ?: string;
    cstm_style ?: React.CSSProperties;
    onClick ?: () => void;
    icon ?: React.ReactNode;
    route ?: string;
}