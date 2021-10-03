import React from 'react';

const Spinner = () => {
    return (
        <div>
            <div className="spinner-border text-info mt-5 d-flex m-auto" role="status">
                <span className="visually-hidden">Loading...</span>
            </div>
        </div>
    );
};

export default Spinner;