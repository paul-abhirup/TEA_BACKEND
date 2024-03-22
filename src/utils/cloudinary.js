import { v2 as cloudinary } from 'cloudinary';
import fs from 'fs';

cloudinary.config({
  cloud_name: process.env.CLOUDINARY_NAME,
  api_key: process.env.CLOUDINARY_API_KEY,
  api_secret: process.env.CLOUDINARY_API_SECRET
});

// normal approach 
// cloudinary.uploader.upload("https://upload.wikimedia.org/wikipedia/commons/a/ae/Olympic_flag.jpg",
//   { public_id: "olympic_flag" },
//   function (error, result) { console.log(result); });

// using a organized approach
const uploadOnCloudinary = async (localFilePath) => {
  try {
    if(!localFilePath) return null ;
    const response = await cloudinary.uploader.upload(localFilePath, {
      resource_type: auto
    })
    console.log("file is uploaded on cloudinary ", response.url);
    fs.unlinkSync(localFilePath);
    return response ;
  } catch (error) {
    //judi catch hoy mane file upload hoyni cloudinary te but it has localstorage path means file ta server e ache
    // so its imp to flush it out //as many malicious or corrupted files may stay in the server
    fs.unlinkSync(localFilePath)
    return null;
  }
}

export { uploadOnCloudinary }