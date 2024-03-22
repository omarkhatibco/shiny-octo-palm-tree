import type { CodegenConfig } from '@graphql-codegen/cli'
import { loadEnvConfig } from '@next/env'

loadEnvConfig(process.cwd())

const config: CodegenConfig = {
  schema: process.env.NEXT_PUBLIC_BACKEND_URL as string,
  documents: ['./src/**/*.{ts,tsx,gql,graphql}'],
  ignoreNoDocuments: true,
  hooks: { afterAllFileWrite: ['prettier --write'] },
  generates: {
    './src/graphql/generated.ts': {
      plugins: ['typescript', 'typescript-operations', 'typescript-urql'],
      config: {
        withHooks: true,
      },
    },
  },
}
export default config
