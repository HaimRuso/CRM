import { observable} from 'mobx'

export class client {
    @observable _id;
    @observable name;
    @observable surname;
    @observable email;
    @observable firstContact;
    @observable emailType;
    @observable sold;
    @observable owner;
    @observable country;
    constructor(_id,name,surname, email, firstContact,emailType, sold, owner,country) {
        this._id=_id
        this.name=name
        this.surname=surname
        this.email=email
        this.firstContact=firstContact
        this.emailType=emailType
        this.sold=sold
        this.owner=owner
        this.country=country
    }
}