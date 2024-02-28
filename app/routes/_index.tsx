import { redirect, type ActionFunctionArgs, type MetaFunction, json } from "@remix-run/node";
import { Form, useActionData, useNavigation } from "@remix-run/react";

export const action = async ({ request }: ActionFunctionArgs) => {
  const formData = await request.formData()
	const password = formData.get('password')?.toString()
  if (password !== '123') return json({ error: 'Wrong password' }, { status: 400 })
	return redirect('../success')
}

export const meta: MetaFunction = () => {
  return [
    { title: "New Remix App" },
    { name: "description", content: "Welcome to Remix!" },
  ];
};

export default function Index() {
  const navigation = useNavigation()
	const isSubmitting = navigation.state === 'submitting'

  const actionData = useActionData<typeof action>()
	const error = actionData?.error

  return (
    <div style={{ fontFamily: "system-ui, sans-serif", lineHeight: "1.8" }}>
      <h1>Welcome to Remix</h1>

      <p>Password: 123</p>

      {!isSubmitting && error && (
        <p style={{ color: "red" }}>Error: {error}</p>
      )}

      <Form method="POST">
        <input type="text" name="password" placeholder="Password" />
        <button type="submit">Submit</button>
      </Form>
    </div>
  );
}
