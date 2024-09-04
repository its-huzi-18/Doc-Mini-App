/* eslint-disable react/jsx-key */
/* eslint-disable no-unused-vars */
import React,{useRef, useState} from 'react'
import Cards from './Cards'

function Foreground() {
const ref = useRef(null)

    const data = [
        {
desc:"File data is contained in files. A file is a collection of data records that exist on some input-output device.",
fileSize:".9mb",
close:false,
tag:{isOpen:true,tagTittile:"Download Now",tagColor:"green"},
        },
        {
desc:"Closed data file formats, frequently referred to as proprietary format files, have their metadata data elements hidden.",
fileSize:".8mb",
close:true,
tag:{isOpen:true,tagTittile:"Download Now",tagColor:"zinc"},
        },
        {
desc:"A data file is a computer file which stores data to be used by a computer application or system, including input and output data.",
fileSize:".4mb",
close:true,
tag:{isOpen:false,tagTittile:"Download Now",tagColor:"green"},
        },
    ];
  return (
<div ref ={ref} className='fixed top-0 left-0 z-[3] w-full h-full flex gap-10 flex-wrap p-5'>
{data.map((item,index)=>(
    <Cards data={item} reference = {ref}/>
))}
</div>
  )
}

export default Foreground