import { Pipe, PipeTransform} from '@angular/core';

@Pipe({
    name: 'searchFilter'
})
export class SearchFilter implements PipeTransform {
    transform(items: any[], criteria: any): any {

        return items.filter(item => {
           for (const key in item ) {
             if (('' + item[key]).includes(criteria)){
                return false;
             }
           }
           return false;
        });
    }
}
