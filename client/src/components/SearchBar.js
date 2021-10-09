import {GoSearch} from 'react-icons/go';
import "../assets/css/SearchBar.css";
const Searchbar =(props)=>
{
    
    return(
        <div className="searchBar">
            <GoSearch className="search-icon"/>
            <input 
            type="text" 
            className="searchinput" 
            placeholder="Search for a participant..."
            onChange={(event)=>props.searchHandler(event.target.value)}
            />
        </div>
    );
}

export default Searchbar;