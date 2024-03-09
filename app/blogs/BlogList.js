import Link from "next/link"
async function getBlogs(){
    const res = await fetch("http://localhost:4000/blogs",{
        next :{
            revalidate:0
        }
    })
    return res.json()
}

export default async function BlogList(){
    const blogs = await getBlogs()
    return(
        <>
         {blogs.map((blog)=>(
            <div key={blog.id}>
                <Link href={`/blogs/${blog.id}`}>
                <h1>{blog.title}</h1>
                <h2>{blog.author}</h2>
                <p>{blog.content}</p>
                <p>{blog.date}</p>
                </Link>
            </div>
            
         ))}
        </>
    )
}