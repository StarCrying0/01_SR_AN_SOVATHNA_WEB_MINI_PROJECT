export  const loginService  = async (userInfo) => {
    console.log(userInfo);
    const res = await fetch('http://110.74.194.123:8989/api/todo/v1/auth/login',{
        method : 'POST',
        body : JSON.stringify(userInfo),
        headers : {
            'Content-Type' : 'application/json'
        }
    });
    const data = await res.json();
    return data;
}
export const registerService = async (userInfo) => {
    console.log(userInfo);
    try {
        const res = await fetch("http://110.74.194.123:8989/api/todo/v1/auth/sign-up",{
            method : 'POST',
            body : JSON.stringify(userInfo),
            headers : {
                'Content-Type' : 'application/json',
            },
        })
        console.log("2")
        const data = await res.json();
        return data;
    } catch (error) {   
        console.log(error);
    }
}