import React from 'react'
import Card from '../components/Card'
import data from '../components/data'
import Footer from '../components/Footer'
import NavBar from '../components/NavBar'


function Pricing() {
  return (<>
  <NavBar/>
  <div className='w-ful flex flex-col justify-center items-center '>

    <div className='mt-10 font-medium text-sm ' ><p>How Much Does It Cost</p></div>
    <div className='w-1/2  flex flex-col mt-1.5 justify-center items-center ' >
     <h1 className='mt-10 font-medium text-4xl '>So What Does It Cost </h1>
     <h1 className='mt-10 font-medium text-lg text-center     '>Show we are solving you the hassle of tens of hundreds of Thousands of Doller  and Doing it all fast, but don't worry, we are not overchrge you</h1>
    </div>
    <div className='flex w-full h-full relative  justify-between items-center gap-2 mt-14 pl-7 pr-7 '> 
      <div className='flex flex-col justify-center items-center gap-1 text-center'>
        <h1 className='w-24 font-medium text-2xl'>Not sure what bundle is best for you </h1>
        <h1 className='mt-3 font-medium text-sm  w-36'>quit the guess work  click here to download our guide </h1>
        <button className='text-center  bg-[#010101] text-gray-100 p-2 w-full rounded-xl '>websb guide</button>
        <h1 className='mt-3 font-medium text-sm  '>monthly order limit </h1>
        <h1 className='font-light text-sm '>unlimited affilited</h1>
      </div>
      {data.map((item, index) => (
  <Card className='' key={index} title={item.title} num={item.num} num1={item.num1} num2={item.num2} num3={item.num3} />
))}
</div>
  </div>
  <Footer title={'We Build Anything ,You Want'} title1={'Buy Now'}/>
  </>
  )
}

export default Pricing