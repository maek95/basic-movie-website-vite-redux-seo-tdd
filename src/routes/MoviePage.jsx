import { useState } from "react"
import { useParams } from "react-router-dom";

export default function MoviePage() {

  const { id } = useParams();
  const [count, setCount] = useState(0)
  
    return (
      <>          
        <h1>Vite + React</h1>
        <div className=" text-red-500">
          <button onClick={() => setCount((count) => count + 1)}>
            movie id: {id}
          </button>
          <p>
            Edit <code>src/App.jsx</code> and save to test HMR
          </p>
        </div>
        <p className="">
          Click on the Vite and React logos to learn more
        </p>
      </>
    )
}