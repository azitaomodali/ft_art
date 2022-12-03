import React from 'react'

const Video = () => {
  return (
    <div className="flex flex-col lg:block sm:hidden" >
        <h3 className='text-lg m-4'>ویدیو برجسته</h3>
{/* <video className='rounded-lg h-60 shadow  w-full mr-4  mt-6 basis-1/4'>
<source src="https://youtu.be/92C1j4jBfbg" type="video/mp4"/>
</video> */}
    <iframe className="rounded-lg h-60 shadow  w-full mr-4  mt-6 basis-1/4" title="Iframe Example" src="https://youtu.be/92C1j4jBfbg"></iframe>
</div>
  )
}

export default Video