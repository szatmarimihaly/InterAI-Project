import React from 'react'
import InterviewCard from '../components/InterviewCard'

const Interview = () => {

  const cardData = [
    {
      id : 1,
      language : "Python",
      description: "The AI is gonna ask you, 5 question depending on your skill level.",
      image : "python" 
    },
    {
      id : 2,
      language : "Javascript",
      description: "The AI is gonna ask you questions depending on your skill level.",
      image : "javascript"
    },
    {
      id : 3,
      language : "GO",
      description: "The AI is gonna ask you questions depending on your skill level.",
      image : "go"
    },
    {
      id : 3,
      language : "CSS",
      description: "The AI is gonna ask you questions depending on your skill level.",
      image : "css"
    },
    {
      id : 4,
      language : "C++",
      description: "The AI is gonna ask you, 5 question depending on your skill level.",
      image : "cpp"
    },
    {
      id : 5,
      language : "Java",
      description: "The AI is gonna ask you, 5 question depending on your skill level.",
      image : "java"
    },
    {
      id : 6,
      language : "Next.js",
      description: "The AI is gonna ask you, 5 question depending on your skill level.",
      image : "nextjs"
    },
    {
      id : 7,
      language : "PHP",
      description: "The AI is gonna ask you, 5 question depending on your skill level.",
      image : "php"
    },
    {
      id : 8,
      language : "React",
      description: "The AI is gonna ask you, 5 question depending on your skill level.",
      image : "react"
    },
    {
      id : 9,
      language : "Ruby",
      description: "The AI is gonna ask you, 5 question depending on your skill level.",
      image : "ruby"
    },
    {
      id : 10,
      language : "Swift",
      description: "The AI is gonna ask you, 5 question depending on your skill level.",
      image : "swift"
    },
    {
      id : 11,
      language : "Tailwind",
      description: "The AI is gonna ask you, 5 question depending on your skill level.",
      image : "tailwind"
    },
    {
      id : 12,
      language : "Typescript",
      description: "The AI is gonna ask you, 5 question depending on your skill level.",
      image : "typescript"
    },
    {
      id : 13,
      language : "HTML",
      description: "The AI is gonna ask you, 5 question depending on your skill level.",
      image : "html"
    },
    {
      id : 14,
      language : "Google",
      description: "The AI is gonna ask you, 5 question depending on your skill level.",
      image : "google"
    },
    {
      id : 15,
      language : "Meta",
      description: "The AI is gonna ask you, 5 question depending on your skill level.",
      image : "meta"
    },
    {
      id : 16,
      language : "Microsoft",
      description: "The AI is gonna ask you, 5 question depending on your skill level.",
      image : "microsoft"
    },
    {
      id : 17,
      language : "Amazon",
      description: "The AI is gonna ask you, 5 question depending on your skill level.",
      image : "amazon"
    },
    {
      id : 18,
      language : "SAP",
      description: "The AI is gonna ask you, 5 question depending on your skill level.",
      image : "sap"
    }
  ]; 

  return (
    <>

      <h1 className='p-10 text-center text-6xl'>Interviews</h1>

      <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mr-10 ml-10'>
      {cardData.map((card) => (
      <InterviewCard  
        key={card.id}
        language={card.language} 
        description={card.description}
        image={card.image}
      />
    ))}
      </div>
    </>
  )
}

export default Interview