import { useLoaderData , Link, Form} from "react-router-dom";

const Show = (props) => {
    const post = useLoaderData()

    //styles
    const div = {
        textAlign: "center",
        border: "3px solid green",
        width: "80%",
        margin: "30px auto"
    }

    return <div style = {div}>
        <div>
            <h2>Update this todo</h2>
            <Form action = {`/update/${post.id}`} method = "post">
                <input type = 'text' name="subject" placeholder="subject"
                defaultValue={post.subject}
                />
                <input type = 'text' name="details" placeholder="details"
                defaultValue={post.details}
                />
                <button>Update post</button>
            </Form>
        </div>
        <h1>{post.subject}</h1>
        <h2>{post.details}</h2>
        <Form action = {`/delete/${post.id}`} method='post'>
            <button>Delete todo</button>
        </Form>
        <Link to='/'>
            <button>GO Back</button>
        </Link>
    </div>
};
  
export default Show;