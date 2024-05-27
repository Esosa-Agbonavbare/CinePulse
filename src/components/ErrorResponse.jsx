import React from 'react';

const ErrorResponse = ({ message }) => {
    return (
        <div className="text-red-500 text-center mt-4">
            <p>{message}</p>
        </div>
    );
};

export default ErrorResponse;
