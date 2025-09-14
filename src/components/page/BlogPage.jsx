import React from 'react'
import Section1BlogPage from './Section1BlogPage'
import './blogpage.css'
import ArticulosDestacados from './ArticulosDestacados'

const BlogPage = () => {
    return (
        <div>
            <ArticulosDestacados />
            <Section1BlogPage />
        </div>
    )
}

export default BlogPage