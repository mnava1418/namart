import '../../styles/button.css'

type ButtonProps =  {
    type: 'primary' | 'secondary' | 'alternative',
    label: string,
    onClick: () => void,
    style?: {}
}

const Button = ({type, label, onClick, style = {}}: ButtonProps) => {
    let btnStyle = ''

    switch (type) {
        case 'primary':
            btnStyle = 'custom-btn-primary'
            break;
        case 'secondary':
            btnStyle = 'custom-btn-secondary'
            break;
        case 'alternative':
            btnStyle = 'custom-btn-alternative'
            break;
        default:
            break;
    }    

    return (
        <div className={`custom-btn-container ${btnStyle}`} onClick={onClick} style={{...style}}>
            {label}
        </div>
    )
}

export default Button