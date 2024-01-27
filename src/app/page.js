import Image from "next/image";
import SignUp from "@/app/signup/page"
import SignIn from "@/app/signin/page";
import RootLayout from "./layout";

export default function Home() {
  return (
    <main >
      <RootLayout>
        <SignUp/>
        <SignIn/>
      </RootLayout>
    </main>
  );
}
