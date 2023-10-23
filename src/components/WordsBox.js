import WordsBoxCSS from './WordsBox.module.css';
import Folder from './Folder.js';
import { useState } from 'react';

const WordsBox = (props) => {
    const [openFolder, setOpenFolder] = useState(null);

    //the folders that display in the WordsBox
    //its okay i might just have the names of the wordsCards, will prop do something
    //clever with the names to link to images with the exact same name to
    //display them

    const handleFolderClick = (folderName) => {
        if (folderName === openFolder) {
            // Clicking an open folder should close it
            setOpenFolder(null);
          } else {
            // Clicking a closed folder should open it
            setOpenFolder(folderName);
          }
    };

    const folders = [
        {
            folderName: 'Pronouns',
            contents: ['I', "me", 'you', 'we', 'us', 'he', 'she', 'they', "y'all", "them"]
        },
        {
            folderName: 'Question',
            contents: ["who", "what", "where", "when", "why", "how", "how long"]
        },
        {
            folderName: 'Animals',
            contents: ['dog', 'cat', 'bird'],
        },
        {
            folderName: 'Fruits',
            contents: ['apple', 'banana', 'orange'],
        },
        {
            folderName: 'Quick Chat',
            contents: ['yes', 'no', 'hello', 'goodbye','good','bad']
        },
        {
            folderName: 'Punctuation',
            contents: ['question', 'exclamation', 'comma']
        }, 
        {
            folderName: 'Time',
            contents: ['Time', 'now', 'later', 'today', 'yesterday', 'tomorrow', 'morning', 'noon', 'afternoon', 'evening', 'night', 'day', 'week', 'weekend', 'month']
        },
        {
            folderName: 'Actions',
            contents: ['be', 'want','get', 'put', 'give', 'hear', 'see', 'come', 'go', 'wait', 'take', 'think','make', 'cook','eat', 'feed']
        },
        {
            folderName: 'School',
            contents: ["School","pick up",'pencil', 'pen', 'computer', 'backpack', 'notebook', 'paper', 'classroom', 'teacher', 'board', "homework"]
        },
        {
            folderName: "Food",
            contents: ['want', 'ice cream', 'cookie', "breakfast", "lunch", "dinner", "hungry", "snack"]
        }, 
        {
            folderName: "Emotions",
            contents: ["am", "happy", "surprised", "sad", "angry", "confused", "tired","scared", "excited", "relaxed", "hot", "cold"]
        }, 
        {
            folderName: "Clothing",
            contents: ["wear", "shirt", "t-shirt", "trousers", "shorts", "jacket", "coat", "blouse", "dress", "sweater", "suit", "pajamas", "underwear"]
        },
        {
            folderName: "Technology",
            contents: ["need", "computer", "iPad", "charger", "gaming device", "PC", "printer","Wi-Fi", "camera", "VR headset", "USB stick", "DVD player", "battery", "headphones", "earbuds", "phone", "stereo", "radio", "lightbulb", "remote", "keyboard", "outlet"]
        },
        {
            folderName: "People",
            contents: ["mom", "dad", "teacher", "police", "doctor", "friend"]
        },
        {
            folderName: "Weather",
            contents: ["sunny", "cloudy", "rainy", "hot", "cold", "windy", "snowy", "humid"]
        },
        {
            folderName: "Sports",
            contents: ["climbing", "sport game", "swimming", "baseball", "basketball", "soccer", "football"]
        },
        {
            folderName: "Furniture",
            contents: ["desk", "bed", "chair", "table", "cabinet", "drawers"]
        },
        {
            folderName: "Numbers", 
            contents: ["zero", "one", "two", "three", "four", "five", "six", "seven", "eight", "nine"]
        },
        {
            folderName: "Transport",
            contents: ["car", "taxi", "rideshare", "plane", "bus", "boat", "bicycle", "motorcycle", "skateboard"]
        },
    ];

    return (
    <div className={WordsBoxCSS.container}>
        
        
            { openFolder === null ? (
                folders.map((data, index) => { 
                // its kinda like a for each, each bracket is a "data"
                
                            return ( //two return statements somehow works?!!
                
                            //do the image thing ASAP
                
                                <Folder 
                                    key={index} 
                                    folderName={data.folderName} 
                                    contents={data.contents}
                                    isOpen={data.folderName === openFolder} 
                                    folderClick={() => handleFolderClick(data.folderName)}
                                    wordFunc={props.func}
                                    wordClass = "larger"
                                />
                            );
            })
        ) : (
            
                    <Folder 
                        folderName={openFolder}
                        contents={folders.find((folder) => folder.folderName === openFolder)?.contents || []}
                        isOpen={true}
                        folderClick={() => handleFolderClick(openFolder)}
                        wordFunc = {props.func}
                    />
                
            )}
    </div>
    );
}

export default WordsBox