import { Meteor } from "meteor/meteor";
import SimpleSchema from "simpl-schema";

Meteor.startup(() => {
  // code to run on server at startup

  //   const petSchema = new SimpleSchema({
  //       name: {
  //           type: String,
  //           min: 1,
  //           max: 40,
  //           optional: true,
  //       },
  //       age: {
  //           type: Number,
  //           min: 0
  //       },
  //       contactNumber:{
  //           type: String,
  //           optional: true,
  //           regEx: SimpleSchema.RegEx.Phone
  //       }
  //   })

  //   petSchema.validate({
  //       age: 3,
  //       contactNumber: 'wfwefw'
//   //   })

//   const employeeSchema = new SimpleSchema({
//       name:{
//           type: String,
//           min: 1,
//           max: 200
//       },
//       hourlyWage:{
//           type: Number,
//           min: 0
//       },
//       email: {
//           type: String,
//           regEx: SimpleSchema.RegEx.EmailWithTLD
//       }
//   });

//   employeeSchema.validate({
//       name: 'John',
//       hourlyWage: 0,
//       email: 'mail.mail.mail'
//   })
});
