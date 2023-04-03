import PropTypes from 'prop-types'
import Button from './Button.js'
import {useLocation} from 'react-router-dom'

const Header = ({title,addbtn,showAddButton}) => {
    const location= useLocation();

    return (
        <header >
            <h1>{title}</h1>

            { location.pathname==='/' && <Button  color={showAddButton? "red":"green"} title={showAddButton ? "Close":"Add"} onClick={addbtn}/>  }
        </header>
    )
}

Header.defaultProps = {
    title: 'React Tracker'
}

Header.propTypes ={
    title: PropTypes.string.isRequired
}
export default Header
