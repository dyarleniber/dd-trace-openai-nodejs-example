This repository contains an example of issue when running a Node.js server with ESM modules using `dd-trace` and `openai` packages.

## Steps to reproduce

1. Clone this repository
2. Run `npm install`
3. Create a new `.env` file with the OpenAI API key
4. Run `npm start`

## Versions

- Node.js: 20.11.0
- `dd-trace`: 5.12.0
- `openai`: 4.40.0

## Expected error

```bash
➜  dd-trace-openai-nodejs-example git:(main) node --env-file=.env --import dd-trace/register.js index.js
file:///Users/admin/workspace/personal/dd-trace-openai-nodejs-example/node_modules/openai/resources/index.mjs?iitm=true:72
    let $Completions = namespace.Completions
        ^

SyntaxError: Identifier '$Completions' has already been declared
    at ModuleLoader.moduleStrategy (node:internal/modules/esm/translators:167:18)
    at callTranslator (node:internal/modules/esm/loader:285:14)
    at ModuleLoader.moduleProvider (node:internal/modules/esm/loader:291:30)

Node.js v20.11.0
```
