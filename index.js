     let ul = document.getElementById("ul")
        let inputTodo = document.getElementById("textTodo")
        let btnsubmit = document.getElementById("submitbutton")
        btnsubmit.addEventListener("click", function(){

            let newItem = document.createElement("li")
            let text = document.createElement("span")
            let edite = document.createElement("button")
            let deletebtn = document.createElement("button")

            edite.textContent = "edite"
            deletebtn.textContent = "delete"
            newItem.textContent = inputTodo.value

            newItem.appendChild(text) 
            newItem.appendChild(edite)
            newItem.appendChild(deletebtn)

            edite.addEventListener("click", function(){
                let newText = prompt("edite" , text.textContent)
                if (newText !== null && newText.trim() !== "") {
                    newItem.textContent = newText
                }
                newItem.appendChild(edite)
                newItem.appendChild(deletebtn)                
            })

            deletebtn.addEventListener("click", function(){
                newItem.remove()
            })

            ul.appendChild(newItem)
            inputTodo.value = ""
        })
        inputTodo.addEventListener("keydown", function(e){
            if(e.key === "Enter"){
                btnsubmit.click()
            }
        })