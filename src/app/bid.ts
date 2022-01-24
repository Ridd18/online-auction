export class Bid
{
    user:String;
    bidAmount: String;
     
    constructor(user:String , bidAmount:String)
    {
        this.bidAmount = bidAmount;
        this.user= user;
    }
}