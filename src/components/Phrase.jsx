import { useState } from "react";
import { phrases } from "../DB/phrasesJSON"


export const Phrase = () => {
    let numPhrases = phrases.length;
    const [randomNum, setRandomNum] = useState(Math.floor(Math.random() * numPhrases))

    const generateNewPhrase = () => {
        let n = Math.floor(Math.random() * numPhrases);
        setRandomNum(n);
        return;
    }

    return (<>
        <div className="
            flex flex-col items-center  mx-auto w-[90%] rounded-lg bg-primary-black text-white box-border
            hover:shadow-[0_0_12px_2px_#242424] hover:shadow-black duration-300 hover:scale-105
            md:w-[765px]
            ">
            <div className="w-3/4 flex flex-col text-center box-border">
                <div className="w-14 h-14 m-2 self-center overflow-hidden rounded-full">
                    <img src={phrases[randomNum].srcImg} className="w-full h-full object-cover object-top"/>
                </div>
                <p className="my-4">{phrases[randomNum].phrase}</p>
                <span className="italic">-{phrases[randomNum].author}</span>
            </div>
        </div>
        <button className="my-4 bg-primary-green border-primary-creampie border-2 rounded-lg w-auto inline self-center p-2 text-white" onClick={generateNewPhrase}>Generar nueva frase</button>
    </> 
    )
}