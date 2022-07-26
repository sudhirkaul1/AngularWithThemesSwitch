import { ListService, PagedResultDto } from '@abp/ng.core';
import { Component, OnInit } from '@angular/core';
import { BookService } from '@proxy/application/books';
import { BookDto } from '@proxy/application/contracts/books';

@Component({
  selector: 'app-primeng-pagination',
  templateUrl: './primeng-pagination.component.html',
  styleUrls: ['./primeng-pagination.component.scss'],
  providers:[ListService],
})
export class PrimengPaginationComponent implements OnInit {
  book={items:[],totalCount:0} as PagedResultDto<BookDto>;
  // columns:string[]=["name","type","price"];
  cols: any[];

  constructor( public readonly list:ListService,private bookService:BookService)
  {
    //  this.list.maxResultCount=2;
  }

  ngOnInit(){
    const bookStreamCreator = (query)=> this.bookService.getList(query);
    this.list.hookToQuery(bookStreamCreator).subscribe(
      (response)=>{
         this.book=response;

         this.cols = [
          { field: 'name', header: 'Name' },
          { field: 'type', header: 'Type' },
          { field: 'price', header: 'Price' }
      ];



        });

      }



}
