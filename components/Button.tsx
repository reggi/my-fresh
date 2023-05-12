import { JSX } from "https://esm.sh/preact@10.13.1";
import { IS_BROWSER } from "https://deno.land/x/fresh@1.1.5/runtime.ts";

export function Button(props: JSX.HTMLAttributes<HTMLButtonElement>) {
  return (
    <button
      {...props}
      disabled={!IS_BROWSER || props.disabled}
      class="px-2 py-1 border(gray-100 2) hover:bg-gray-200"
    />
  );
}
