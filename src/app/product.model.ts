export class productInfo {

    public id: number;
    public productId: number;
    public productName: string;
    public description: string;
    public price: number;
    public imagePath: string;
    public width: number;
    public length: number;
    public height: number;
    public weight: number;

    

    public constructor(id: number, productId: number, productName: string, description: string, price: number, imagePath: string, width: number,
        length: number, height: number, weight: number) {
        console.log("product constructor");
         this.id = id;
         this.productId = productId;
         this.productName = productName;
         this.description = description;
         this.price = price;
         this.imagePath = imagePath;
         this.width = width;
         this.length = length;
         this.height = height;
         this.weight = weight;

    }




}