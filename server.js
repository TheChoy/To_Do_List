const express = require("express")
const app = express()

const bodyparser = require('body-parser')

const port = 3000

app.use(bodyparser.json())

let todos = []
let counter = 1

app.get("/getTodo", function (req, res) {
    res.json(todos)
})

app.post("/inputTodo", function (req, res) {
    let todo = req.body
    todo.id = counter
    counter += 1
    todos.push(todo)
    res.json({
        massage: "Add complete",
        Todo: todos
    })
})

app.put('/user/:id', function (req, res) {
    let id = req.params.id
    let updateTodo = req.body

    let selectedIndex = todos.findIndex(todo => todo.id == id)

    todos[selectedIndex].firsname = updateTodo.firsname || todos[selectedIndex].firsname
    todos[selectedIndex].lastname = updateTodo.lastname || todos[selectedIndex].lastname

    res.json({
        massage: 'update conplete',
        data: {
            todo: updateTodo,
            indexUpdate: selectedIndex
        }
    })
})

app.patch('/user/:id', function (req, res) {
    let id = req.params.id
    let updateTodo = req.body

    let selectedIndex = todos.findIndex(todo => todo.id == id)

    if (updateTodo.firsname) {
        todos[selectedIndex].firsname = updateTodo.firsname
    }
    if (updateTodo.lastname) {
        todos[selectedIndex].lastname = updateTodo.lastname
    }

    res.json({
        massage: 'update conplete',
        data: {
            todo: updateTodo,
            indexUpdate: selectedIndex
        }
    })
})

app.delete('/user/:id', function (req, res) {
    let id = req.params.id

    let selectedIndex = todos.findIndex(todo => todo.id == id)

    todos.splice(selectedIndex, 1)

    res.json({
        massage : 'deleted',
        indexDeleted : selectedIndex
    })
})

app.listen(3000, function () {
    console.log("Server รันอยู่ที่ port" + port)
})