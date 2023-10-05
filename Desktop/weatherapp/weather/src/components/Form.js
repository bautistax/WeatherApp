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
        <div className='container mx-auto mb-4 flex flex-col lg:flex-row justify-center items-center text-center'>
        <form onSubmit={handleSubmit} className='mb-3 lg:mb-0 space-y-3 lg:space-y-0 lg:space-x-3 flex flex-col lg:flex-row'>
          <input
            type='text'
            className='rounded-[8px] lg:w-96 h-8 text-start font-serif'
            placeholder='Search City'
            onChange={handleInputChange}
          />
          <button className='rounded-[8px] w-full lg:w-20 h-8 bg-slate-900 text-slate-300 font-serif' type='submit'>
            Search
          </button>
        </form>
      </div>
      
     );
};

export default Form; 
