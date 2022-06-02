import { Component, OnInit } from '@angular/core';
import { Cookie } from '../cookie';
import { ProductsService } from '../products.service';

@Component({
  selector: 'app-part3',
  templateUrl: './part3.component.html',
  styleUrls: ['./part3.component.css']
})
export class Part3Component implements OnInit {

  constructor(private _productservice:ProductsService) { }

  nameOrder:string="a";
  priceOrder:string="a";
  catOrder:string="a";

 cookies:any=[];
  ngOnInit(): void {


    this._productservice.getProducts().subscribe(data=>
      {
        if(data!=undefined)
        this.cookies=data['cookies'];
        console.log(this.cookies);
      })
  }

  


    sortTable(order:string,key:string)
    {


      if(key=='name')
      {
       
       if(this.nameOrder=='asc')
          this.nameOrder="desc";
        else
        this.nameOrder="asc";

        this.priceOrder='a';
        this.catOrder='a';
        order=this.nameOrder;
      }
      else  if(key=='price')
      {
       
       if(this.priceOrder=='asc')
          this.priceOrder="desc";
        else
        this.priceOrder="asc";

        this.nameOrder='a';
        this.catOrder='a';
        order=this.priceOrder;
      }
      else if(key=='category')
      {
        if(this.catOrder=='asc')
        this.catOrder="desc";
      else
      this.catOrder="asc";

      this.nameOrder='a';
      this.priceOrder='a';
      order=this.catOrder
      }


      let temp;
      for(let i=0;i<this.cookies.length;i++)
      {
        for(let j=i+1;j<this.cookies.length;j++)
        {

          if(order=='asc')
          {
            if(this.cookies[i][key]>this.cookies[j][key])
            {
              temp=this.cookies[i];
              this.cookies[i]=this.cookies[j];
              this.cookies[j]=temp;

            }
          }
          else if(order=='desc'){
            if(this.cookies[i][key]<this.cookies[j][key])
            {
              temp=this.cookies[i];
              this.cookies[i]=this.cookies[j];
              this.cookies[j]=temp;

            }
          }
        }
      }




    }

}
