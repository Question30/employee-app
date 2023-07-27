import '../App.css'

function EmployeeInfo (prop) {
    return(
        <div className="Info">
        <h3>{prop.name}</h3>
        <p>{prop.occupation}</p>
        </div>
    )
}

export default EmployeeInfo;