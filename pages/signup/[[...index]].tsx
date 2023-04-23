import { SignUp } from "@clerk/nextjs";

const SignUpPage = () => (
  <main className="flex justify-center">
    <SignUp path="/signup" routing="path" signInUrl="/signin" />
  </main>
);

export default SignUpPage;
