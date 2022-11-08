import React, {useEffect, useState} from "react";
import {getData} from "../../api/IRequest";
import {CurrentURL, BaseIconURL, IconSize4} from "../../api/APIroutes";
import './styles.scss';

function Index() {

    const [summary,setSummary] = useState(null);

    useEffect(()=>{
        getSummary();
        const interval = setInterval(()=>{
            getSummary();
        },300000)
        return ()=>clearInterval(interval);
    },[])

    const getSummary = async () => {
        let response = await getData(CurrentURL);
        if (response) {
            setSummary(response)
        }
    };

    if (summary !==null){
        return (
            <div className="summary-container pt-2  col-12">

                <div className="row align-items-center justify-content-between ">


                    <div className="col-xl-2 col-lg-2 col-md-2 col-sm-4 col-4 text-center">
                        <img src={`${BaseIconURL}${summary?.weather[0]?.icon}${IconSize4}`}/>

                    </div>

                    <div className="col-auto flex-grow-1 ">
                      <div>
                          {/*<h2 className=" fw-bold">{summary.name}</h2>*/}
                          <h2 style={{paddingTop:-60}}>
                            {summary?.weather[0]?.description}
                        </h2>
                      </div>
                        <span style={{color:'#605656'}}>
                            {`سرعت باد: ${parseInt(summary?.wind?.speed)} م/ثانیه`}

                        </span>
                    </div>


                    <div className="col-auto" style={{color:'#605656'}}>
                        <span>
                           &#9650; {`${parseInt(summary?.main?.temp_max)}°`}
                        </span>
                        <br/>
                        <span>
                          &#9660;  {`${parseInt(summary?.main?.temp_min)}°`}
                        </span>
                    </div>

                    <div className="col-auto">
                        <h1 className="">
                            {`${parseInt(summary?.main?.temp)}°`}
                        </h1>
                    </div>


                </div>

            </div>
        );
    }

    return <span>Loading...</span>


}

export default Index;
