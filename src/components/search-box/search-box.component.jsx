import "./search-box.styles.css"

const SearchBox = (props) => {
    
    return (

        <div className="container">
            
            <div className="dex">
                <div className="design">
                    <div className="blue">
                        <button className="bluebtn"></button>
                    </div>
                    <div className="red">
                        <button className="redbtn"></button>
                    </div>
                    <div className="yellow">
                        <button className="yellowbtn"></button>
                    </div>
                    <div className="green">
                        <button className="greenbtn"></button>
                    </div>
                </div>

            <input 
                className = { `search-box ${props.className}`} 
                type = "search" 
                placeholder={props.placeholder} 
                onChange= {props.onChangeHandler}
            />
            </div>

        </div>
    )

}

export default SearchBox;