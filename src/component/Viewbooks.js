import React from 'react'
import Navbar from './Navbar'

const Viewbooks = () => {                                                                                                                                                        
    var booklist={
        "Title":"Wings of fire",
        "Price":"200",
        "Author":"APJ"
    }

  return (
    <div>
        <Navbar/>                                                                               
        <div className="container">
            <div className="row g-3>                                                                                                                                                                                                                                                                                                        ">                        
                <div className="col col-12 col-sm-12 col-lg-12-col-xl-12 col-xxl-12">
                    <label for="" class="form-label">{booklist.Title}</label>
                </div>           
                <div className="col col-12 col-sm-12 col-lg-12-col-xl-12 col-xxl-12">
                    <label for="" class="form-label">{booklist.Price}</label>
                </div>            
                <div className="col col-12 col-sm-12 col-lg-12-col-xl-12 col-xxl-12">
                    <label for="" class="form-label">{booklist.Author}</label>
                </div>                                                                                                                                                                                                                              
            </div>
        </div>                                                                                                                                                                                                                                                                            
    </div>
  )
}                                                                                                                                                                                                                                                                                                                            

export default Viewbooks                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                  
