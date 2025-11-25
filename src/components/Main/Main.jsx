import Image from "next/image";
import {Container, Text} from "@/components/Main/MainStyles"
import TextSwap from "@/components/Defaultstyles/TextSwap"



export default function Main() {
  return (
      <Container as="main">
      <Text>
        <TextSwap
          items={[
            "Next-Gen Gadgets, Everyday Prices",
            "Quality You Need, Prices You’ll Love.",
            "Trusted Tech. Honest Discounts.",
            "Tech Made Affordable.",
          ]}
          interval={5000}
        />
      </Text>
    </Container>
       
       
   
  
  );
}
