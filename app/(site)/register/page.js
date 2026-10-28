import PageHeader from "@/components/PageHeader";
import AuthForm from "@/components/AuthForm";

export const metadata = {
  title: "Create an Account | CC Catering & Event Service",
  robots: { index: false, follow: false },
};

export default function RegisterPage() {
  return (
    <>
      <PageHeader
        title="Create an Account"
        subtitle="Save your details and track your quote requests in one place."
      />
      <section className="mx-auto max-w-md px-4 py-16">
        <AuthForm mode="register" />
      </section>
    </>
  );
}