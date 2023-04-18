import React    from 'react';
import Chip    from '../components/Chip';
import EmptyList    from '../components/EmptyList';
import '../index.css'
import { Link } from 'react-router-dom';

const Blog = () => {

    return (
        <>
        <Link className='blog-goback' to='/'>
            <span>&pow2jrjpo</span><span>Go Back</span>
            </Link>
            </>
    )
}

export default Blog;