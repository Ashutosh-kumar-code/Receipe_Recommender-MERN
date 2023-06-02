import mongoose from 'mongoose';

const receipeSchema = new mongoose.Schema(
    {
        name: {
            type: String,
            required: true
        },
        tagline:{
            type: String,
        },
        description: {
            type: String,
            required: true,
          },
        image:{
           type: String,
          },
        components: {
            type: String,
            required: true
        },
        time:{
            type: String,        
        },
        calories:{
            type: String,   
        },
        userId:String,
    }, 
{ timestamps: true }
)

export default mongoose.model("receipe", receipeSchema);