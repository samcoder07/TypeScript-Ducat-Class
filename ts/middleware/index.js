const { authorization } = require("./middleware");

app.use(authorization)

app.get('admin/profile',authorization,(req,res)=>{
    res.send("<h1>Profile Page</h1>")
})