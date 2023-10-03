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
        <div className='container mx-auto flex justify-center items-center text-center  '>
            <form onSubmit={handleSubmit}>
                <div className='mb-3 space-x-3'>
                    <input type='text' className='rounded-[8px] my-3 w-96 h-8 text-start' placeholder='Search City' onChange={handleInputChange} />
                    <button className='rounded-[8px] w-20 h-7 bg-blue-700 text-black' type='submit'>Search</button>
                </div>
                
            </form>
        </div>
     );
};

export default Form; 
