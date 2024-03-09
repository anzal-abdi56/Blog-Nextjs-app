export async function generateStaticParams(){
    const res = await fetch("http://localhost:4000/blogs")

    const blogs = await res.json()
    return blogs.map((blog)=>({
        id:blog.id
    }))
}


async function getBlog(id){
    const res = await fetch(`http://localhost:4000/blogs/${id}`, {
        next: {
          revalidate: 60
        }
      })

    return res.json()
}

export default async function BlogDetails({params}) {

    const blog = await getBlog(params.id)

  return (
    <main>
        <nav>
            <h2>Blog Details</h2>
        </nav>
        <div>
            <h1>{blog.title}</h1>
            <h2>{blog.author}</h2>
            <p>{blog.content}</p>
            <p>{blog.date}</p>
        </div>
        </main>
  )
}
