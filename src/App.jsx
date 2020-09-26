import React,{useState} from 'react'
import Nagendra from "./assets/Nagendra.png"
import Title from './Title';
import Header from './Header';




function App(){
    const [read,setread]=useState(false)
    function ShowToggle(){
        setread(!read)
    }
    return (
        <div>
            <Header />
            <img src = {Nagendra} alt="" className="profile" />
            <h2>Hello!</h2>
            <p>My name is Nagendra Patel</p>
            <Title />
            {read ?
                <div>
                <p>Hey there! I am Nagendra patel , 3rd year undergraduate Computer Science and Engineering at Indian Institute of Information Technology Nagpur(IIITN) . I am keenly interested in Data Structures, Algorithms, Competitive programming and Web Development.</p>
                <p>I am a sport programming enthusiast and an active participant on coding platforms like Codechef, Codeforces, geeksforgeeks and you can find me as patelnagendra0 or razing_blaze in these online platforms.</p>
                <p>For more details on the academic front, have a look at my resume</p>
                </div>                
                :null
            }   
            <button onClick={ShowToggle}>Read More</button>
        </div>
        
    )
}

export default App;