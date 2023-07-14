import React from 'react';

export default function App(props) {
  return (
    <>
    <div className="card text-center mb-3" style={{width: '15rem'}}>
    <div className="card-body">
    <h4 className="card-text"># {props.order}</h4>
    <br />
    <a href="#" className="btn btn-primary">Go to Order</a>
    </div>
    </div>
    </>
  );
}