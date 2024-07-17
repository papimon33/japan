import React, {useState, useEffect} from 'react';

const shuffleArray = (array) => {
  return array.sort(() => Math.random() - 0.5);
};

function Content({ swipe, onSwipeHandled }) {
  const [data, setData] = useState(null);
  const [index, setIndex] = useState(0);
  const [exampleIndex, setExampleIndex] = useState(0);
  const [showWord, setShowWord] = useState(false);
  const [showExampleSentence, setShowExampleSentence] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      try {
        // const response = await fetch('/complexVerb.json');
        const response = await fetch(`${process.env.PUBLIC_URL}/complexVerb.json`);
        const data = await response.json();
        data.words = shuffleArray(data.words);
        setData(data);
      } catch (error) {
        console.error('Error fetching JSON:', error);
      }
    };
    
    fetchData();
  }, []);


  useEffect(() => {
    if (swipe && data) {
      setIndex((prevIndex) => (prevIndex + 1) % data.total_count);
      setShowWord(false);
      setShowExampleSentence(false);
      setExampleIndex(0);
      onSwipeHandled(); // 스와이프 처리 후 상태 초기화
    }
  }, [swipe, data, onSwipeHandled]);

  const handleNextClick = () => {
  
    if (!showWord) {
      setShowWord(true);
      return;
    }

    if (!showExampleSentence) {
      setShowExampleSentence(true);
      return;
    }

    setExampleIndex((prevIndex) => (prevIndex+1) % data.words[index].examples.length);
    setShowExampleSentence(false);

  };

  if (!data) {
    return <p>Loading...</p>;
  }

  const totalCount = data.total_count;
  const currentWord = data.words[index].word;
  const currentMeaning = data.words[index].word_meaning;
  const currentExamples = data.words[index].examples;

  return (
    <div className="content" onClick={handleNextClick}>
      <div>{index}/{totalCount}</div>
      <div className="word" style={{ visibility: showWord ? 'visible' : 'hidden' }}>{currentWord}</div>
      <div className="wordMeaning">{currentMeaning}</div>
      <div className="exampleSentence" style={{ visibility: showExampleSentence ? 'visible' : 'hidden' }}>
        {currentExamples[exampleIndex].example_sentence}
      </div>
      <div className="exampleMeaning">{currentExamples[exampleIndex].example_meaning}</div>
    </div>
  );
}

export default Content;
