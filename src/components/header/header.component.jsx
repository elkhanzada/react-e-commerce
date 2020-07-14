import React from 'react'
import {connect} from 'react-redux'
import './header.styles.scss'
import {ReactComponent as Logo} from '../../assets/crown.svg'
import {Link} from 'react-router-dom'
import {auth} from '../../firebase/firebase.utils'
import CartIcon from '../cart-icon/cart-icon.component'
import CartDropDown from '../cart-dropdown/cart-dropdown.component'
import {createStructuredSelector} from 'reselect'
import {selectCartHidden} from  '../../redux/cart/cart.selectors'
import {selectCurrentUser} from '../../redux/user/user.selectors'

const Header = ({currentUser, hidden}) => (
    <div className = 'header'>
            <Link className = 'logo-container' to= '/react-e-commerce/'>
                <Logo className='logo' />
            </Link>
            <div className='options'>
                <Link className='option' to='/react-e-commerce/shop'>
                    SHOP
                </Link>
                <Link className='option' to='/react-e-commerce/contact'>
                    CONTACT
                </Link>
                {
                    currentUser ?(
                    <div className='option'onClick={() => auth.signOut()}>
                            SIGN OUT
                    </div>)
                    :(
                    <Link className='option' to='/react-e-commerce/signin'>SIGN IN</Link>
                    )}
                <CartIcon />
            </div>
            {
                hidden?null:<CartDropDown/>
            }
            
    </div>

)
const mapStateToProps = createStructuredSelector({
    currentUser: selectCurrentUser,
    hidden: selectCartHidden
})
export default connect(mapStateToProps)(Header)