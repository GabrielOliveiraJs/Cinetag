import Cabecalho from 'components/Cabecalho/Index'
import Container from 'components/Container/Index'
import FavoritosProvider from 'contextos/Favoritos'
import Rodape from 'components/Rodape/Index'
import { Outlet } from 'react-router-dom'
import React from 'react'

const PaginaBase = () => {
    return (
        <main>
            <Cabecalho />
            <FavoritosProvider>
                <Container>
                    <Outlet />
                </Container>
            </FavoritosProvider>
            <Rodape />
        </main>
    )
}

export default PaginaBase