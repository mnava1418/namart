import '../../assets/styles/button.css'

type ButtonProps =  {
    type: 'primary' | 'secondary',
    label: string,
    onClick: () => void
}

const Button = ({type, label, onClick}: ButtonProps) => {
    let btnStyle = ''

    switch (type) {
        case 'primary':
            btnStyle = 'custom-btn-primary'
            break;
        case 'secondary':
            btnStyle = 'custom-btn-secondary'
            break;
        default:
            break;
    }    

    return (
        <div className={`custom-btn-container ${btnStyle}`} onClick={onClick}>
            {label}
        </div>
    )
}

export default Button