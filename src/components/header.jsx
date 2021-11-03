/** @jsxRuntime classic */
/** @jsx jsx */
import { jsx } from 'theme-ui'
import Link from 'next/link'

const Nav = () => {
    return(
        <header sx={{'margin-top': '3rem'}}>
            <nav>
                <Link href="/">
                    Nothing Personal
                </Link>
            </nav>  
            <hr />
        </header>
    )
}

export default Nav
