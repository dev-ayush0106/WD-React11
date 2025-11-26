import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { FaLocationArrow, FaStar } from 'react-icons/fa';
import SkeletonCard from "./SkeletonCard";

const Project = () => {
    const PAGE_SIZE = 15;
    const [current, setCurrent] = useState(0)
    const [hotels, setHotels] = useState([]);
    const [hasMore, setHasMore] = useState(true);
    const [loading, setLoading] = useState(false);

    let url = `https://demohotelsapi.pythonanywhere.com/hotels/?limit=${PAGE_SIZE}&skip=${current * PAGE_SIZE}`

    async function hotelFetch() {
        setLoading(true); // start skeleton
        let data = await axios.get(url)
        let newData = data.data.data

        if (newData.length === 0) {
            setHasMore(false)
        } else {
            setHotels((prev) => [...prev, ...newData])
        }

        setLoading(false); // stop skeleton
    }

    useEffect(() => {
        hotelFetch()
    }, [current])

    function loadMore() {
        if (hasMore) setCurrent((prev) => prev + 1);
    }

    return (
        <>
            <div className='flex flex-wrap justify-center gap-10'>

                {/* Show skeletons while loading */}
                {loading && hotels.length === 0 && (
                    <>
                        {Array.from({ length: 3 }).map((_, i) => (
                            <SkeletonCard key={i} />
                        ))}
                    </>
                )}

                {/* Show skeletons when loading more */}
                {loading && hotels.length > 0 && (
                    <>
                        {Array.from({ length: 3 }).map((_, i) => (
                            <SkeletonCard key={`lazy-${i}`} />
                        ))}
                    </>
                )}

                {/* Actual Data */}
                {!loading && hotels.map((el, index) => (
                    <div 
                      key={index} 
                      className='bg-white w-[400px] h-[600px] border-2 border-black rounded-2xl'
                    >
                        <div>
                            <img 
                              width="400" 
                              height="200"
                              className='w-[400px] h-[300px] rounded-2xl'
                              src={el.thumbnail}
                              alt=""
                            />
                        </div>

                        <div className='px-10 flex flex-col gap-3'>
                            <div className='flex justify-between'>
                                <h3>{el.name}</h3>
                                <div className='w-[100px] mt-2 flex gap-2'>
                                    <StarRating rating={el.rating} />
                                </div>
                            </div>

                            <div className='flex gap-2'>
                                <FaLocationArrow />
                                {el.location}
                            </div>

                            <div>
                                {`${el.description.slice(0, 250)}...`}
                            </div>

                            <div className='flex justify-between'>
                                {el.price}
                                <button className='px-4 py-2 rounded-2xl bg-blue-500 text-white'>
                                    View Details
                                </button>
                            </div>
                        </div>
                    </div>
                ))}
            </div>

            {hasMore && (
                <div className='flex justify-center mt-5'>
                    <button onClick={loadMore} className='px-7 py-3 bg-green-700 text-white rounded-2xl'>
                        {loading ? "Loading..." : "Load More"}
                    </button>
                </div>
            )}
        </>
    )
}

export default Project;

function StarRating({ rating }) {
    let stars = [];
    for (let i = 1; i <= Math.ceil(rating); i++) {
        stars.push(<FaStar style={{ color: "yellow" }} />);
    }
    return stars;
}
