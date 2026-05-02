import React, { useState } from 'react'
import { blogPosts } from '../../data/blog'
import { NavLink } from 'react-router-dom'
import { ArrowRight, CalendarDays, Clock, Eye, Heart } from 'lucide-react'

export default function BlogList() {

    let [search, setSearch] = useState("")
    let [currentPage, setCurrentPage] = useState(1)
    let postPerPage = 6

    let [category, setCategory] = useState("All")
    let [select, setSelect] = useState("newest")

    let categories = ["All", ...new Set(blogPosts.map((item) => item.category))]

    let blogdata = blogPosts.filter(item => {
        let matchCate = category === 'All' || item.category === category
        let matchSearch = item.title.toLowerCase().includes(search.toLowerCase())
        return matchCate && matchSearch
    })

    blogdata = blogdata.sort((a, b) => {
        if (select === "newest") return new Date(b.date) - new Date(a.date)
        if (select === "oldest") return new Date(a.date) - new Date(b.date)
        if (select === "views") return b.views - a.views
        if (select === "likes") return b.likes - a.likes
    })

    let totalPages = Math.ceil((blogdata.length) / postPerPage)
    let start = (currentPage - 1) * postPerPage
    let paginatedDots = blogdata.slice(start, start + postPerPage)

    let next = () => {
        if (currentPage < totalPages) setCurrentPage(currentPage + 1)
    }

    let prev = () => {
        if (currentPage > 1) setCurrentPage(currentPage - 1)
    }

    return (
        <>
           
            <section className='w-full bg-gradient-to-r from-amber-100 to-orange-100'>
                <div className='max-w-7xl mx-auto px-4 py-10'>

                    <h2 className='text-center text-3xl font-bold mb-6'>Our Latest Blogs</h2>

                    <div className='max-w-xl mx-auto mb-6'>
                        <input
                            type="text"
                            placeholder='Search Latest Blog'
                            onChange={(e) => setSearch(e.target.value)}
                            className='w-full px-5 py-3 rounded-xl border focus:ring-2 focus:ring-amber-400 outline-none shadow-sm'
                        />
                    </div>

                 
                    <div className='flex gap-4 overflow-x-scroll py-4'>
                        {categories.map((item, id) => (
                            <button
                                key={id}
                                onClick={() => setCategory(item)}
                                className={`px-5 py-2 rounded-full text-sm transition 
                                ${category === item
                                        ? "bg-amber-600 text-white"
                                        : "bg-white hover:bg-amber-200"}`}
                            >
                                {item}
                            </button>
                        ))}
                    </div>

                    <div className='flex justify-center py-4'>
                        <select
                            className='px-4 py-2 rounded-lg border focus:ring-2 focus:ring-amber-400'
                            onChange={(e) => setSelect(e.target.value)}
                            value={select}
                        >
                            <option value="newest">Newest</option>
                            <option value="oldest">Oldest</option>
                            <option value="likes">Most liked</option>
                            <option value="views">Most viewed</option>
                        </select>
                    </div>

                </div>
            </section>

        
            <section className='max-w-7xl mx-auto px-4 py-10'>

                <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6'>

                    {paginatedDots.map((item, index) => (
                        <div key={index} className='bg-white rounded-2xl overflow-hidden shadow-md hover:shadow-2xl transition group'>

                   
                            <div className='relative overflow-hidden'>
                                <img
                                    src={item.image}
                                    alt=""
                                    className='w-full h-52 object-cover group-hover:scale-110 transition duration-500'
                                />
                            </div>

                          
                            <div className='p-5'>

                                <span className='text-xs text-amber-500 font-semibold'>
                                    {item.category}
                                </span>

                                <p className='text-xs text-gray-500 flex items-center gap-1 mt-1'>
                                    <CalendarDays size={14} /> {item.date}
                                </p>

                                <h2 className='text-lg font-semibold mt-2 line-clamp-2'>
                                    {item.metatitle}
                                </h2>

                                <p className='text-sm text-gray-600 mt-2 line-clamp-3'>
                                    {item.metadescription}
                                </p>

                                <div className='flex justify-between text-xs text-gray-500 mt-3'>
                                    <span className='flex items-center gap-1'><Clock size={14} /> {item.readingTime}</span>
                                    <span className='flex items-center gap-1'><Eye size={14} /> {item.views}</span>
                                    <span className='flex items-center gap-1'><Heart size={14} /> {item.likes}</span>
                                </div>

                             
                                <NavLink
                                    to={`/blog/${item.slug}`}
                                    className='mt-4 inline-flex items-center gap-1 text-amber-600 font-medium hover:gap-2 transition'
                                >
                                    Read More <ArrowRight size={16} />
                                </NavLink>

                            </div>
                        </div>
                    ))}

                </div>

                <div className='flex justify-center items-center gap-4 mt-10'>
                    <button
                        className='px-5 py-2 bg-gray-200 rounded-lg hover:bg-gray-300'
                        onClick={prev}
                    >
                        Prev
                    </button>

                    <span className='font-medium'>
                        {currentPage} / {totalPages}
                    </span>

                    <button
                        className='px-5 py-2 bg-amber-500 text-white rounded-lg hover:bg-amber-600'
                        onClick={next}
                    >
                        Next
                    </button>
                </div>

            </section>
        </>
    )
}