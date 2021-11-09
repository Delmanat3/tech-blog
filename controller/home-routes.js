const router=require('express').Router();
const {User,Blog, Comment}=require('../models')
//const fs=require('fs/promises')

router.get('/',async (req,res)=>{
     try{
  
    const resData = await Blog.findAll({
        include:[{
            model:User,
            attributes:['username','blogPost'],
        },
    ],
    });
//console.log(resData)
     const blogData = resData.map((blog) => blog.get({ plain: true }));
     console.log(blogData)

    res.render('homepage',{ 
        blogData, 
        logged_in: req.session.logged_in 
      });

    }
    catch(err){
        res.status(500).json(err)
    };
});
// [{model:User,attributes:['username']},{model:Comment,attributes:['content'],attributes:['id']}]


router.get('/:id', async (req,res)=>{
    console.log(req.body)
    try{
const resData= await Comment.findAll(req.body{
 
    })
const blogData = resData.map((blog) => blog.get({ plain: true }));
//console.log(blogData)
res.render('homepage',{ 
    ...blogData, 
    logged_in: req.session.logged_in 
  });
    }catch(err){
        res.json(err)
    }
})




// router.get('/',async (req,res)=>{
//     try{
//     const resData = await Blog.findAll({
//         include:[{
//             model:User
//         },
//     ],
//     });
//     //res.json(resData)
//     const blogData = resData.map((blog) => blog.get({ plain: true }));
//     res.json( { 
//         ...blogData, 
//         logged_in: req.session.logged_in 
//       });

//     }
//     catch(err){
//         res.status(500).json(err)
//     };
// });

// router.post('/signup',(req,res)=>{
//     try{
//     res.render('signup',{logged_in:req.session.logged_id,
//     })
//     }catch(err){
//         res.status(500).json(err)
//     }
//     })
    
    // router.get('/login',(req,res)=>{
    //     try{
    //         res.render('login',{logged_in:req.session.logged_in})
    
    //     }catch(err){
    //         res.status(500).json(err)
    //     }
    // })

router.get('/dashboard',(req,res)=>{
try{
res.render('dashboard',{logged_in:req.session.logged_id,
})
}catch(err){
    res.status(500).json(err)
}
})
router.get('/login',(req,res)=>{
    try{
        res.render('login',{logged_in:req.session.logged_in})

    }catch(err){
        res.status(500).json(err)
    }
})


module.exports=router