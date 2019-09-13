import React from 'react';
import PropTypes from 'prop-types';

function NewBeerForm(props) {
    let _name = null;
    let _description = null;
    let _abv = null;
    let _imgurl = null;
    let _brewerIndex = null;

    function handleNewBeerFormSubmission(event) {
        event.preventDefault();
        props.onNewBeerCreation({ name: _name.value, description: _description.value, abv: _abv.value, imgurl: _imgurl.value, brewerIndex: _brewerIndex.value });
        _name.value = '';
        _description.value = '';
        _abv.value = '';
        _imgurl.value = '';

    }

    var formStyles = () => {
        return {
            width: '100vw',
            textAlign: 'center'
        }
    }

    var inputStyles = () => {
        return {
            width: '50%',
            textAlign: 'center'
        }
    }

    return (
        <div>
            <form style={formStyles()} onSubmit={handleNewBeerFormSubmission}>
                <select style={inputStyles()} name="brewerIndex" id="brewerIndex">
                    <option value="0">Select Brewery...</option>
                    <option value="0">Aslan Brewing Company</option>
                    <option value="1">Elysian Brewing Company</option>
                    <option value="2">Redhook Brewing Company</option>
                    <option value="3">Optimism Brewing Company</option>
                </select><br></br>
                <input style={inputStyles()}
                    type='text'
                    id='name'
                    placeholder='Name...'
                    ref={(input) => { _name = input; }} /><br></br>
                <textarea style={inputStyles()}
                    type='text'
                    id='description'
                    placeholder='Description...'
                    ref={(textarea) => { _description = textarea; }} /><br></br>
                <input style={inputStyles()}
                    id='abv'
                    placeholder='ABV...'
                    ref={(input) => { _abv = input; }} /><br></br>
                <button className='btn btn-outline-dark' type='submit'>Add Beer!</button>
            </form>
        </div>
    );
}

NewBeerForm.propTypes = {
    onNewBeerCreation: PropTypes.func
};

export default NewBeerForm;