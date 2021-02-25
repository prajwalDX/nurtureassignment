import React from 'react'
import './Card.css'
import image from './images.jpg'

export default function Card({info}) {
    return (
        <>
            <div className="card bk-white sh-black">
            <hr className="hr"/>
                <div className="flx-row">
                  
                    <div className="left">
                        <img className="card-img" src={image} alt=""/>
                        <div className="flx-row pd-0-4-0">
                            <h2 className="lable mr-0-0-1 clr-light-text">Price:</h2>
                            <h2 className="lable mr-0-0-1 clr-green">{info.price}</h2>
                        </div>
                        <div className="flx-row pd-0-4-0">
                            <svg className="mr-0-0-1" xmlns="http://www.w3.org/2000/svg" width="14" height="13" fill="none"><defs/><path fill="#F38454" d="M13.19 4.517l-3.968-.576L7.448.345a.502.502 0 00-.897 0L4.779 3.941l-3.967.576a.5.5 0 00-.277.853l2.87 2.799-.677 3.951a.5.5 0 00.725.527L7 10.78l3.549 1.866a.5.5 0 00.725-.527l-.679-3.951 2.87-2.799a.5.5 0 00-.276-.853z"/></svg>
                            <h2 className="mr-0-0-1 lable clr-orange">{info.ratings}</h2>
                            <h2 className="mr-0-0-1 lable">({info.total})</h2>
                        </div>
                    </div>
                    
                    <div className="right pd-0-1-4">
                        <div className="flx-row jus-sp-bt">
                            <div>
                                <h2 className="card-name">{info.name}</h2>
                            </div>
                            <div className="flx-row al-cntr">
                                    <svg className="card-heart pd-0-1-4" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 16 16"><defs/><path fill="#f59a73" d="M8 6.236l-.894-1.789c-.222-.443-.607-1.08-1.152-1.595C5.418 2.345 4.776 2 4 2 2.324 2 1 3.326 1 4.92c0 1.211.554 2.066 1.868 3.37.337.334.721.695 1.146 1.093C5.122 10.423 6.5 11.717 8 13.447c1.5-1.73 2.878-3.024 3.986-4.064.425-.398.81-.76 1.146-1.093C14.446 6.986 15 6.131 15 4.92 15 3.326 13.676 2 12 2c-.777 0-1.418.345-1.954.852-.545.515-.93 1.152-1.152 1.595L8 6.236zm.392 8.292a.513.513 0 01-.784 0c-1.601-1.902-3.05-3.262-4.243-4.381C1.3 8.208 0 6.989 0 4.92 0 2.755 1.79 1 4 1c1.6 0 2.719 1.05 3.404 2.008.26.365.458.716.596.992a7.55 7.55 0 01.596-.992C9.281 2.049 10.4 1 12 1c2.21 0 4 1.755 4 3.92 0 2.069-1.3 3.288-3.365 5.227-1.193 1.12-2.642 2.48-4.243 4.38v.001z"/></svg>
                                    <button className="card-btn">view profile</button>
                            </div>
                        </div>
                        <div>
                            <h2 className="card-des pd-0-4-0">{info.company}</h2>
                        </div>
                        <div className="flx-row pd-1-4-0 ">
                            <div className="flx-row pd-0-1-0-0 al-cntr">
                                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="none"><defs/><g clip-path="url(#clip0)"><path fill="#9a9ea3" d="M8 3.019V2h2V1a1 1 0 00-1-1H6a1 1 0 00-1 1v1h2v1.019a6.5 6.5 0 101 0zm3.036 10.017c-.944.944-2.2 1.464-3.536 1.464-1.336 0-2.591-.52-3.536-1.464C3.02 12.092 2.5 10.836 2.5 9.5c0-1.336.52-2.591 1.464-3.536a4.967 4.967 0 013.377-1.462l-.339 4.907c-.029.411.195.591.497.591s.527-.18.497-.591l-.339-4.907c1.276.04 2.47.555 3.377 1.462.944.944 1.464 2.2 1.464 3.536 0 1.336-.52 2.591-1.464 3.536h.002z"/></g><defs><clipPath id="clip0"><path fill="#fff" d="M0 0h16v16H0z"/></clipPath></defs></svg>
                                <h2 className="lable mr-0-0-1 clr-light-text">{info.sessions}</h2>
                            </div>
                            <div className="flx-row pd-0-1-0-0 al-cntr">
                                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="none"><defs/><path stroke="#9a9ea3" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.3333" d="M8 8.6665c1.1046 0 2-.8954 2-2s-.8954-2-2-2-2 .8954-2 2 .8954 2 2 2z"/><path stroke="#9a9ea3" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.3333" d="M8 1.3333a5.3334 5.3334 0 00-5.3334 5.3333c0 1.2613.268 2.0866 1 3l4.3334 5 4.3333-5c.732-.9134 1-1.7387 1-3A5.3333 5.3333 0 008 1.3333v0z"/></svg>
                                <h2 className="lable mr-0-0-1 clr-light-text">{info.address}</h2>
                            </div>
                            <div className="flx-row pd-0-1-0-0 al-cntr">
                                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="none"><defs/><path fill="#9a9ea3" d="M3.1666 3.3334a.6666.6666 0 01.6667-.6667h8.3333a.6666.6666 0 01.6667.6667v1.3334a.6664.6664 0 01-.6667.6666.6666.6666 0 01-.6666-.6666V4H8.6666v8h.6667a.6667.6667 0 110 1.3333H6.6666a.6667.6667 0 110-1.3333h.6667v-8H4.5v.6667a.6667.6667 0 01-1.3334 0V3.3334z"/></svg>
                                <h2 className="lable mr-0-0-1 clr-light-text">{info.language}</h2>
                            </div>
                        </div>
                        <div>
                            <h2 className="lable">{info.about}</h2>
                        </div>
                        <div className="pd-1-0">
                            <ul className="flx-row clr-blue ">
                                {
                                    info.tags.map(item => 
                                        <li className="lable tags bk-light-blue">{item}</li>
                                    )
                                }
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
