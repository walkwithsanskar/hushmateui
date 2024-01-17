const url = "http://localhost:4000/"
// process.env.REACT_APP_BASE_URL||
export const authRoutes = {
    SIGN_UP:url+"apiv1/auth/signup",
    LOG_IN:url + "apiv1/auth/login",
    SEND_OTP:url+"apiv1/auth/sendotp",
    CHANGE_PASS:url+"apiv1/auth/changepassword",
    SEND_TOKEN:url+"apiv1/auth/sendresettoken",
    RESET_PASSWORD:url+"apiv1/auth/resetpassword/"
}

export const secret = {
    
    CREATE_SECRET:url+"apiv1/secret/createSecret",
    GET_ALL : url + "apiv1/secret/getAllSecrets",
    DELETE_SECRET : url + "apiv1/secret/deleteSecret",
    USER_SECRET:url + "apiv1/secret/usersecret"

}