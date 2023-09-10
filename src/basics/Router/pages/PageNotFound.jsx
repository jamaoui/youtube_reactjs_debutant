import React from 'react';

function PageNotFound() {
    return (
        <>
            <div className="d-flex align-items-center justify-content-center vh-100">
                <div className="text-center row">
                    <div className=" col-md-6">
                        <img src="https://cdn.pixabay.com/photo/2017/03/09/12/31/error-2129569__340.jpg" alt=""
                             className="img-fluid"/>
                    </div>
                    <div className=" col-md-6 mt-5">
                        <p className="fs-3"> <span className="text-danger">Opps!</span> Page not found.</p>
                        <p className="lead">
                            The page you’re looking for doesn’t exist.
                        </p>
                        <a href="/" className="btn btn-primary">Go Home</a>
                    </div>

                </div>
            </div>
        </>
    );
}

export default PageNotFound;