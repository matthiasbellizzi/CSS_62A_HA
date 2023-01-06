export class Appointment {
    _appointmentId: number;
    _ownerIdCardNumber: string;
    _patientName: string;
    _animalType: string;
    _ownerName: string;
    _ownerSurname: string;
    //_appointmentDate: Date;
    _appointmentDuration: number;

    constructor(ownerIdCardNumber: string, patientName: string, animalType: string, ownerName: string, ownerSurname: string, appointmentDuration: number, appointmentId:number) {
        this._ownerIdCardNumber = ownerIdCardNumber;
        this._patientName = patientName;
        this._animalType = animalType;
        this._ownerName = ownerName;
        this._ownerSurname = ownerSurname;
        //this._appointmentDate = appointmentDate;
        this._appointmentDuration = appointmentDuration;
        this._appointmentId = appointmentId;
    }
    
    get ownerIdCardNumber(): string {
        return this._ownerIdCardNumber;
    }

    set ownerIdCardNumber(ownerIdCardNumber:string) {
        this._ownerIdCardNumber = ownerIdCardNumber;
    }

    get patientName(): string {
        return this._patientName;
    }

    set patientName(patientName:string) {
        this._patientName = patientName;
    }

    get animalType(): string {
        return this._animalType;
    }

    set animalType(animalType:string) {
        this._animalType = animalType;
    }

    get ownerName(): string {
        return this._ownerName;
    }

    

    set ownerName(ownerName:string) {
        this._ownerName = ownerName;
    }      

    get ownerSurname(): string {
        return this._ownerSurname;
    }

    set ownerSurname(ownerSurname:string) {
        this._ownerSurname = ownerSurname;
    }   
    
    // get appointmentDate(): Date {
    //     return this._appointmentDate;
    // }

    // set appointmentDate(appointmentDate: Date){
    //     this._appointmentDate = appointmentDate;
    // }

    get appointmentDuration(): number {
        return this._appointmentDuration;
    }

    set appointmentDuration(appointmentDuration: number){
        this._appointmentDuration = appointmentDuration;
    }

    get appointmentId(): number {
        return this._appointmentId;
    }

    set appointmentId(appointmentId:number) {
        this._appointmentId = appointmentId;
    }


}