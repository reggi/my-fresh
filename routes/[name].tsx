import { PageProps } from "https://deno.land/x/fresh@1.1.5/server.ts";

export default function Greet(props: PageProps) {
  return <div>Hello {props.params.name}</div>;
}
