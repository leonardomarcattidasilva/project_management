import { useState } from "react";
import Text from "./components/Text";

const App = () => {
   const [state, setState] = useState(false)

   const togglestate = () => setState(prevState => !prevState)
   return <>
      <h1>React 19 - {state ? 'True' : 'False'}</h1>
      <button type="button" onClick={togglestate}>Toggle</button>
      <Text />
   </>
}

export default App;
