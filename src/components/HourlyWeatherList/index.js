import React, {useEffect, useState} from "react";
import {getData} from "../../api/IRequest";
import {BaseIconURL, IconSize4, HourlyURL} from "../../api/APIroutes";
import './styles.scss';

function Index() {
    const [hourlyData,setHourlyData] = useState(null);

    useEffect(()=>{
        getHourly();
        const interval = setInterval(()=>{
            getHourly();
        },300000)
        return ()=>clearInterval(interval);
    },[])

    const getHourly = async () => {
        let response = await getData(HourlyURL);
        if (response) {
            setHourlyData(response?.list)
        }
    };

    if (hourlyData !==null){
        return (
            <div className="mt-0 col-12">
                <div className="divider div-transparent div-stopper"/>

                <div className="row align-items-center justify-content-between mt-2">

                    {hourlyData.map((val,ind) => {
                        return <div className="p-2 col-xl-4 col-lg-4 col-md-6 col-sm-12 col-12" key={ind}>
                            <div className="d-flex col-12 hourly-container align-items-center justify-content-center p-4 py-2">


                                <div className="col-3">
                                    <img src={`${BaseIconURL}${val?.weather[0]?.icon}${IconSize4}`} alt=""/>
                                </div>

                                <div className="col-auto flex-grow-1 ">
                                    <span>
                                        {val?.weather[0]?.description}
                                    </span>
                                    <br/>
                                    <span>
                                        {new Date(val?.dt_txt).toLocaleString('fa-IR')}
                                    </span>
                                    <br/>
                                    <span style={{color:'#605656'}}>
                                        {`سرعت باد: ${parseInt(val?.wind?.speed)} م/ثانیه`}
                                    </span>
                                </div>

                                <div className="col-auto" style={{color:'#605656'}}>
                                    <span>
                                        &#9650; {` ${parseInt(val?.main?.temp_max)}° `}
                                    </span>
                                    <br/>
                                    <span>
                                        &#9660;  {` ${parseInt(val?.main?.temp_min)}° `}
                                    </span>
                                </div>

                                <div className="col-auto">
                                    <h2 className="">
                                        {`${parseInt(val?.main?.temp)}°  `}
                                    </h2>
                                </div>


                            </div>
                        </div>
                    })}

                </div>

            </div>
        );
    }

    return <span>Loading...</span>


}

export default Index;
