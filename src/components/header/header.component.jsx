import React from 'react'
import {connect} from 'react-redux'
import {HeaderContainer, LogoContainer, OptionsContainer, OptionLink} from './header.styles'
import {ReactComponent as Logo} from '../../assets/crown.svg'
import CartIcon from '../cart-icon/cart-icon.component'
import CartDropDown from '../cart-dropdown/cart-dropdown.component'
import {createStructuredSelector} from 'reselect'
import {selectCartHidden} from  '../../redux/cart/cart.selectors'
import {selectCurrentUser} from '../../redux/user/user.selectors'
import {signOutStart} from '../../redux/user/user.actions'

const Header = ({currentUser, hidden, signOutStart}) => (
    <HeaderContainer>
            <LogoContainer to= '/react-e-commerce/'>
                <Logo className='logo' />
            </LogoContainer>
            <OptionsContainer>
                <OptionLink  to='/react-e-commerce/shop'>
                    SHOP
                </OptionLink>
                <OptionLink  to='/react-e-commerce/contact'>
                    CONTACT
                </OptionLink>
                {
                    currentUser ?(
                    <OptionLink as='div' onClick={signOutStart}>
                            SIGN OUT
                    </OptionLink>)
                    :(
                    <OptionLink to='/react-e-commerce/signin'>SIGN IN</OptionLink>
                    )}
                <CartIcon />
            </OptionsContainer>
            {
                hidden?null:<CartDropDown/>
            }
            
    </HeaderContainer>

)
const mapDispatchToProps = dispatch => ({
    signOutStart: () => dispatch(signOutStart())
})
const mapStateToProps = createStructuredSelector({
    currentUser: selectCurrentUser,
    hidden: selectCartHidden
})
export default connect(mapStateToProps, mapDispatchToProps)(Header)