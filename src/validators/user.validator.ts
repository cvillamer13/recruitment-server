// import Joi
// import { ISignUp } from '../configs/interfaces.config'

// //User
// export function validatateSignUp(data: ISignUp) {
//   return Joi.validate(data, {
//     email: Joi.string().email().required(),
//     password: Joi.string().min(8).required(),
//   }).catch((e: any) => {
//     throw new Error('Error')
//   })
// }

// export function validateSignIn(data: any) {
//   return Joi.validate(data.body, {
//     email: Joi.string().email().required(),
//     password: Joi.string().min(8).required(),
//   })
// }

// //User
// export function validateUser(data: object) {
//   return Joi.validate(data, {
//     name: Joi.string().min(3).required(),
//     email: Joi.string().email().required(),
//     age: Joi.number().required(),
//   })
// }

// //Profile
// export function validateProfile(data: object) {
//   return Joi.validate(data, {
//     name: Joi.string().require(),
//     email: Joi.string().min(3).required(),
//     phone: Joi.string().min(11).max(12).required(),
//     bio: Joi.string().required(),
//     skills: Joi.array().max(10).required(),
//     rate: Joi.object({
//       hourly: Joi.number().required(),
//       daily: Joi.number().required(),
//       monthly: Joi.number().required(),
//       yearly: Joi.number().required(),
//     }),
//     gender: Joi.string().required(),
//     link: Joi.string().required(),
//     media: {
//       validIdUrl: Joi.string().required(),
//       photoURL: Joi.string().required(),
//     },
//   })
// }

// //Email
// export function validateEmail(data: object) {
//   return Joi.validate(data, {
//     email: Joi.string().min(8).max(15).required(),
//     password: Joi.string
//       .min(8)
//       .regex(
//         /^(?=.*[0-9])(?=.*[a-z])(?=.*[A-Z])(?=.*[!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?])/
//       )
//       .required(),
//   })
// }

// //Job
// export function validateJob(data: object) {
//   return Joi.validate(data, {
//     job: Joi.string().min(3).required(),
//     jobDescription: Joi.string.min(10).max(50).required(),
//     jobSalary: Joi.number().required(),
//   })
// }

// //Admin
// export function validateAdmin(data: object) {
//   return Joi.validate(data, {
//     name: Joi.string().min(3).max(15).required,
//     role: Joi.string().valid('user', 'admin').required(),
//     isDeveloper: Joi.boolean()
//       .required()
//       .when(Joi.admin({ isDeveloper: true }).unknown(), {
//         then: Joi.admin({
//           role: Joi.string().valid('admin').required(),
//         }),
//         otherwise: Joi.admin({
//           role: Joi.string().valid('user').required(),
//         }),
//       }),
//   })
// }
