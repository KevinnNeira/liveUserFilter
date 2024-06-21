export const getUsers = async() => {
    let data = fetch ("https://6674179975872d0e0a950e53.mockapi.io/user")
    return data;
} 
export const getUserId = async(id) => {
    let data = fetch (` https://6674179975872d0e0a950e53.mockapi.io/user/${id}`)
    return data;
} 