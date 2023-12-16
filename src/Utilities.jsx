export async function fetchData() {
    try{
        const response = await fetch("https://jsonplaceholder.typicode.com/users");

        if (!response.ok) {
            throw new Error("Sorry something went wrong");
        }
        // read response body as json
        const data = await response.json();
        return data;
    }
    catch (error) {
        alert(error.message);
    }
}

export async function filterUsers(filterString) {
    //for filtering always fetch users from server
    let allUsers = await fetchData();
    let filteredUsers = allUsers.filter(user => {
        //make filtering case insensitive
        let userNameLowerCase = user.name.toLowerCase();
        let filterStringLowerCase = filterString.toLowerCase();
    
        return userNameLowerCase.includes(filterStringLowerCase);
    });

    return filteredUsers;
}