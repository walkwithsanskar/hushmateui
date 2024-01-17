import { secret } from "../endpoints";
import toast from "react-hot-toast";
import { apiConnector } from "../apiConnector"
const {
    CREATE_SECRET,
    GET_ALL,
    DELETE_SECRET,
    USER_SECRET
} = secret;



export function createSecret(token, data, navigate) {

    return async (dipatch) => {

        const toastId = toast.loading("Creating Secret");

        try {

            const response = await apiConnector("POST", CREATE_SECRET, data, {
                'Content-Type': 'multipart/form-data',
                'Authorization': `Bearer ${token}`
            });

            if (response?.data?.success === false) {
                toast.dismiss(toastId);
                toast.error("Only 1 secret per day");
                return;
            }
            // console.log(response);
            toast.dismiss(toastId);
            toast.success("created secret");
            navigate("/dashboard/mysecrets");



        } catch (error) {
            toast.error("Only 1 secret per day");
            toast.dismiss(toastId);
            console.log(error);

        }

    }

}

export function getUserSecret(token,setSecrets,setLoading){
    return async (dispatch) => {
        setLoading(true);
        try {

            const response = await apiConnector("GET", USER_SECRET, null, {
                "Authorization": `Bearer ${token}`
            });
            // console.log(response);
            setSecrets(response?.data?.secrets);
            setLoading(false);      

        } catch (error) {
            setLoading(false);
            console.log(error);
            toast.error("could not fecth secrets");

        }

    }
}

export function getAllSecret(token,setSecrets,setLoading){
    return async (dispatch) => {
        setLoading(true);
        try {

            const response = await apiConnector("GET", GET_ALL, null, {
                "Authorization": `Bearer ${token}`
            });
            // console.log(response);
            setSecrets(response?.data?.allSecrets);
            setLoading(false);      

        } catch (error) {
            setLoading(false);
            console.log(error);
            toast.error("could not fecth secrets");

        }

    }
}


export function deleteSecret(token,data,setSecrets){
    return async (dispatch) => {
        
        try {

            const response = await apiConnector("DELETE", DELETE_SECRET, data, {
                "Authorization": `Bearer ${token}`
            });
            // console.log("from secret",response);
            toast.success("Deleted Successfully");
            setSecrets(response?.data?.allSecrets);
            

        } catch (error) {
            
            console.log(error);
            toast.error("could not fecth secrets");

        }

    }
}

