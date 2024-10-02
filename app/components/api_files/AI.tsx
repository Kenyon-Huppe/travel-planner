
import { text } from "stream/consumers";

interface AIProps {
  prompt: string
}

const AI = async ({prompt}: AIProps) => {
  const outputText: string = '';

    console.log(process.env.GEMINI_API_KEY);


    // const { GoogleGenerativeAI } = require("@google/generative-ai");

    // // Access your API key as an environment variable (see "Set up your API key" above)
    // const genAI = new GoogleGenerativeAI(process.env.GEMINI_API_KEY);
    
    // const model = genAI.getGenerativeModel({ model: "gemini-1.5-flash"});
  
    // const fetchData = async () => {
    //     const result = await model.generateContent(prompt);
    //     const res = await result.response;
    //     setOutputText(res.text());
    //     console.log(res.text() + ' test1');
    //     console.log(outputText + ' test 2')
    // }
        
    // useEffect(() => {
    //     fetchData();
    // }, [prompt]);

  return (
    <div>{outputText}</div>
  )
}

export default AI;
