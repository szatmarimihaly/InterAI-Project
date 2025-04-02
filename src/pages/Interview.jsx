import React, { useState } from 'react'
import InterviewCard from '../components/InterviewCard'
import DropdownFilter from '../components/DropdownFilter';
import SearchBar from '../components/SearchBar';

const Interview = () => {

  const [category, setCategory] = useState("all");
  const [searchTerm, setSearchTerm] = useState("");
  const [dropdownOpen, setDropdownOpen] = useState(false);

  const cardData = [
    {
      id : 1,
      language : "Next.js",
      description: "The AI is gonna ask you, 5 question depending on your skill level.",
      image : "nextjs",
      category : "framework"
    },
    {
      id : 2,
      language : "Javascript",
      description: "The AI is gonna ask you questions depending on your skill level.",
      image : "javascript",
      category : "programming"
    },
    {
      id : 3,
      language : "GO",
      description: "The AI is gonna ask you questions depending on your skill level.",
      image : "go",
      category : "programming"
    },
    {
      id : 4,
      language : "CSS",
      description: "The AI is gonna ask you questions depending on your skill level.",
      image : "css",
      category : "programming"
    },
    {
      id : 5,
      language : "C++",
      description: "The AI is gonna ask you, 5 question depending on your skill level.",
      image : "cpp",
      category : "programming"
    },
    {
      id : 6,
      language : "Java",
      description: "The AI is gonna ask you, 5 question depending on your skill level.",
      image : "java",
      category : "programming"
    },
    {
      id : 7,
      language : "Python",
      description: "The AI is gonna ask you, 5 question depending on your skill level.",
      image : "python",
      category : "programming" 
    },
    {
      id : 8,
      language : "PHP",
      description: "The AI is gonna ask you, 5 question depending on your skill level.",
      image : "php",
      category : "programming"
    },
    {
      id : 9,
      language : "React",
      description: "The AI is gonna ask you, 5 question depending on your skill level.",
      image : "react",
      category : "framework"
    },
    {
      id : 10,
      language : "Ruby",
      description: "The AI is gonna ask you, 5 question depending on your skill level.",
      image : "ruby",
      category : "programming"
    },
    {
      id : 11,
      language : "Swift",
      description: "The AI is gonna ask you, 5 question depending on your skill level.",
      image : "swift",
      category : "programming"
    },
    {
      id : 12,
      language : "Tailwind",
      description: "The AI is gonna ask you, 5 question depending on your skill level.",
      image : "tailwind",
      category : "framework"
    },
    {
      id : 13,
      language : "Typescript",
      description: "The AI is gonna ask you, 5 question depending on your skill level.",
      image : "typescript",
      category : "programming"
    },
    {
      id : 14,
      language : "HTML",
      description: "The AI is gonna ask you, 5 question depending on your skill level.",
      image : "html",
      category : "programming"
    },
    {
      id : 15,
      language : "Google",
      description: "The AI is gonna ask you, 5 question depending on your skill level.",
      image : "google",
      category : "company"
    },
    {
      id : 16,
      language : "Meta",
      description: "The AI is gonna ask you, 5 question depending on your skill level.",
      image : "meta",
      category : "company"
    },
    {
      id : 17,
      language : "Microsoft",
      description: "The AI is gonna ask you, 5 question depending on your skill level.",
      image : "microsoft",
      category : "company"
    },
    {
      id : 18,
      language : "Amazon",
      description: "The AI is gonna ask you, 5 question depending on your skill level.",
      image : "amazon",
      category : "company"
    },
    {
      id : 19,
      language : "SAP",
      description: "The AI is gonna ask you, 5 question depending on your skill level.",
      image : "sap",
      category : "company"
    },
    {
      id : 20,
      language : "Cisco",
      description: "The AI is gonna ask you, 5 question depending on your skill level.",
      image : "cisco",
      category : "company"
    },
    {
      id : 21,
      language : "Salesforce",
      description: "The AI is gonna ask you, 5 question depending on your skill level.",
      image : "salesforce",
      category : "company"
    },
    {
      id : 22,
      language : "Cognizant",
      description: "The AI is gonna ask you, 5 question depending on your skill level.",
      image : "cognizant",
      category : "company"
    },
    {
      id : 23,
      language : "Dell",
      description: "The AI is gonna ask you, 5 question depending on your skill level.",
      image : "dell",
      category : "company"
    },
    {
      id : 24,
      language : "HP",
      description: "The AI is gonna ask you, 5 question depending on your skill level.",
      image : "hp",
      category : "company"
    },
    {
      id : 25,
      language : "Visa",
      description: "The AI is gonna ask you, 5 question depending on your skill level.",
      image : "visa",
      category : "company"
    }
  ]; 

  

  const filteredData = cardData.filter((card) =>
    (category === "all" || card.category === category) &&
    (searchTerm.trim() === "" || card.language.toLowerCase().includes(searchTerm.toLowerCase()))
  );

  return (
    <>
      <div className='min-h-screen'>
        <div className='flex flex-col items-center justify-evenly gap-6'>
          <SearchBar onSearch={setSearchTerm} />
          <DropdownFilter 
          setCategory={setCategory} 
          category={category} 
          dropdownOpen={dropdownOpen}
          setDropdownOpen={setDropdownOpen}/>
        </div>

        <div className={`
            grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mx-10
            transition-all duration-300 ease-in-out
            ${dropdownOpen ? 'mt-[180px]' : 'mt-12'}
        `}>
          {filteredData.map((card) => (
            <InterviewCard
              key={card.id}
              language={card.language}
              description={card.description}
              image={card.image}
            />
          ))}
        </div>
      </div>
    </>
  )
}

export default Interview