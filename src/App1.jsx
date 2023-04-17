import { useState } from "react";
import { ColoredMessage } from "./components/ColoredMessage";

export const App1 = () => {

    const [num, setNum] = useState(0);

    const onCLickButton = () =>{
        setNum((num) => num + 1);
    };

    return( 
      <>
        <h1 style={{color: "red"}}>こんにちは！</h1>
        <ColoredMessage color="blue">お元気ですか？</ColoredMessage>
        <ColoredMessage color="pink">元気です</ColoredMessage>
        <button onClick={onCLickButton}>ボタン</button>
        <p style={{color: "purple"}}>{num}</p>
      </>
    );
};