import React from 'react'
import './blogpage.css'
import '../../styles/stylesResponsive/responsiveBlogPage.css'

import ArticulosDestacados from './ArticulosDestacados'
import RecomendacionLibros from './RecomendacionLibros'
import RecomendacionMusica from './RecomendacionMusica'

const BlogPage = () => {
    return (
        <div>
            <RecomendacionLibros/>
            <RecomendacionMusica />
            <ArticulosDestacados />
        </div>
    )
}

export default BlogPage