import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
    name: 'filterTablePipe'
})
export class FilterTable implements PipeTransform {

    transform(array: any[], query: string): any {
       console.log(query);
        if (query!=undefined && query) {
            return array.filter(row=> {
               const subject=row.subject.toString().toLowerCase().includes(query.toLowerCase())
               let status;
               if(row.status==1)
               {
                    status=("Done").toLowerCase().includes(query.toLowerCase())
               }
               else if(row.status==0)
               {
                status=("Not Done").toLowerCase().includes(query.toLowerCase())
               }
               const id=row.id.toString().toLowerCase().includes(query.toLowerCase())
                return (subject + status + id );
                console.log('aaa',row ,query)
            }
        )
        }
        console.log('out',query)
        return array;
    }
} 