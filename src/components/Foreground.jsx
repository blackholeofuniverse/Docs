import React, { useState, useRef } from 'react'
import Card from './Card'


function Foreground() {

    const ref = useRef(null)

    const data = [
        {
            id: 1,
            desc: "The cat chased the yarn across the floor.",
            fileSize: "0.4mb",
            close: false,
            tag: {
                isOpen: true,
                title: "Download Now",
                color: "bg-zinc-600"
            }
        },
        {
            id: 2,
            desc: "Rain lashed against the windowpane all night.",
            fileSize: "0.9mb",
            close: true,
            tag: {
                isOpen: true,
                title: "Upload Now",
                color: "bg-blue-600"
            }
        },
        {
            id: 3,
            desc: "The stars twinkled brightly in the dark sky.",
            fileSize: "1.2mb",
            close: false,
            tag: {
                isOpen: true,
                title: "Download Now",
                color: "bg-green-600"
            }
        },
        {
            id: 4,
            desc: "The old clock ticked loudly in the silent room.",
            fileSize: "0.6mb",
            close: true,
            tag: {
                isOpen: true,
                title: "Upload Now",
                color: "bg-yellow-600"
            }
        },
        {
            id: 5,
            desc: "Fresh bread filled the kitchen with a warm scent.",
            fileSize: "0.2mb",
            close: false,
            tag: {
                isOpen: true,
                title: "Download Now",
                color: "bg-pink-600"
            }
        },
        {
            id: 6,
            desc: "The lost child cried for his missing mother.",
            fileSize: "1.4mb",
            close: true,
            tag: {
                isOpen: false,
                title: "Upload Now",
                color: "bg-red-600"
            }
        },
        {
            id: 7,
            desc: "Strong waves crashed against the rocky shore.",
            fileSize: "0.5mb",
            close: false,
            tag: {
                isOpen: true,
                title: "Download Now",
                color: "bg-gray-400"
            }
        },
        {
            id: 8,
            desc: "The curious puppy sniffed at the closed door.",
            fileSize: "0.1mb",
            close: true,
            tag: {
                isOpen: false,
                title: "Upload Now",
                color: "bg-red-900"
            }
        },
        {
            id: 9,
            desc: "The chef tossed the salad with a flourish.",
            fileSize: "0.9mb",
            close: false,
            tag: {
                isOpen: true,
                title: "Download Now",
                color: "bg-orange-600"
            }
        },
        {
            id: 10,
            desc: "The astronaut gazed out at the vast universe.",
            fileSize: "0.2mb",
            close: true,
            tag: {
                isOpen: false,
                title: "Upload Now",
                color: "bg-yellow-400"
            }
        },
    ];

    const [cardsData, setCardsData] = useState(data);

    const handleDeleteCard = (cardId) => {
        const filteredData = cardsData.filter((card) => card.id !== cardId);
        setCardsData(filteredData); // Update local state
      };

    return (
        <>
            <div ref={ref} className="absolute z-[3] top-0 left-0 w-full h-full flex gap-10 flex-wrap p-12 items-center justify-center">
                {data.map((card) => (
                    <Card data={card} reference={ref} key={card.id} onDeleteCard={handleDeleteCard} />
                ))}
            </div>
        </>
    )
}

export default Foreground