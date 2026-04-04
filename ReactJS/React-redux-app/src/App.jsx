import Details from "./components/Details"
import List from "./components/List"

function App() {

  return (
    <>
     <div className="grid grid-cols-2 w-100 mx-auto">
        <div className="p-2 m-2"><List/></div>
        <div className="p-2 m-2"><Details/></div>
     </div>
    </>
  )
}

export default App
