import React from 'react'
import { FaRegFileAlt } from "react-icons/fa";
import { LuDownload } from "react-icons/lu";
import { IoClose } from "react-icons/io5";
import { motion } from 'framer-motion';

function Card({ data, reference, onDeleteCard }) {

    const handleCloseClick = () => {
        if (onDeleteCard) { // Check if onDeleteCard function is provided
            onDeleteCard(data.id); // Pass card ID for deletion logic (assuming data has an ID)
        } else {
            console.warn("onDeleteCard function not provided. Card deletion not implemented.");
        }
    };

    const imgUrl = "https://images.unsplash.com/photo-1528493366314-e317cd98dd52?q=80&w=1935&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"


    return (
        <motion.div

            drag dragConstraints={reference}
            whileDrag={{ scale: 1.1 }}
            dragElastic={0.2}
            dragTransition={{ bouceStiffness: 100, bounceDamping: 30 }}
            className="flex-shrink-0 relative w-60 h-72 bg-zinc-900/90 rounded-[40px] text-white px-8 py-10 overflow-hidden">
            <FaRegFileAlt />
            <p className='text-sm leading-tight mt-5 font-normal'>{data.desc}</p>
            <div className="footer absolute bottom-0 left-0 w-full">
                <div className="flex items-center justify-between px-8 py-3 mb-3">
                    <h5>{data.fileSize}</h5>
                    <span className='w-7 h-7 bg-zinc-600 rounded-full flex items-center justify-center' onClick={handleCloseClick} >
                        {data.close ? <IoClose size=".7em" color='#fff' /> : <LuDownload size=".7em" color='#fff' />}
                    </span>
                </div>
                {
                    data.tag.isOpen && (
                        <div className={`tag w-full py-4 ${data.tag.color} flex items-center justify-center`}>
                            {data.close === false ? <a href={imgUrl} download ><h3 className='text-sm font-semibold'>{data.tag.title}</h3></a> : <h3 className='text-sm font-semibold'>{data.tag.title}</h3>}
                        </div>
                    )
                }
            </div>
        </motion.div>
    )
}

export default Card