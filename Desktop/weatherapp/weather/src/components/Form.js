import React, {useState} from 'react';

const Form = ({newLocation}) => {
     const [city, setCity] = useState('');

     const handleSubmit = (e) => {
        e.preventDefault();
        console.log(city);
        if(city === "" || !city) return;

        newLocation(city);
     };

     const handleInputChange = (e) => {
        setCity(e.target.value);
     };

     return (
        <div className='container text-center'>
            <form onSubmit={handleSubmit}>
                <div className='mx-auto mb-3 space-x-3'>
                    <input type='text' className='rounded-[8px] w-80 h-7 text-center' placeholder='Search City' onChange={handleInputChange} />
                    <button className='rounded-[8px] w-20 h-7 bg-blue-700 text-black' type='submit'>Search</button>
                </div>
                
            </form>
        </div>
     );
};

export default Form; 
