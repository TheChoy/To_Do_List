const express = require("express")
const app = express()
const bodyparser = require('body-parser') 
const port = 3000
app.use(bodyparser.text())

let todos = []

app.get("/getTodo", function (req, res) {
    res.json(todos)
})

app.post("/inputTodo", function(req, res){
    let todo = req.body
    todos.push(todo)
    res.json({
        massage : "Add complete",
        Todo : todos
    })
})

app.listen(3000, function () {
    console.log("Server รันอยู่ที่ port" + port)
})