import '../App.css'

function Header(prop) {
    return(
        <div className = "Header">
            <h1>{prop.header}</h1>
        </div>
    )
}

export default Header;