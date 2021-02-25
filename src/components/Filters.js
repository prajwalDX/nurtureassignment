import React, { useState } from 'react'
import './Filters.css'

export default function Filters() {

    let expertise = ["branding" , "strategy"]
    let focus_area = ["focus area" , "marketing"]
    const [tags, setTags] = useState([])
    const [search, setSearch] = useState()


    const searchHandler = (e) => {
        if(e.key=== 'Enter'){
            setSearch(e.target.value)
            setTags(tag => [...tag, search])
        }
    }
    return (
        <>
            <div className="filters sh-black bk-white">
                <div>
                    <h2 className="filters-lable">EXPERTISE</h2>
                    <div className="input-container">
                    <input type="text" onKeyDown={(e) => searchHandler(e)} value={search} className="input-search" name="" id=""/>
                    <svg
                        className="search-icon"
                        width="16"
                        height="16"
                        viewBox="0 0 16 16"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                    >
                        <path
                        d="M6.66668 12C7.84999 11.9998 8.99921 11.6037 9.93134 10.8747L12.862 13.8054L13.8047 12.8627L10.874 9.93204C11.6033 8.99982 11.9997 7.85033 12 6.66671C12 3.72604 9.60734 1.33337 6.66668 1.33337C3.72601 1.33337 1.33334 3.72604 1.33334 6.66671C1.33334 9.60737 3.72601 12 6.66668 12ZM6.66668 2.66671C8.87268 2.66671 10.6667 4.46071 10.6667 6.66671C10.6667 8.87271 8.87268 10.6667 6.66668 10.6667C4.46068 10.6667 2.66668 8.87271 2.66668 6.66671C2.66668 4.46071 4.46068 2.66671 6.66668 2.66671Z"
                        fill="#97b1ad"
                        />
                    </svg>
                    </div>
                </div>
                <div>
                    <h2 className="filters-lable">FOCUS AREA</h2>
                    <div className="input-container">
                    <input type="text" className="input-search" name="" id=""/>
                    <svg
                        className="search-icon"
                        width="16"
                        height="16"
                        viewBox="0 0 16 16"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                    >
                        <path
                        d="M6.66668 12C7.84999 11.9998 8.99921 11.6037 9.93134 10.8747L12.862 13.8054L13.8047 12.8627L10.874 9.93204C11.6033 8.99982 11.9997 7.85033 12 6.66671C12 3.72604 9.60734 1.33337 6.66668 1.33337C3.72601 1.33337 1.33334 3.72604 1.33334 6.66671C1.33334 9.60737 3.72601 12 6.66668 12ZM6.66668 2.66671C8.87268 2.66671 10.6667 4.46071 10.6667 6.66671C10.6667 8.87271 8.87268 10.6667 6.66668 10.6667C4.46068 10.6667 2.66668 8.87271 2.66668 6.66671C2.66668 4.46071 4.46068 2.66671 6.66668 2.66671Z"
                        fill="#97b1ad"
                        />
                    </svg>
                    </div>
                </div>

                <div className="">
                    <h2 className="filters-lable">RATINGS</h2>
                    <div className="input-select">
                    <div className="flx-row al-cntr">
                        <input type="checkbox" className="input-check" name="price" value='free' id=""/>
                        <div className="pd-0-4-0-2-0-0 flx-one">
                            <svg xmlns="http://www.w3.org/2000/svg" width="14" height="13" fill="none"><defs/><path fill="#F38454" d="M13.19 4.517l-3.968-.576L7.448.345a.502.502 0 00-.897 0L4.779 3.941l-3.967.576a.5.5 0 00-.277.853l2.87 2.799-.677 3.951a.5.5 0 00.725.527L7 10.78l3.549 1.866a.5.5 0 00.725-.527l-.679-3.951 2.87-2.799a.5.5 0 00-.276-.853z"/></svg>
                            <svg xmlns="http://www.w3.org/2000/svg" width="14" height="13" fill="none"><defs/><path fill="#F38454" d="M13.19 4.517l-3.968-.576L7.448.345a.502.502 0 00-.897 0L4.779 3.941l-3.967.576a.5.5 0 00-.277.853l2.87 2.799-.677 3.951a.5.5 0 00.725.527L7 10.78l3.549 1.866a.5.5 0 00.725-.527l-.679-3.951 2.87-2.799a.5.5 0 00-.276-.853z"/></svg>
                            <svg xmlns="http://www.w3.org/2000/svg" width="14" height="13" fill="none"><defs/><path fill="#F38454" d="M13.19 4.517l-3.968-.576L7.448.345a.502.502 0 00-.897 0L4.779 3.941l-3.967.576a.5.5 0 00-.277.853l2.87 2.799-.677 3.951a.5.5 0 00.725.527L7 10.78l3.549 1.866a.5.5 0 00.725-.527l-.679-3.951 2.87-2.799a.5.5 0 00-.276-.853z"/></svg>
                            <svg xmlns="http://www.w3.org/2000/svg" width="14" height="13" fill="none"><defs/><path fill="#F38454" d="M13.19 4.517l-3.968-.576L7.448.345a.502.502 0 00-.897 0L4.779 3.941l-3.967.576a.5.5 0 00-.277.853l2.87 2.799-.677 3.951a.5.5 0 00.725.527L7 10.78l3.549 1.866a.5.5 0 00.725-.527l-.679-3.951 2.87-2.799a.5.5 0 00-.276-.853z"/></svg>
                        </div>
                        <input type="checkbox" className="input-check"  name="price" value='free' id=""/>
                        <div className="flx-two pd-0-4-0-2-0-0">
                            <svg xmlns="http://www.w3.org/2000/svg" width="14" height="13" fill="none"><defs/><path fill="#F38454" d="M13.19 4.517l-3.968-.576L7.448.345a.502.502 0 00-.897 0L4.779 3.941l-3.967.576a.5.5 0 00-.277.853l2.87 2.799-.677 3.951a.5.5 0 00.725.527L7 10.78l3.549 1.866a.5.5 0 00.725-.527l-.679-3.951 2.87-2.799a.5.5 0 00-.276-.853z"/></svg>
                            <svg xmlns="http://www.w3.org/2000/svg" width="14" height="13" fill="none"><defs/><path fill="#F38454" d="M13.19 4.517l-3.968-.576L7.448.345a.502.502 0 00-.897 0L4.779 3.941l-3.967.576a.5.5 0 00-.277.853l2.87 2.799-.677 3.951a.5.5 0 00.725.527L7 10.78l3.549 1.866a.5.5 0 00.725-.527l-.679-3.951 2.87-2.799a.5.5 0 00-.276-.853z"/></svg>
                        <   svg xmlns="http://www.w3.org/2000/svg" width="14" height="13" fill="none"><defs/><path fill="#F38454" d="M13.19 4.517l-3.968-.576L7.448.345a.502.502 0 00-.897 0L4.779 3.941l-3.967.576a.5.5 0 00-.277.853l2.87 2.799-.677 3.951a.5.5 0 00.725.527L7 10.78l3.549 1.866a.5.5 0 00.725-.527l-.679-3.951 2.87-2.799a.5.5 0 00-.276-.853z"/></svg>
                        </div>                    
                    </div>
                    <div className="flx-row">
                        <input type="checkbox" className="input-check"  name="price" value='free' id=""/>
                        <div className="flx-one pd-0-4-0-2-0-0">
                            <svg xmlns="http://www.w3.org/2000/svg" width="14" height="13" fill="none"><defs/><path fill="#F38454" d="M13.19 4.517l-3.968-.576L7.448.345a.502.502 0 00-.897 0L4.779 3.941l-3.967.576a.5.5 0 00-.277.853l2.87 2.799-.677 3.951a.5.5 0 00.725.527L7 10.78l3.549 1.866a.5.5 0 00.725-.527l-.679-3.951 2.87-2.799a.5.5 0 00-.276-.853z"/></svg>
                            <svg xmlns="http://www.w3.org/2000/svg" width="14" height="13" fill="none"><defs/><path fill="#F38454" d="M13.19 4.517l-3.968-.576L7.448.345a.502.502 0 00-.897 0L4.779 3.941l-3.967.576a.5.5 0 00-.277.853l2.87 2.799-.677 3.951a.5.5 0 00.725.527L7 10.78l3.549 1.866a.5.5 0 00.725-.527l-.679-3.951 2.87-2.799a.5.5 0 00-.276-.853z"/></svg>
                        </div>
                        <input type="checkbox" className="input-check"  name="price" value='free' id=""/>
                        <div className="flx-one pd-0-4-0-2-0-0">
                            <svg xmlns="http://www.w3.org/2000/svg" width="14" height="13" fill="none"><defs/><path fill="#F38454" d="M13.19 4.517l-3.968-.576L7.448.345a.502.502 0 00-.897 0L4.779 3.941l-3.967.576a.5.5 0 00-.277.853l2.87 2.799-.677 3.951a.5.5 0 00.725.527L7 10.78l3.549 1.866a.5.5 0 00.725-.527l-.679-3.951 2.87-2.799a.5.5 0 00-.276-.853z"/></svg>
                            <svg xmlns="http://www.w3.org/2000/svg" width="14" height="13" fill="none"><defs/><path fill="#F38454" d="M13.19 4.517l-3.968-.576L7.448.345a.502.502 0 00-.897 0L4.779 3.941l-3.967.576a.5.5 0 00-.277.853l2.87 2.799-.677 3.951a.5.5 0 00.725.527L7 10.78l3.549 1.866a.5.5 0 00.725-.527l-.679-3.951 2.87-2.799a.5.5 0 00-.276-.853z"/></svg>
                        </div>
                    </div>
                    </div>
                </div>

                <div>
                    <h2 className="filters-lable">PRICE</h2>
                    <div className="flx-column pd-1-0 ">
                        <div className="pd-0-2-0">
                            <input type="checkbox" className="input-check" name="price" value='free' id=""/>
                            <label  className="filters-text pd-0-4-0-2-0-0 ">Free</label>
                        </div>
                        <div className="pd-0-2-0">
                            <input type="checkbox" className="input-check" name="price" value='free' id=""/>
                            <label className="filters-text pd-0-4-0-2-0-0 ">Less than $25</label>
                        </div>
                        <div className="pd-0-2-0">
                            <input type="checkbox" className="input-check" name="price" value='free' id=""/>
                            <label className="filters-text pd-0-4-0-2-0-0 ">$25 - $50</label>
                        </div>
                        <div className="pd-0-2-0">
                            <input type="checkbox" className="input-check" name="price" value='free' id=""/>
                            <label className="filters-text pd-0-4-0-2-0-0 ">$50 - $100</label>
                        </div>
                        <div className="pd-0-2-0">
                            <input type="checkbox" className="input-check" name="price" value='free' id=""/>
                            <label className="filters-text pd-0-4-0-2-0-0 ">More than $100</label>
                        </div>
                    </div>


                </div>

                <div>
                    <h2 className="filters-lable">SESSION AVALIBILITY</h2>
                    <div className="flx-column pd-1-0">
                        <div className="pd-0-2-0">
                            <input type="checkbox" className="input-check" name="price" value='free' id=""/>
                            <label className="filters-text pd-0-4-0-2-0-0 ">30 min</label>
                        </div>
                        <div className="pd-0-2-0">
                            <input type="checkbox" className="input-check" name="price" value='free' id=""/>
                            <label className="filters-text pd-0-4-0-2-0-0 ">60 min</label>
                        </div>
                        <div className="pd-0-2-0">
                            <input type="checkbox" className="input-check" name="price" value='free' id=""/>
                            <label className="filters-text pd-0-4-0-2-0-0 ">15 min</label>
                        </div>
                    </div>
                    


                </div>

                <div>
                    <h2 className="filters-lable">LANGUAGE</h2>
                    <div className="flx-column pd-1-0">
                        <div className="pd-0-2-0">
                            <input type="checkbox" className="input-check" name="price" value='free' id=""/>
                            <label className="filters-text pd-0-4-0-2-0-0 ">English</label>
                        </div>
                        <div className="pd-0-2-0">
                            <input type="checkbox" className="input-check" name="price" value='free' id=""/>
                            <label className="filters-text pd-0-4-0-2-0-0 ">French</label>
                        </div>
                        <div className="pd-0-2-0">
                            <input type="checkbox" className="input-check" name="price" value='free' id=""/>
                            <label className="filters-text pd-0-4-0-2-0-0 ">German</label>
                        </div>
                        <div className="pd-0-2-0">
                            <input type="checkbox" className="input-check" name="price" value='free' id=""/>
                            <label className="filters-text pd-0-4-0-2-0-0 ">Hindi</label>
                        </div>
                        <div className="pd-0-2-0">
                            <input type="checkbox" className="input-check" name="price" value='free' id=""/>
                            <label className="filters-text pd-0-4-0-2-0-0 ">Arabic</label>
                        </div>
                        <div className="pd-0-2-0">
                            <input type="checkbox" className="input-check" name="price" value='free' id=""/>
                            <label className="filters-text pd-0-4-0-2-0-0 ">Mandarin Chinese</label>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
