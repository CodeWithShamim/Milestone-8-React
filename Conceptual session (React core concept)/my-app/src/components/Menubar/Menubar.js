import React from 'react';
// import Shared from '../Shared/Shared';
import './Menubar.css'

const Menubar=({count}) => {
    return (
        <div>
            <div className="container">
                <div className="row menu-container">
                    <div className="col-md-2">
                        <h1>Logo</h1>
                    </div>
                    <div className="col-md-10 menu-list">
                        <li>Home</li>
                        <li>Contact</li>
                        <li>Cart <sup className='text-warning fw-bold fs-4'>{count}</sup></li>
                        <li>Login</li>
                    </div>
                </div>
            </div>

        </div>
    );
};

export default Menubar;