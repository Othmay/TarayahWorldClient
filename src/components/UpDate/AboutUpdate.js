import React, {useState} from 'react';
import firebase from '../../Firebase/firebase.js';

const AboutUpdate = (props) => {

		const [dataLocal, setDataLocal] = useState(props.dataLocal.filter(data => data.category === 'About').pop())

		function handleChange(event) {
				setDataLocal({...dataLocal, [event.target.name]:event.target.value})
		}
		
		function handleSubmit(event) {
				alert('site updated')
				firebase.firestore().collection('planets').doc('bW7m4GieFYVa6scwoE6i').set(dataLocal)
				event.preventDefault()
		}

		const display = (                                       
				<form>
						
						<label className='label'>Title :</label>
						<input type='text' name='title' className='textInput' 
						defaultValue={dataLocal.title}
						onChange={handleChange}/>
						<input type='submit' value='Submit' onClick={handleSubmit}/>
						<br/>
						<br/>
						<label className='label'>Content :</label>
						<textarea name='content' className='contentInput' 
						defaultValue={dataLocal.content} 
						onChange={handleChange}/>
				
				</form>)
		return (
		<div>
				{display}
		</div>
		)
}
export default AboutUpdate;
