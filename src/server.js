import axios from 'axios';

const apiKey = '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';
const apiUrl = 'https://api.openai.com/v1/engines/text-davinci-002/completions';

const generateSentence = async (keywords) => {
  try {
    const response = await axios.post(apiUrl, {
      
      prompt: `Turn the following keywords into a very short, concise sentence that a 5-year-old would say: ${keywords.join(', ')} Do not invent new words! Make a complete sentence. Here are some examples:\n
      what, dinner = What are we having for dinner?
      who, pick up, school = Who is picking me up from school today?
      when, swim = When are we going to go swimming?
      tired, no, homework = I'm tired, I can't do homework.
      you, sport game, tomorrow = Are you going to the game tomorrow?
      what, wear = What am I going to wear today?
      `,
      
     //prompt: `say a sentence`,
      max_tokens: 20,  // Adjust this based on your desired sentence length
    }, {
      headers: {
        'Authorization': `Bearer ${apiKey}`,
      }
    });

    const generatedSentence = response.data.choices[0].text;
    return generatedSentence;
  } catch (error) {
        console.error('Error generating sentence:', error);
    return null;
  }
};

export default generateSentence;