import type UserMedicalHistory from "./UserMedical";
export default interface User { 
     id : number,
     name : string,
     email : string, 
     age : number, 
     password : string,
     medicalHistory : UserMedicalHistory
}
