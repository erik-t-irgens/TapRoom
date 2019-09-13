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
        _brewerIndex.value = '';
    }

    var formStyles = () => {
        return {
            width: '100%',
            textAlign: 'center'
        }
    }

    var inputStyles = () => {
        return {
            width: '50%',
            textAlign: 'center'
        }
    }

    var containerStyle = () => {
        return {
            backgroundColor: '#616161',
            color: 'white',
            fontWeight: 'bold',
            borderRadius: '5',
            boxShadow: '2px 2px 5px black',
            height: '700'
        }
    }

    return (
        <div className='container' style={containerStyle()}>
            <form style={formStyles()} onSubmit={handleNewBeerFormSubmission}>
                <label for="brewerIndex">Select which brewery to add to</label><br />
                <select style={inputStyles()} name="brewerIndex" id="brewerIndex" ref={(input) => { _brewerIndex = input; }}>
                    <option value="0">Select Brewery...</option>
                    <option value="0">Aslan Brewing Company</option>
                    <option value="1">Elysian Brewing Company</option>
                    <option value="2">Redhook Brewing Company</option>
                    <option value="3">Optimism Brewing Company</option>
                </select><br></br>
                <label for="name">Name of the beer</label><br />
                <input style={inputStyles()}
                    type='text'
                    id='name'
                    placeholder='Name...'
                    ref={(input) => { _name = input; }} /><br></br>
                <label for="description">Describe the beer</label><br />
                <textarea style={inputStyles()}
                    type='text'
                    id='description'
                    placeholder='Description...'
                    ref={(textarea) => { _description = textarea; }} /><br></br>
                <label for="abv">ABV of the beer</label><br />
                <input style={inputStyles()}
                    id='abv'
                    placeholder='ABV...'
                    ref={(input) => { _abv = input; }} /><br></br>
                <label for="imgurl">Link to an image of the beer</label><br />
                <input style={inputStyles()}
                    type='text'
                    id='imgurl'
                    placeholder='Image URL...'
                    ref={(input) => { _imgurl = input; }} /><br></br>
                <button className='btn btn-outline-dark' type='submit'>Add Beer!</button>
            </form>
        </div>
    );
}

NewBeerForm.propTypes = {
    onNewBeerCreation: PropTypes.func
};

export default NewBeerForm;