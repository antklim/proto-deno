import { assert } from "./deps.ts";
import { add } from "./main.ts";

Deno.test(function addTest() {
  assert.assertEquals(add(2, 3), 5);
});
