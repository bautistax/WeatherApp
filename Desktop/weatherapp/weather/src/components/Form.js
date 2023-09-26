import React, {useState} from 'react';

const Form = () => {
     const [city, setCity] = useState('');

     const handleSubmit = (e) => {
        e.preventDefault();
        console.log(city);
        if(city === "" || !city) return;
     };

     const handleInputChange = (e) => {
        setCity(e.target.value);
     };

     return (
        <div className='container'>
            <form onSubmit={handleSubmit}>
                <div className='mx-auto mb-3'>
                    <input type='text' className='' placeholder='City' onChange={handleInputChange} />
                    <button className=' bg-blue-700 text-black' type='submit'>Search</button>
                </div>
                
            </form>
        </div>
     );
};

export default Form; 
