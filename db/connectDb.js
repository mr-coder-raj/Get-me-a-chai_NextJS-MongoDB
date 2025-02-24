
import mongoose from "mongoose";

const connectDb = async () => {
    try {
        const conn = await mongoose.connect(process.env.MONGO_URI, {
            useNewUrlParser: true,
        });
        console.log(`MongoDB Connected: ${conn.connection.host}`);
        return conn;

    } catch (error) {
        console.error(error.message);
        process.exit(1);
    }
}

export default connectDb;

// import mongoose from "mongoose";
// import dotenv from "dotenv";

// dotenv.config();

// const connectDb = async () => {
//     try {
//         if (!process.env.MONGO_URI) {
//             throw new Error("MONGO_URI is not defined in environment variables");
//         }

//         const conn = await mongoose.connect(process.env.MONGO_URI); // ✅ useNewUrlParser हटाया

//         console.log(`MongoDB Connected: ${conn.connection.host}`);
//     } catch (error) {
//         console.error(`Error: ${error.message}`);
//         process.exit(1);
//     }
// };

// export default connectDb;
