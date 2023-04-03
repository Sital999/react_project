import PropTypes from 'prop-types'

const Button = (props)=> {
    return (
        <button   style={{background:props.color }} onClick={props.onClick} className="btn">
            {props.title}
        </button>
    )
}

Button.defaultProps ={
    title:'click me',
    color:'#fff'
}

Button.propTypes = {
    title: PropTypes.string,
    color: PropTypes.string
}
export default Button
