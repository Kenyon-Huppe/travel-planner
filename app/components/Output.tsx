
// components
import Card from "./Card"
import AI from "./api_files/AI";


interface OutputProps {
  prompt: string
}

const Output = ({prompt}:OutputProps) => {


  return (
    <div className="mx-auto">
        <div className="">
            <AI prompt={prompt} />
        </div>

        {/* ADD IN IMG SCRAPER HERE */}
    </div>
  )
}

export default Output;
