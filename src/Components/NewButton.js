import React from 'react';

const Button = ({ children, onClick, variant = 'primary', size = 'medium' }) => {
  return (
    <button
      onClick={onClick}
      className={`btn btn-${variant} btn-${size}`}
      style={styles.button}
    >
      {children}
      <style jsx>{`
        .btn {
          padding: 8px 16px;
          border-radius: 4px;
          font-size: 14px;
          cursor: pointer;
          transition: background-color 0.3s ease, color 0.3s ease;
          border: none;
        }

        .btn-primary {
          background-color: #007bff;
          color: #fff;
        }

        .btn-primary:hover {
          background-color: #0056b3;
        }

        .btn-secondary {
          background-color: #6c757d;
          color: pink;
        }

        .btn-secondary:hover {
          background-color: #494f54;
        }

        .btn-danger {
          background-color: #dc3545;
          color: #fff;
        }

        .btn-danger:hover {
          background-color: #bb2d3b;
        }

        .btn-small {
          font-size: 12px;
          padding: 4px 8px;
        }

        .btn-medium {
          font-size: 14px;
          padding: 8px 16px;
          margin-top:-3.5px;
          margin-left: 230px;
          
        }

        .btn-large {
          font-size: 16px;
          padding: 12px 24px;
        }
      `}</style>
    </button>
  );
};

const styles = {
  button: {
    outline: 'none',
    border: '3px black solid'
    
    
  },
};

export default Button;