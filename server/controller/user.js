import { Express } from "express";
import {moongoose} from 'mongoose'
const {schema} = moongoose

const userSchema = new Schema({
    username: String,
    Password: String,
})

const Login = moongoose.model("Login", userSchema)
export default Login