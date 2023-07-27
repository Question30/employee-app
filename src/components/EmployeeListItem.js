import '../App.css'

function EmployeeListItem(prop) {
    return (
        <div className="Employee">
            <div className="Profile-pic">
            <img alt="profile pic" src="https://static.vecteezy.com/system/resources/previews/005/544/718/original/profile-icon-design-free-vector.jpg"></img>

            <div >
            <h3>{prop.name}</h3>
            <p>{prop.occupation}</p>
            </div>
            </div>
        </div>
    )
}

export default EmployeeListItem;