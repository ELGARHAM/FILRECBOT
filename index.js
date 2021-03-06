'strict'

const express =require('express')
const bodyparser =require('body-parser')
const request =require('request')

const app =express()

app.set('port',(process.env.PORT|| 5000))

app.use(bodyparser.urlencoded({extended:false}))
app.use(bodyparser.json())

app.get('/',function(req,res){

	res.send("bonjour, felric a votre disposition")
})
app.get('/webhook/',function(req, res){
	if (req.query['hub.verify_token']==="bluelime"){
		res.send("the token is invalid")
	}
})

app.listen(app.get('port'),function(){
	console.log("filrec a marche")
})