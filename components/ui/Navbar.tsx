import { Link, Spacer, Text } from "@nextui-org/react"
import Image from "next/image";
import logo from '../../public/pokeball.jpg'
import NextLink from 'next/link'

export const Navbar = () => {


  return (
    <div style={{
      display: 'flex',
      width: '100%',
      flexDirection: 'row',
      alignItems:'center',
      justifyContent: 'start',
      padding: '0px 20px',
      backgroundColor: 'hsla(0,0%,100%,0.8)',
      boxShadow: 'rgb(2 1 1 / 10%) 0px 5px 20px -5px',
      backdropFilter: 'saturate(180%) blur(10px)'
    }} >

      <Image 
        src={ logo }
        alt='Pokemon'
        width={30}
        height={30}
      />
      <NextLink href='/' passHref>
        <Link>
          <Text color="black" h2>P</Text>
          <Text color="black" h3>okémon</Text>
        </Link>
      </NextLink>
     

     <Spacer css={{ flex: 1 }} />


     <NextLink href='/favorites' passHref>
        <Link>
          <Text color="black">Favoritos</Text>
        </Link>
      </NextLink>
     
    </div>
  )
}
