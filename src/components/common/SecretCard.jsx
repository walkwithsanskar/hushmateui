import React, { useState } from 'react';
import ImageModal from './ImageModal';
import { RiDeleteBin7Line } from "react-icons/ri";
import { useDispatch,useSelector } from 'react-redux';
import { deleteSecret } from '../../services/operations/Secret';

const SecretCard = ({ item ,feed , setSecrets}) => {
  const date = new Date(item.updatedAt);
  const {token} = useSelector((state)=>state.auth);
  const dateStr = date.getDate() + '-' + (date.getMonth() + 1) + '-' + date.getFullYear();
  const dispatch = useDispatch();
  const [showModal, setShowModal] = useState(false);
  return (
    <>
      <div className='flex lg:flex-row md:flex-row flex-col border-2 border-white rounded-md hover:scale-105 duration-200 px-2 py-2 gap-2 hover:shadow-2xl lg:w-[45%] md:w-[80%] w-[90%] self-center mr-2 lg:ml-2 md:ml-2 ml-0 bg-gray-300 bg-opacity-25 lg:h-auto md:h-auto h-auto  max-h-[60vh] overflow-y-auto'>
        {item.image && <img src={item.image} className='rounded-md aspect-square lg:w-[200px] md:w-[200px] w-[160px] object-cover border-white  border-r-4 pr-2 hover:scale-105 self-center duration-200' alt='SecretImage' onClick={() => {
          setShowModal(true);
        }} />}
        <div className='flex flex-col max-w-[200px] lg:self-auto md:self-auto self-center justify-between gap-2'>
           {feed && <h1 className='text-lg text-blue-400 lg:text-start md:text-start text-center'>Shared By {item?.user_id?.uniqueUserName}</h1>}
          <p className='lg:text-start md:text-start text-center w-full text-lg  grow overflow-y-auto break-words'>{item.secret}</p>

          <div className='text-blue-600 lg:text-start md:text-start text-center flex flex-row gap-2'>createdOn {dateStr} {
            !feed&& <div onClick={()=>{
              dispatch(deleteSecret(token,{id:item._id},setSecrets));
            }}><RiDeleteBin7Line className='text-xl'/></div>
          } </div>
        </div>
      </div>
      {showModal && <ImageModal setShowModal={setShowModal} image={item.image} />}
    </>
  );
};

export default SecretCard;

