import { neon } from '@neondatabase/serverless';

export default async function getDbConnect() {

    //if uri doesnt exist or stop working throw this error
    if (!process.env.NEXT_PUBLIC_DATABASE_URL) {
        throw new Error("Database url is not correct or have some problem")
    }


    //else return sql to use postgres neon queries
    const sql = neon(process.env.NEXT_PUBLIC_DATABASE_URL);
    return sql;

}

