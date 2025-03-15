const getPosts = async (userId) => {
    try {
        let response = await fetch(`https://jsonplaceholder.typicode.com/users/${userId}`);        
        if (!response.ok) throw new Error(`User fetch failed: ${response.status}`);

        let user = await response.json();

        let postsResponse = await fetch(`https://jsonplaceholder.typicode.com/posts?userId=${user.id}`);
        if (!postsResponse.ok) throw new Error(`Posts fetch failed: ${postsResponse.status}`);

        let posts = await postsResponse.json();
        console.log(posts);
        
    } catch(error) {
        console.error(error);
        alert(error.message); // Now alerts on 404 errors
    }
};

export default getPosts;