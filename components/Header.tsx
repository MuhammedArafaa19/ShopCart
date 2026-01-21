
import Container from "./Container";
import Logo from "./Logo";
import HeaderMenu from "./HeaderMenu";
import SearchBar from "./SearchBar";
import CartIcon from "./CartIcon";
import FavoriteButton from "./FavoriteButton";
import SignIn from "./Signin";
import MobileMenu from "./MobileMenu";
import { auth, currentUser } from "@clerk/nextjs/server";
import { ClerkLoaded, ClerkProvider, SignedIn, UserButton } from "@clerk/nextjs";
async function Header() {
  
  const user = await currentUser()


  return (
    
    <header className=" py-5 border-b border-b-black/20 sticky top-0 z-50 bg-white/70 backdrop-blur-md ">
      <Container className="flex items-center justify-between">
        <div className="w-auto md:w-1/3 flex items-center gap-2.5 justify-start md:gap-0">
          <MobileMenu />
          <Logo />
        </div>
        <HeaderMenu />
        <div className="w-aut md:w-1/3 flex items-center justify-end gap-5">
          <SearchBar />
          <CartIcon />
          <FavoriteButton />
          <ClerkLoaded>
            <SignedIn>
              <UserButton/>
            </SignedIn>
          {!user &&  <SignIn />}
          </ClerkLoaded>
        </div>
      </Container>
    </header>
  );
}

export default Header;
