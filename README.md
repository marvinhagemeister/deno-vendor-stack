# Deno vendor stack trace

The stack trace still points to the original `https://` urls despite vendoring.

## Steps to reproduce

1. Clone this repo https://github.com/marvinhagemeister/deno-vendor-stack
2. Run `deno run -A main.ts`
