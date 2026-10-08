import { useState } from "react"
import Header from "./components/Header"
import StudentProfile from "./components/StudentProfile"
import Footer from "./components/Footer"
import "./App.css"

function App() {
  const [practiceCount, setPracticeCount] = useState(0)
  const [showProfile, setShowProfile] = useState(true)

  return (
    <div>
      <Header />

      <main>
        <button onClick={() => setPracticeCount(practiceCount + 1)}>
          Complete Practice
        </button>

        <button onClick={() => setPracticeCount(0)}>
          Reset
        </button>

        <button onClick={() => setShowProfile(!showProfile)}>
          {showProfile ? "Hide Profile" : "Show Profile"}
        </button>

        {showProfile && (
          <StudentProfile
            name="Anu"
            department="CSE"
            year="3rd Year"
            practiceCount={practiceCount}
          />
        )}
      </main>

      <Footer />
    </div>
  )
}

export default App