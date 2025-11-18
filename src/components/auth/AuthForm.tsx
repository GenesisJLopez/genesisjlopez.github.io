import { useActionState } from 'react';
import { authAction } from './actions';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Alert, AlertDescription, AlertTitle } from '@/components/ui/alert';
import { Terminal } from 'lucide-react';
import { SubmitButton } from './SubmitButton';
import { useAuth } from '@/firebase';

export function AuthForm() {
  const auth = useAuth();
  const [state, dispatch] = useActionState(authAction.bind(null, auth), {
    message: null,
    errors: {},
    success: false,
  });

  return (
    <div className="w-full">
      <form action={dispatch} className="space-y-6 pt-4">
        <input type="hidden" name="authType" value="signin" />
        <div className="space-y-2">
          <Label htmlFor="email-signin">Email</Label>
          <Input
            id="email-signin"
            name="email"
            type="email"
            placeholder="us@travelandask.com"
            required
          />
        </div>
        <div className="space-y-2">
          <Label htmlFor="password-signin">Password</Label>
          <Input id="password-signin" name="password" type="password" required />
        </div>
        <SubmitButton buttonText="Sign In" />
      </form>

      {state.message && (
        <Alert variant={state.success ? 'default' : 'destructive'} className="mt-4">
          <Terminal className="h-4 w-4" />
          <AlertTitle>{state.success ? 'Success' : 'Error'}</AlertTitle>
          <AlertDescription>{state.message}</AlertDescription>
        </Alert>
      )}
    </div>
  );
}
