import React, {useState} from "react";



const SearchBar = (props) => {

    const [term,setTerm] = useState('');

    const onFormSubmit = (event) => {
        event.preventDefault();
        props.onFormSubmit(term);
    }

    const onInputChange = (event) => {
        setTerm(event.target.value);
    }


    return (
        <div className="search-bar ui segment">
            <form className="ui form" onSubmit={onFormSubmit}>
                <div className="field">
                    <label>Video Search</label>
                    <input 
                        type='text' 
                        value={term}
                        onChange={onInputChange}
                    />
                </div>
            </form>
        </div>
    );

}



export default SearchBar;