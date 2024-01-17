import React, { useState,useEffect } from 'react'
import { getAllSecret } from '../../services/operations/Secret';
import {useDispatch,useSelector} from "react-redux"
import SecretCard from '../common/SecretCard';
const Feed = () => {

  const [secrets,setSecrets] = useState([]);
  const [loading,setLoading] = useState(true);
  const dispatch = useDispatch();
  const {token} = useSelector((state)=> state.auth);

  useEffect(()=>{
    dispatch(getAllSecret(token,setSecrets,setLoading));
  },[]);
  
  return (
    <div className={`w-100% min-h-[100%] max-h-max overflow-y-auto border-3 flex  items-start relative lg:flex-row lg:flex-wrap   flex-col ${loading?"justify-center":"justify-around"}  gap-4  `}>

        {
          loading&&<div className='loader'></div>
        }
        {
          
          !loading && secrets.length>0 &&secrets.map((item,index)=>{
              return <SecretCard item={item} key={index} feed={true}/>
          })

        }
        
        {
          !loading && secrets.length==0 && <div>All Covered For Today </div>
        }


    </div>
  )
}

export default Feed