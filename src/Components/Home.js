import React, { Component } from 'react';
import { connect } from 'react-redux'
import { addToCart } from './actions/cartActions'
import '../styles.css'
import Navbar from './Navbar';
import { useEffect } from 'react';

 class Home extends Component{
    
    handleClick = (id)=>{
        this.props.addToCart(id); 
    }
    componentDidMount(){
        console.log(this.props.addedItems)
    }
    render(){
        let itemList = this.props.items.map(item=>{
            return(

                <div className="col-lg-4 p-4">
                <div className="card" key={item.id}>
                        <div className="card-image p-4 ">
                            <img src={item.img} alt={item.title} className="image"/>
                            <span className="card-title">{item.title}</span><br />
                            <span to="/" className="btn btn-warning" onClick={()=>{this.handleClick(item.id)}}><i className="material-icons">add</i></span>
                        </div>

                        <div className="card-content">
                            <p>{item.desc}</p>
                            <p><b>Price: {item.price}$</b></p>
                        </div>
                 </div>
                 </div>

            )
        })

        return(
            <div className="p-4">
                <Navbar />
                <h3 className="center">Our items</h3>
                <div className="box">
                    <div className="row">
                    {itemList}
                    </div>
                </div>
            </div>
        )
    }
}
const mapStateToProps = (state)=>{
    
    return {
      items: state.items,
      additems:state.addedItems
    }
  }
const mapDispatchToProps= (dispatch)=>{
    
    return{
        addToCart: (id)=>{dispatch(addToCart(id))}
    }
}

export default connect(mapStateToProps,mapDispatchToProps)(Home)