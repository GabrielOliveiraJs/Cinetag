import { BrowserRouter, Route, Routes } from "react-router-dom"
import Favoritos from "pages/Favoritos/Index"
import Inicio from "./pages/Inicio/Index"
import Player from "pages/Player/Index"
import NaoEncontrada from "pages/NaoEncontrada/Index"
import PaginaBase from "pages/PaginaBase/Index"

const AppRoutes = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<PaginaBase />}>
          <Route index element={<Inicio />}></Route>
          <Route path='favoritos' element={<Favoritos />}></Route>
          <Route path=':id' element={<Player />}></Route>
          <Route path='*' element={<NaoEncontrada />}></Route>
        </Route>
      </Routes>
    </BrowserRouter>
  )
}

export default AppRoutes