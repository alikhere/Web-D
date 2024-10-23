import { useState, useCallback, useEffect, useRef } from 'react'


function App() {
  const [length, setLength] = useState(8)
  const [numberAllowed, setNumberAllowed] = useState(false)
  const [charAllowed, setCharAllowed] = useState(false)
  const [password, setPassword] = useState("")

  //useref hook
  const passwordRef = useRef(null)
 // useCallback(fn,[dependencies]) it is use to optamize the dependency fn  whenever multiple dependencies fn changed. it take to argu. first fn. and 2nd arry of dependencies. without usecallback also we can do the project but it use ot memorrize the dependency fn. so it is optamize, whatever we want to optamize pass in dependancy array
  const passwordGenerator = useCallback(() => {
    let pass = ""
    let str = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz"

    if(numberAllowed)
      str+="0123456789"
    if(charAllowed)
      str+="!#$%&'()*+,-./:;<=>?@[\]^_`{|}~"

    for( let i = 0; i < length; i++) {
      let char = Math.floor(Math.random() * str.length + 1) //for index of char from str.
      pass+= str.charAt(char)
    }

    setPassword(pass)


  }, [length, numberAllowed, charAllowed, setPassword])

   //const copyPasswordToClipboard = () => {
    //window.navigator.clipboard.writeText(password) we can do like this too we want to copyclipboard also so use usecallback
  //}
  const copyPasswordToClipboard = useCallback(() => {
    passwordRef.current?.select()
    passwordRef.current?.setSelectionRange(0,4);
    window.navigator.clipboard.writeText(passwordRef.current.value.substring(0,4))
  }, [password])

  
  useEffect(()=> {        //use effect is use to all the the depencency fn. whnever any dependency variable changed
    passwordGenerator()
  }, [length, numberAllowed,charAllowed,passwordGenerator])

  return (
    <>
      <div className="w-full max-w-md mx-auto shadow-md rounded-lg px-4 py-3 my-8 text-orange-600 bg-gray-800">
      <h1 className='text-white text-center my-3'>Password Generator</h1>
        <div className='flex shadow rounded-lg overflow-hidden mb-4'>
          <input 
          type="text" 
          value={password} 
          className='outline-none w-full py-1 px-3 '
          ref={passwordRef}
          placeholder='password'
          readOnly
           />
          <button
          onClick={copyPasswordToClipboard} className='outline-none bg-blue-700 text-white px-3 py-0.5 shrink-0'
          >copy</button>
        </div>
        <div className='flex text-sm gap-x-2'>
          <div className='flex items-centergap-x-1'>
            <input 
            type="range"
            min={6}
            max={100}
            value={length}
            className='cursor-pointer'
            onChange={(e) => setLength(e.target.value)} />
            <label htmlFor="">Length: {length}</label>
          </div>
          <div className="flex items-center gap-x-1">
            <input
                type="checkbox"
                defaultChecked={numberAllowed}
                id="numberInput"
                onChange={() => {
                    setNumberAllowed((prev) => !prev);
                }}
            />
            <label htmlFor="">Numbers</label>
          </div>
          <div className="flex items-center gap-x-1">
            <input
                type="checkbox"
                defaultChecked={charAllowed}
                id="characterInput"
                onChange={() => {
                    setCharAllowed((prev) => !prev )
                }}
            />
            <label htmlFor="characterInput">Characters</label>
          </div>
        </div>
      </div>
    
    </>
  )
}

export default App
