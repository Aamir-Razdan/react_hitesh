import { useState ,useCallback,useEffect,useRef} from "react"
function App() {
const [length, setLength] = useState(7);
const [numberAllowed,setNumberAllowed]=useState(false);
const [charAllowed,setCharAllowed]=useState(false);
const [password,setPassword]=useState("");

// useRef
const passwordRef=useRef(null);


const passwordGenerator=useCallback(function(){
  let pass= ""
  let str="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz"
  if(numberAllowed) str += "0123456789";
  
  if(charAllowed) str += '!@#$%^&*()_';

  for(let i=1;i<=length;i++){
    let char = Math.floor(Math.random()*str.length+1);
    pass+=str.charAt(char)

 }
 setPassword(pass);
 
},[length,numberAllowed,charAllowed,setPassword]);

const copyPasswordToClipboard =useCallback(()=>{
  passwordRef.current?.select();
  passwordRef.current?.setSelectionRange(0,3)
  window.navigator.clipboard.writeText(password.slice(0,3))
},[password])

useEffect(()=>{
  passwordGenerator()
},[length,numberAllowed,charAllowed,passwordGenerator])
  return (
    <>
    <div className="container">
      <div className="inputsection m-auto ml-5">
        <input type="text" value={password} readOnly ref={passwordRef}/>
        <button
        onClick={copyPasswordToClipboard}>Copy</button>
      </div>
      <div className="passwordchange">
        
        <input
        type="range"
        id="rangeSlider"
        value={length}
        onChange={(e)=>{setLength(e.target.value)}}
        min={0}
        max={100}
        
        
      />
        <label htmlFor="number">Range:{length}</label>
        <input type="checkbox" defaultChecked={charAllowed} id="characterInput" onChange={()=>{
          setCharAllowed((prev)=>!prev);
        }}
          name="letter"  />
        <label htmlFor="char">char</label>
        <input type="checkbox" defaultChecked={numberAllowed} id="numberInput" onChange={()=>{
          setNumberAllowed((prev)=>!prev);
        }}
          name="number"  />
        
        <label htmlFor="number">Number</label>

      </div>
      
    </div>
      
    </>
  )
}

export default App
