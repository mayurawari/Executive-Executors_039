import {connect} from "mongoose"


const connecttodb=async(url)=>{
  await connect(url);
}

export default connecttodb;