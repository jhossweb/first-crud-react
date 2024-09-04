const PATH_API = "http://localhost:3000"

export const registerApi = async (value) => {
    console.log(JSON.stringify(value))
    const postRequest = await fetch(`${PATH_API}/register`, {
        method: "POST",
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({value})
    })
    
    const res = postRequest.json()
    return res
}