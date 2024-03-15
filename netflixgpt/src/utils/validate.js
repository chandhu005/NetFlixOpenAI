export const checkValidData=(email,password)=>{
    const isEMialValid=/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/.test(email);
    const isPasswordValid=/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[A-Za-z\d@$!%*?&]{8,}$/.test(password);
   
    if(!isEMialValid){
        return "Email ID is not valid"
    }
    if(!isPasswordValid){
        return "Password is not valid"
    }
}