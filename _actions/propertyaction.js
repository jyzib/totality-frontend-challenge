"use server"

import propertyModel from '../models/property_Model'
import connectDB from '../config/database'

export async function getproperty(){
    try {
        await connectDB();
        const data = await propertyModel.find()
        return {data}
    } catch (error) {
        console.log(error)
    }
}