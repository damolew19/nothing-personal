/** @jsxRuntime classic */
/** @jsx jsx */
import { jsx } from 'theme-ui'
import Link from 'next/link'

const Homepage = () => {

    const notes = new Array(15).fill(1).map((e,i) => ({id: i, title: `This is my note ${i}`}))
console.log(notes)
return(
<div>
    <h1>All Articles</h1>
    <hr />
    {notes.map(note => (
            <Link key={note.id} href="/[id]" as={`/${note.id}`}>
                <a>
                    <div>
                        <strong>{note.title}</strong>
                    </div>
                </a>
            </Link>
    ))}
</div>

)


}

export default Homepage