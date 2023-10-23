import AppCSS from './App.module.css';
import WordsBox from './components/WordsBox';
import SentenceBar from './components/SentenceBar';
import { useState , useEffect } from 'react';
import GPTbar from './components/GPTbar';
import generateSentence from './server';

import logoImage from './turbotalk.png';

const App = () => {
  
  //selected words from the sentenceBar
  const [selectedWords, setSelectedWords] = useState([]);

  //the gpt-generated sentence
  const [sentence, setSentence] = useState('');

  const handleWordClick = (word) => {
    setSelectedWords([...selectedWords, word]);
  };

  const removeLastWord = () => {
    setSelectedWords(selectedWords.slice(0, -1));
  }

  const doNothing = () => {
    //literally does nothing
  }

  const clearEverything = () => {
    setSelectedWords([]);
  }

  //do the GPT functionality
  const handleGeneratedSentence = async () => {
    const generatedSentence = await generateSentence(selectedWords);
    setSentence(generatedSentence);
  }

  const textToSpeech = () => {
    let sent = selectedWords.join(" ");
    let speaker = new SpeechSynthesisUtterance(sent);
    window.speechSynthesis.speak(speaker);
  }

  const GPTtextToSpeech = () => {
    let speaker = new SpeechSynthesisUtterance(sentence);
    window.speechSynthesis.speak(speaker);
  }

  const pythonExec = () => {
    const python_code = `
      print('ran')
    `;

    const pyodide = window.pyodide;

    pyodide.runPython(python_code);
  }

  //every time selectedWords changes, the useEffect prints to the console
  useEffect(() => {
    console.log(selectedWords.toString());
  }, [selectedWords]);

  return (
    <div className={AppCSS.App}>

      <div className={AppCSS.container}>
        <SentenceBar selectedWords={selectedWords} func={doNothing} backFunc={removeLastWord} clearFunc={clearEverything} speechFunc={textToSpeech}/>
        <GPTbar generatedSentence={sentence} genFunc={handleGeneratedSentence} speakFunc={GPTtextToSpeech}/>
      </div>

      <div className={AppCSS.topBar}>
        <img src={logoImage} alt="TurboTalk" className={AppCSS.appName} />
      </div>

      <div className={AppCSS.container}>
        <WordsBox func={handleWordClick}/>
      </div>
      <div className={AppCSS.attribution}>
        symbols & images from opensymbols.org
      </div>
    </div>
  );
}

export default App;
