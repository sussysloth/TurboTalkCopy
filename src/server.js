

const generateSentence = (keywords) => {
    //keywords is a list of words

    if(keywords[0] == "hungry") {
      return "I'm hungry. I want a snack";
    } else if (keywords[0] == "want") {
      return "I want ice cream";
    } else {
      return keywords.join(" ");
    }

};

export default generateSentence;