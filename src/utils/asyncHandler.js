// asynchandler to handle errors in async functions

export const asynchandler = (fn) => async(req, res, next) => {
    try{
        await fn(req, res, next);
    }catch(err){
       console.log(err);
       
        next(err);
    }
}