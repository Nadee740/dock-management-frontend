import { motion, AnimatePresence } from 'framer-motion';
import { useState } from "react";

const BooktheViewingComponent = () => {
    const texts = [
        'Text 1', 'Text 2', 'Text 3', 'Text 4', 'Text 5',
        'Text 6', 'Text 7', 'Text 8', 'Text 9', 'Text 10',
        'Text 11', 'Text 12', 'Text 13', 'Text 14', 'Text 15',
        'Text 16', 'Text 17', 'Text 18', 'Text 19', 'Text 20'
      ];
      
const itemsPerPage = 5;
const [currentIndex, setCurrentIndex] = useState(0);

const handlePrev = () => {
  setCurrentIndex((prevIndex) => (prevIndex === 0 ? texts.length - 1 : prevIndex - 1));
};

const handleNext = () => {
  setCurrentIndex((prevIndex) => (prevIndex === texts.length - 1 ? 0 : prevIndex + 1));
};
    return (
        <div className="book-view-app">
        <button className="prev-button" onClick={handlePrev}>
          Previous
        </button>
        <button className="next-button" onClick={handleNext}>
          Next
        </button>
        <div className="text-slider">
          {texts.map((text, index) => (
            <AnimatePresence key={index}>
              {index === currentIndex && (
                <motion.div
                  className="text-container"
                  initial={{ x: 100, opacity: 0 }}
                  animate={{ x: 0, opacity: 1 }}
                  exit={{ x: -100, opacity: 0 }}
                  transition={{ type: 'tween', duration: 0.5 }}
                >
                  <h1>{text}</h1>
                </motion.div>
              )}
            </AnimatePresence>
          ))}
        </div>
     
      </div>
  
  
    );
}
 
export default BooktheViewingComponent;