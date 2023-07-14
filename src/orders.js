import React from 'react';
import Navbar from './components/Navbar';
import Navbar from './components/Navbar';
import Card from './components/Card';
import Item from './components/Item';
import './order.css';
function order(){
    return(
    <>
    <Navbar />
    <br />
    <p style={{textAlign:'center',fontWeight:'bold',fontSize:'30px'}}>Today's Task</p>
    <div class="flexbox-container">
    <div><Card order="204"/></div>
    <div><Card order='205'/></div>
    <div><Card order='206'/></div>
    <div><Card order='207'/></div>
    </div>
    <br />
    <h5>Order #206</h5>
    <br />
    <div class="flexbox">
    <div><Item/></div><br />
    <div><Item/></div><br />
    <div><Item/></div><br />
    </div>
    <button type="button" class="btn btn-primary btn-lg" id='complete'>Complete Order</button>
    <br />
    </>
    )
}
