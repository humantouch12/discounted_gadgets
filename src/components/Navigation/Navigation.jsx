
import Image from "next/image";

import {Container, Content} from "@/components/Defaultstyles/Defaultstyles"
import {Image_container,Imag,Link, Linkcon, List, Btn} from "@/components/Navigation/NavigationStyles";


export default function Navigation() {
  return (
    <Container as = 'header' bg = "var(--color-blue)">
      <Content as = 'nav'  bg = "none">
          <Image_container>
            <Imag src="/images/logo1.png" alt="Discounted Gadgets Logo"  />
          </Image_container>

            <div>
              <Linkcon>
                  <List><Link href="#products">Products</Link></List>
                  <List><Link href="">about us</Link>  </List>
              </Linkcon>
          </div>

          <div>
              <Btn>
                
              </Btn>
         </div>

        
        </Content>   
    </Container>
  
  );
}
