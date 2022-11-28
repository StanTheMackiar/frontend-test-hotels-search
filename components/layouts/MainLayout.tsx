import Head from "next/head"
import { FC, PropsWithChildren} from "react"
import { NavBar } from "../ui"

interface Props {
    title: string,
    description: string,
}

export const MainLayout:FC<PropsWithChildren<Props>> = ({children, description, title}) => {


  return (
    <>
        <Head>
            <title>{ title }</title>

            <meta name="description" content={ description }/>

        </Head>

        <nav>
          <NavBar />
        </nav>

        <main style={{
            margin: '80px auto',
            maxWidth: '1440px',
            padding: '0px 30px'
        }}>
            {children}
        </main>
    </>
  )
}
