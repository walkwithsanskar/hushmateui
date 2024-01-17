import {authRoutes} from "../endpoints"
import toast from "react-hot-toast";
import {apiConnector} from "../apiConnector";
import { setToken,setLoading,setUserData} from "../../slices/authSlice";
const {
    SIGN_UP,
    LOG_IN,
    SEND_OTP,
    CHANGE_PASS,
    SEND_TOKEN,
    RESET_PASSWORD
} = authRoutes;



export function signUp(formData,navigate){

    return async(dispatch)=>{
            const toastId = toast.loading("signingUp");

            try{

                const response = await apiConnector('POST',SIGN_UP,formData,{
                    'Content-Type': 'multipart/form-data'
                });
                
                if(response?.data?.success===false){
                    toast.error("sign Up failed");
                }

                // console.log(response);
                toast.dismiss(toastId);
                toast.success("Sign Up SuccessFul");
                navigate("/login");


            }catch(error){

                toast.dismiss(toastId);
                toast.error("Failed To SignUp");
                // console.log(error);

            }


    }
}

export function logIn(formData,navigate){

    return async(dispatch)=>{
            const toastId = toast.loading("loggin In");
            try{
                setLoading(true);
                const response = await apiConnector('POST',LOG_IN,formData);
                

                if(response?.data?.success===false){
                    toast.error("log in failed");
                }


                toast.dismiss(toastId);
                // console.log(response?.data?.user);
                dispatch(setToken(response?.data?.token));
                dispatch(setUserData(response?.data?.user));
                setLoading(false);
                localStorage.setItem("token",JSON.stringify(response?.data?.token));
                localStorage.setItem("user",JSON.stringify(response?.data?.user));
                // console.log(response);
                toast.success("log in SuccessFul");
                navigate("/dashboard");
                
            }catch(error){

                toast.dismiss(toastId);
                toast.error("Failed To LogIn");
                // console.log(error);

            }


    }
}

export function sendOtp(email,setShowOtp){

    
    return async(dispatch)=>{
        const toastId = toast.loading("Sending Otp");
        try{
            
            const response = await apiConnector("POST",SEND_OTP,{
                email:email
            })
            // console.log(response);

            if(response?.data?.success===true){
                toast.dismiss(toastId);
                toast.success("Otp Sent To Mail");
                setShowOtp(true);
            }


        }catch(error){
            toast.dismiss(toastId);
            toast.error("CouldNot Send Otp");
            // console.log(error);
        }
    }


}

export function logOut(navigate){

     return async(dispatch)=>{
        try{
            localStorage.removeItem("token");
            localStorage.removeItem("user");
            dispatch(setToken(null));
            navigate("/login");
            toast.success("Logged Out");
    
        }catch(error){
            console.log(error);
        }
     }
}

export function changepass(data,token){

    return async(dispatch)=>{
        const toastId = toast.loading("Please Wait ")
        try{
            
            const response = await apiConnector("PUT",CHANGE_PASS,data,{
                "Authorization":`Bearer ${token}`
            })
            if(response?.data?.success===false){
                toast.dismiss(toastId);
                toast.error("unable to change password");
                return;
            }

            toast.dismiss(toastId);
            toast.success("password Changed");

        }catch(error){
            // console.log(error);
            toast.error("could not change password");
        }
    }
}

export function sendToken(email){

    return async(dispatch)=>{
        const toastId = toast.loading("Sending Reset Link To Mail")
        try{

            const response = await apiConnector('POST',SEND_TOKEN,{
                email
            });

            if(response?.data?.success===false){
                toast.dismiss(toastId);
                return toast.error("couldnt Send mail,retry");
            }

            toast.dismiss(toastId);
            toast.success(`Sent Reset Link to ${email}`);


        }catch(error){
            toast.dismiss("Network Error");
            // console.log(error);
        }

    }
}



export function resetPass(data,navigate,token){
    
    return async(dispatch)=>{
        const toastId = toast.loading("Resetting Password")
        try{

            const response = await apiConnector('POST',RESET_PASSWORD+`${token}`,data);
            
            if(response?.data?.success===false){
                toast.dismiss(toastId);
                return toast.error("couldnt reset password");
            }
            

            toast.dismiss(toastId);
            toast.success(`password reset successfull`);
            navigate('/login');
            

        }catch(error){
            toast.dismiss(toastId);
            // console.log(error);
        }

    }
}