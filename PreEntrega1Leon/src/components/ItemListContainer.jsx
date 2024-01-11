
const Saludo = (props) => {
    return (
      <div style={containerStyle}>
        <h1 style={headingStyle}>{props.mensaje}</h1>
      </div>
    );
  };

  const containerStyle = {
    padding: '20px',
    backgroundColor: '#f0f0f0',
    textAlign: 'center',
  };
  
  const headingStyle = {
    color: '#333',
  };

  export default Saludo