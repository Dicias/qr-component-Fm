import './App.css'

function App() {
  return (
  <div className='grid min-h-screen bg-blue-100 items-center '>
    <section className='flex flex-col h-min sm:w-auto max-w-fit   bg-white p-1 mx-auto my-0 rounded-2xl  '>
      <div className='grid justify-center p-2'> 
      <img src='./image-qr-code.png' className=' w-60 rounded-xl' />
      </div>
      
      <div className='w-60 p-1 mx-2 my-3 box-content text-center'> 
    <p className=' font-custom font-bold text-xl p-1 text-slate-800'>Improve your front-end skills by building projects</p>
    <p className=' font-custom font-normal text-xs text-slate-400 m-2 p-2'>Scan the QR code to visit Frontend Mentor and take your coding skills to the next level</p>
      </div>
    </section>
  </div>  
  )
}

export default App
