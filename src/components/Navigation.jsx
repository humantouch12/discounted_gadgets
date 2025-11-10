import Image from "next/image";


export default function Navigation() {
  return (
   <header className="w-full flex p-12 justify-center bg-[var(--color-blue)]">
    <nav className="flex w-full justify-around ">
        <div>
            <img src="/images/logo1.png" alt="Discounted Gadgets Logo"  className="w-[200px]" />
        </div>

        <div>
            <ul>
                <li><a href="" className="text-white font-[var(--font-head)] ">Products</a></li>
                <li><a href="" className="text-white">about us</a>  </li>
            </ul>
        </div>

        <div className="bg-[var(--color-yellow)] ">
            <button>Login</button>
        </div>
    </nav>
    
    
    </header>
  );
}
