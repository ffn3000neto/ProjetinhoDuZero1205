module.exports= (app)=>{

    //rota aleatoria
    app.get('/',(req,res)=>{
    //res.send('pyautogui.write ("Hello World")')
    res.render('index.ejs')
    })
}