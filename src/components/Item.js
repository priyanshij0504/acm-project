import React from 'react';

export default function App(props) {
  return (
    <>
    <div className="card mb-3" style={{width: '1000px',height:'200'}}>
    <div className="row g-0">
    <div className="col-md-4">
      <img src="..." className="img-fluid rounded-start" alt="..."/>
    </div>
    <div className="col-md-8">
      <div className="card-body">
        <h5 className="card-title">Burger</h5><br />
        <p className="card-text">₹30</p>
        <p className="card-text"><small className="text-body-secondary">Qty : 1</small></p>
      </div>
    </div>
    </div>
    </div>
    </>
  );
}