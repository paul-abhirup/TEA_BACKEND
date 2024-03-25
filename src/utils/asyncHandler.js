// using promise method 
const asyncHandler = (requestHandler) => {
  return (req,res,next) => {
    Promise.resolve(requestHandler(req,res,next)).catch((err) => next(err))
  }
}

// learn about node.js api errors

export {asyncHandler}


// this is the wrapper function \
// we are using the try catch method 
// const asyncHandler = (fn) => async(req,res,next) => {
//   try{
//     await fn(req,res,next)
//   } catch(error) {
//     res.status(err.code || 500).json({
//       success: false,
//       message: err.message
//     })    
//   }
// }









