import React, { useState } from 'react'

const Accordion = ({header, content, ultimo=false}) => {
  const [accordionOpen, setAccordionOpen] = useState(false);

  const checkAcordionTitle = () => {
    return accordionOpen ? <span className='text-[20px]'>-</span> : <span className='text-[20px]'>+</span>;
  };

  const mg = ultimo? 'mb-0' :'mb-4'
  

  return (
    <div className={`bg-white text-slate-600 rounded-xl py-1 ${mg} hover:bg-neutral-200 `}>
      <button 
        onClick={() => setAccordionOpen(!accordionOpen)} 
        className='flex justify-between w-full p-2 font-semibold items-center'
      >
        <span className=''>{header}</span>
        {checkAcordionTitle()}
      </button>
      <div 
        className={`overflow-hidden transition-all duration-500 ease-in-out text-slate-600 text-sm ${accordionOpen ? 'max-h-40' : 'max-h-0'}`}
      >
        <div className='px-3 py-2'>{content}</div>
      </div>
    </div>
  )
}

export default Accordion;
