import React from 'react'

const About = () => {
  return (
    <main className=" h-screen justify-center p-4">
      <h2 className={'pb-4 text-4xl font-bold md:text-6xl'}>About us</h2>
      <p className="text-lg md:w-1/3">
        We at PVC Strips are very Lorem ipsum dolor sit amet, consectetur
        adipisicing elit. Iure aliquid laboriosam illo reiciendis laudantium
        pariatur asperiores aspernatur nostrums.
      </p>
      <div className={'flex h-48 w-48 items-center justify-center bg-black'}>
        <span className="text-white">Aquí habrá la foto de un rollo</span>
      </div>
    </main>
  )
}

export default About
