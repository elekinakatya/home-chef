
import './App.css'
import { RecipePage } from './pages/RecipesPage/RecipePage.tsx';
import {Navigate, Route, Routes} from "react-router-dom";
import {Header} from "./components/layout/Header/Header.tsx";
import {RecipeDetailPage} from "@/pages/RecipeDetailPage/RecipeDetailPage.tsx";

function App() {

    return (
        <>
            <Header/>
            <main className="main">
                <Routes>
                    <Route path="/" element={<Navigate to="/recipes" replace/>}/>
                    <Route path="/recipes" element={<RecipePage/>}/>
                    <Route path="/recipes/:id" element={<RecipeDetailPage/>}/>
                </Routes>
            </main>
        </>
    );
}

export default App
