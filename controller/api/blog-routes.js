const router = require('express').Router();
const {Blog,User,Comment}=require('../../models')

// router.get('/',async (req,res)=>{
//     try{
//         console.log(req)
//     const resData = await Comment.findAll({include:[{model:User,attributes:['username']},{model:Comment,attributes:['content'],attributes:['id']}]
       
// })
//     c//onsole.log(resData)
//     res.json(resData)
 
//   }catch(err){
//         res.status(500).json(err)
//     }
// }
// );

         //  const blogData = resData.map((comment) => comment.get({ plain: true }));
    //  console.log(blogData)

    //     include:[{
    //         model:User,
    //         attributes:['username']
    //     },
    // ],
module.exports=router