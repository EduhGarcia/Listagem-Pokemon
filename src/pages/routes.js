import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { Pokemons } from './pokemons';
import { Pokemon } from './pokemon-details';

const AppRoutes = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route exact path='/' element={<Pokemons/>}/>
                <Route exact path='/pokemon/:id' element={<Pokemon/>}/>
            </Routes>
        </BrowserRouter>
    )
}

export { AppRoutes }