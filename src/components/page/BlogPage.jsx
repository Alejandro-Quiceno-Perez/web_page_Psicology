import React from 'react'
import Section1BlogPage from './Section1BlogPage'
import './blogpage.css'
import ArticulosDestacados from './ArticulosDestacados'
import RecomendacionLibros from './RecomendacionLibros'
import RecomendacionMusica from './RecomendacionMusica'

const BlogPage = () => {
    return (
        <div>
            <RecomendacionLibros/>
            <RecomendacionMusica />
            <ArticulosDestacados />
            {/* <Section1BlogPage /> */}
        </div>
    )
}

export default BlogPage