import { AuthForm } from '@/components/auth/AuthForm';
import { PageHeader } from '@/components/shared/PageHeader';
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';

export default function LoginPage() {
  return (
    <>
      <PageHeader
        title="Admin Access"
        description="Sign in to manage your content."
        imageId="hero-premium"
      />
      <div className="container mx-auto max-w-sm px-4 py-16 lg:py-24">
        <Card>
          <CardHeader>
            <CardTitle className="text-2xl">Login</CardTitle>
            <CardDescription>
              Enter your credentials to access the admin dashboard.
            </CardDescription>
          </CardHeader>
          <CardContent>
            <AuthForm />
          </CardContent>
        </Card>
      </div>
    </>
  );
}
