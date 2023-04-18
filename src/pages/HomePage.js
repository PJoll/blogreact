import { React, useState, useEffect } from 'react';
import EmptyList from '../components/EmptyList';
import BlogList from '../components/BlogList';
import Header from '../components/Header';
import SearchBar from '../components/SearchBar';
import {BlogList } from '../config/Api';

const HomePage = ({data}) => {
    const [blogs, setBlogs] = useState([]);
    const [search, setSearch] = useState("");
   const handleSearchBar = (e) => {
    e.preventDefault();
    handleSearchResults();

   };
    const handleSearchResults = () => {};
    const handleClearSearch = () => {
        blogList().then((res) => {
            setBlogs(res);
        });
        setSearch("");
    };
    const BlogContent = (id) => {
        data(id);
    }
    return(
        <div>
            <Header />
            <SearchBar
            value={search}
            clearSearch = {handleClearSearch}
            formSubmit = {handleSearchBar}
            handleSearch = {(e) => setSearch(e.target.value)}
            />

            {!blogs.length ?<EmptyList/>: <BlogList blog = {blogs} content = {BlogContent}  />}
        </div>
    )
}

export default HomePage;