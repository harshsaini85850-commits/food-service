import PageHeader from "@/components/PageHeader";
import AuthForm from "@/components/AuthForm";

export const metadata = {
  title: "Login | CC Catering & Event Service",
  robots: { index: false, follow: false },
};

export default function LoginPage() {
  return (
    <>
      <PageHeader
        title="Login"
        subtitle="Sign in to follow your catering quote requests."
      />
      <section className="mx-auto max-w-md px-4 py-16">
        <AuthForm mode="login" />
      </section>
    </>
  );
}