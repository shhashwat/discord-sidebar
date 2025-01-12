import MainContent from "./components/MainContent"
import Sizebar from "./components/Sidebar"
export default function App() {
  return (
    <div className="flex flex-col">
      <aside>
        <Sizebar/>
      </aside>
      <MainContent/>
    </div>
  )
}