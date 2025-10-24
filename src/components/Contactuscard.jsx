import React from 'react'

function Contactuscard({icon ,title,title1}) {
  return (
    <div className='w-1/3 flex p-5 rounded-2xl flex-col justify-center items-center gap-6 border text-center'>
<div>
  {icon}
</div>
<p>{title}</p>
<p>{title1}</p>
    </div>
  )
}

export default Contactuscard