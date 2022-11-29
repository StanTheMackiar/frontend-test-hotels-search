import Head from "next/head"
import { FC, PropsWithChildren} from "react"
import { NavBar } from "../ui"

interface Props {
    title: string,
    description: string,
}

export const MainLayout:FC<PropsWithChildren<Props>> = ({children, description = 'Buscador de hoteles', title = 'Buscar hoteles'}) => (
  
    <>
        <Head>
            <title>{ title }</title>
            <meta name="description" content={ description }/>
        </Head>

        <header>
          <nav>
            <NavBar />
          </nav>
        </header>

        <main style={{
            margin: '80px auto',
            maxWidth: '1800px',
            padding: '0px 30px'
        }}>
            {children}
        </main>
    </>
);

