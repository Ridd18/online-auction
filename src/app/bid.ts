export class Bid
{
    bidderName:String;
    bidAmount: Number;
     
    constructor(bidderName:String , bidAmount:Number)
    {
        this.bidAmount = bidAmount;
        this.bidderName= bidderName;
    }
}