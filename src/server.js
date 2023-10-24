import axios from 'axios';

const apiKey = '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';
const apiUrl = 'https://api.openai.com/v1/engines/text-davinci-002/completions';

const generateSentence = async (keywords) => {
  try {
    const response = await axios.post(apiUrl, {
      
      prompt: `Turn the following keywords into a very short, concise sentence that a five year old would say: ${keywords.join(', ')} Here are some examples:\n
      "hungry, want, snack" = I'm hungry, I want a snack.

      "want, ice cream" = I want ice cream.
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