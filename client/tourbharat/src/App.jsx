import styles from "./style"
import Navbar from "./components/Navbar"
import Hero from "./components/Hero"
import Stats from "./components/Stats"
//import { BrowserRouter as } from "react-router-dom"

const App = () => {
  return (
    <div className="bg-primary w-full overflow-hidden">
       <div className={`${styles.paddingX} ${styles.flexCenter}`}>
        <div className={`${styles.boxWidth}`}> 
          <Navbar/>
        
         </div>
      </div>
      <div className={`bg-primary ${styles.flexStart}`}>
        <div className={`${styles.boxWidth}`}>
          <Hero/>
        </div>
      </div> 
      <div className={`bg-primary ${styles.flexStart}`}>
        <div className={`${styles.boxWidth}`}>
          <Stats/>
        </div>
      </div> 
    </div>
  )
}

export default App