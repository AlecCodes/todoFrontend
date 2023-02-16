import url from "./url";
import {redirect} from "react-router-dom";

export async function CreateAction({request}){
    //get formdata is a browser thing
    console.log('create action')
    const formData = await request.formData()

    //new todo
    const newTodo = {
        subject: formData.get("subject"),
        details: formData.get("details")
    }

    await fetch (url, {
        method: 'post',
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(newTodo)
    })
    console.log('create action done')

    return redirect("/")
}

export async function UpdateAction({ request, params }) {
    // get the form data
    const formData = await request.formData();
  
    // construct new todo
    const newTodo = {
      subject: formData.get("subject"),
      details: formData.get("details"),
    };
  
    // request to update route in backend
    await fetch(url + params.id + "/", {
      method: "put",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(newTodo),
    });
  
    // redirect back to the index page
    return redirect("/");
}


export async function DeleteAction({params}){
    const id = params.id

    await fetch(url + id + '/', {
        method: "delete",
    })
    return redirect("/");
}
