export class Bid
{
    bidderName:String;
    bidAmount: String;
     
    constructor(bidderName:String , bidAmount:String)
    {
        this.bidAmount = bidAmount;
        this.bidderName= bidderName;
    }
}