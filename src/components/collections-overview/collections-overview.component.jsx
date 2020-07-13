import React from 'react'
import CollectionPreview from '../collection-preview/collection-preview.component'
import {connect} from 'react-redux'
import {createStructuredSelector} from 'reselect'
import './collections-overview.styles.scss'
import {selectCollectionsForPreview} from '../../redux/shop/shop.selectors'

const CollectionsOverview = ({collections}) => (
    <div className='collections-overview'>
          {
                    collections.map(({id, ...others})=>(
                        <CollectionPreview key = {id} {...others}/>
                    ))
                }
    </div>
)

const mapStateToProps = createStructuredSelector({
    collections: selectCollectionsForPreview
})

export default connect(mapStateToProps)(CollectionsOverview)