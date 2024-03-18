export interface Patient {

    patientId: number;
    dob: Date;
    contact: string;
    address: string;
    patientName: string;
    descriptionOfTreatment: string;
    email: string;
    password: string;
    patientProfilePic:string;
    patientGender:string;
    imageUrl?: string; 

}