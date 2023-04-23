import { SignIn } from "@clerk/nextjs";

const SignInPage = () => (
  <main className="flex justify-center">
    <SignIn path="/signin" routing="path" signUpUrl="/signup" />
  </main>
);

export default SignInPage;
