const getPosts = async () => {
    
    try{

        const res = await fetch(`${process.env.BASE_URL}/api/posts`, {
            next:{
                revalidate:0
            }
        });
    
        const json = await res.json();
        return json;

    }catch (error: any){
        return error;
    }
    
};

export default getPosts;