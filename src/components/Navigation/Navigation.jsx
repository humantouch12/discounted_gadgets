import Image from "next/image";
import {Container, Content} from "@/components/Defaultstyles/Defaultstyles"
import {Image_container,Imag,Link, Linkcon, List} from "@/components/Navigation/NavigationStyles";


export default function Navigation() {
  return (
    <Container as = 'header' bg = "var(--color-blue)">
      <Content as = 'nav'  bg = "none">
          <Image_container>
            <Imag src="/images/logo1.png" alt="Discounted Gadgets Logo"  />
          </Image_container>

            <div>
              <Linkcon>
                  <List><Link href="">Products</Link></List>
                  <List><Link href="">about us</Link>  </List>
              </Linkcon>
          </div>

          <div>
             <button>Login</button>
         </div>

        
        </Content>   
    </Container>
//    <header className="w-full flex p-12 justify-center bg-[var(--color-blue)]">
//     <nav className="flex w-full justify-around ">
//         <div>
//             <img src="/images/logo1.png" alt="Discounted Gadgets Logo"  className="w-[200px]" />
//         </div>

//         <div>
//             <ul>
//                 <li><a href="" className="text-white font-[var(--font-head)] ">Products</a></li>
//                 <li><a href="" className="text-white">about us</a>  </li>
//             </ul>
//         </div>

//         <div className="bg-[var(--color-yellow)] ">
//             <button>Login</button>
//         </div>
//     </nav>
    
    
//     </header>
  );
}
