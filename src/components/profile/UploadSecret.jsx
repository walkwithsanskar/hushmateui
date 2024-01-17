import React, { useState } from 'react'
import { useSelector } from "react-redux";
import { useDispatch } from 'react-redux';
import toast from "react-hot-toast";
import { useNavigate } from 'react-router-dom';
import { createSecret } from '../../services/operations/Secret';
const UploadSecret = () => {
  
  const { userData ,token} = useSelector((state) => state.auth);
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const [data, setData] = useState({
    user_id: userData?._id, image: null, secret: ""
  })
  const changeHandler = (event) => {
      const {name,value,type} = event.target;
      if(type==="file"){
        setData((prev)=>{
          return {...prev,[name]:event.target.files[0]};
        })
      }else{
        setData((prev)=>{
          return {...prev,[name]:[value]}
        })
      }
      // console.log(data);
  }
  const submitHandler = () => {

    if (data.secret === "") return toast.error("Add Secret First");

    const formData = new FormData();
    for (const key in data) {
      formData.append(key, data[key]);
    }
    // console.log(formData);
    dispatch(createSecret(token,formData,navigate));



  }

  return (
    <div className='w-100% h-[100%] overflow-y-auto border-3 flex lg:items-center  md:items-center  justify-center  lg:px-0 md:px-0  px-3'>

      <div className='border-white py-4 border-2 rounded-md flex flex-col gap-4 px-2'>
        <h1 className='text-2xl'>Hi {userData?.fName}!! Share your secret for the day</h1>
        <div>

          <label className="block mb-2 text-sm font-medium  text-black" htmlFor="file_input">Upload file</label>

          <input className=" py-2  px-3 block w-full text-md  border border-gray-300 hover:scale-95 duration-200 rounded-lg cursor-pointer text-white focus:outline-none bg-green-600 placeholder:text-white " accept="image/png, image/jpg, image/gif, image/jpeg" name="image" onChange={changeHandler} id="file_input" type="file" />

          <p className="mt-1 text-sm text-gray-500 " id="file_input_help">SVG, PNG, JPG or GIF (MAX. 800x400px).</p>
        </div>

        <div className='flex flex-col '>
                            
                            <textarea type="text" id='secret' placeholder="Enter Your Secret" rows={"10"} name="secret" value={data.secret} onChange={changeHandler} required className=' text-black  border-2  px-3 py-3 ' />
        </div>

        <button className='border-2  w-[100%] rounded-md px-3 hover:scale-95 duration-150 py-2 bg-green-600 text-white font-bold ' onClick={submitHandler}>Upload Secret</button>
      </div>

    </div>
  )
}

export default UploadSecret