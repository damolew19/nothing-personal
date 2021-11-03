/* eslint-disable import/no-anonymous-default-export */
/** @jsxRuntime classic */
/** @jsx jsx */
import { jsx } from 'theme-ui'
import { useRouter } from 'next/router'
import Link from 'next/link'

const Articles = () => {
    const router = useRouter()
    const { id } = router.query

    return (
        <div>
            <h1>Note: {id}</h1>
        </div>
    )
}

export default Articles



