
import getDbConnect from "./db";



//from upload-form taking userid,title,content as arguments
export default async function handleuserPost(userId: string | undefined, title: string | undefined, blogContent: string | undefined){



    
const sql = await getDbConnect()

//if content exist 
if(blogContent){
   


    //function to send in database
    const postId = await createPost(sql,userId,title,blogContent)

    //returning ppst id
   return postId
}


}

async function createPost(sql:any,userId:any,title:any,blogContent:any){


try {


    //adding post data
const insertedPost = await sql`INSERT into posts(user_id,title,content) VALUES(${userId},${title},${blogContent}) RETURNING *`
//console.log("post",insertedPost[0].id);

return insertedPost[0].id

    
} catch (error) {
    console.log(error);
    
}

}