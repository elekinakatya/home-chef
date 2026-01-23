
import './App.css'
import { RecipePage } from './pages/RecipesPage/RecipePage.tsx';
import {Route, Routes} from "react-router-dom";
import {Header} from "./components/layout/Header/Header.tsx";

function App() {

    return (
        <>
            <Header/>
            <main className="main">
                <Routes>
                    <Route path="/" element={<RecipePage/>}/>
                </Routes>
            </main>
        </>
    );
}

export default App
