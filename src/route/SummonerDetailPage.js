import React,{useState} from 'react';
import { Route } from 'react-router-dom';
import OtherGnb from './../components/OtherGnb.js';
import Summoner from './../components/Summoner.js';

import axios from "axios"; 


const SummonerDetailPage = (props) =>{
    let [userSpec, setUserSpec]=useState(props.location.state.spec.data.userspec.summoner_name)
    // const refresh = () => {
    //     setUserSpec(props.location.state.spec.data.userspec.summoner_name);
    // }

   
    console.log(props.location.state.spec.data.userspec);
    return(
        <div className="container">
            <OtherGnb/>
            <div>
                
                {userSpec}
            </div>
          
        </div>
    );


}
export default SummonerDetailPage;