import EmployeeInfo from "../components/EmployeeInfo";
import Header from "../components/Header";
import '../App.css'

function EmployeePage() {
    return(
        <div className="Employee-page"> 
        <Header header="Employee" />
        <div>

        </div>
            <div>

            <Profile name="Julie Taylor" occupation="VP of Marketing"/>
            </div>
            <EmployeeInfo name="Call Office" occupation="781-000-0002"/>
            <EmployeeInfo name="Call Mobile" occupation="617-000-0002" />
            <EmployeeInfo name="SMS" occupation="617-000-0002" />
            <EmployeeInfo name="Email" occupation="jtaylor@fakemail.com" />
        </div>
    );
}


function Profile(prop) {
    return(
        <div className="Profile">
            <div className="Profile-pic">
            <img alt="profile pic" src="https://static.vecteezy.com/system/resources/previews/005/544/718/original/profile-icon-design-free-vector.jpg"></img>

            <div>
            <h3>{prop.name}</h3>
            <p>{prop.occupation}</p>
            </div>
            </div>
        </div>
    );
}
export default EmployeePage;