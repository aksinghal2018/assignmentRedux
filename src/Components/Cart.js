import React from 'react'
import Navbar from './Navbar'
import { addToCart } from './actions/cartActions'
import { connect } from 'react-redux'

function Cart() {
    return (
        <div>
            <Navbar />
        </div>
    )
}

const mapStateToProps = (state)=>{
    console.log(state)
    return {
      items: state.items
    }
  }
const mapDispatchToProps= (dispatch)=>{
    
    return{
        addToCart: (id)=>{dispatch(addToCart(id))}
    }
}

export default connect(mapStateToProps,mapDispatchToProps)(Cart)
