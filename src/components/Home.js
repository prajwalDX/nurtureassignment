import React from 'react'
import Card from './Card'
import Filters from './Filters'
import './Home.css'
import data from './data.json'

export default function Home() {
    return (
        <>
        <div className="container">
            <div className="flx-row">

                <div className="home-left">
                    <h2 className="home-lable">Filters</h2>
                    <Filters />
                </div>

                <div className="home-right">
                    <div className="flx-row jus-sp-bt ">
                        <h2 className="home-lable">Featured Experts</h2>
                        <select className="home-select">
                            <option value="best_match">Best Match</option>
                        </select>
                    </div>
                    <div>
                        {
                            data.map(info => 
                                <Card info={info}/>
                            )
                        }
                        
                    </div>
                </div>
            </div>
            </div>
        </>
    )
}
