import React, {useState} from 'react';

const Form = () => {
     const [city, setCity] = useState('');

     return (
        <div className=''>
            <form  className=''>
                <div className=''>
                    <input type='text' className='' placeholder='City' />
                    <button className='btn' type='submit'>Seacrh</button>
                </div>
                
            </form>
        </div>
     );
};

export default Form; 
