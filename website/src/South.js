import './Home.css';

const SouthIcon = () => {
    return (
     <img src={myImage} alt="My image" width={400} height={210} />;
    )
    
}

function South() {
return(
    <>
    <nav className="South">
      <header className="south-container">
        <SouthIcon></SouthIcon>
      </header>
      </nav>
    </>
)
}

export default South
