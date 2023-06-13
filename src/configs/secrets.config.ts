// import { SecretManagerServiceClient } from '@google-cloud/secret-manager'
// import file from './juancareers-secret-key.json'

// const client = new SecretManagerServiceClient({
//   // keyFilename: JSON.parse(file),
// })

// export default async function accessSecret() {
//   const [version]: any = await client.accessSecretVersion({
//     name: 'projects/juancareers-2023/secrets/OPENAI_API_KEY/versions/latest',
//   })

//   const secretValue: string = version.payload.data.toString()
// }
