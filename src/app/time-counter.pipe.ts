import { Pipe, PipeTransform } from '@angular/core';


@Pipe({
  name: 'timeCounter'
})
export class TimeCounterPipe implements PipeTransform {
time :any = new Date();
 transform(value: any, args?: any): any {
      var seconds = Math.floor((this.time - value) / 1000);

       //console.log(seconds)
       return seconds;
   
      //if (seconds < 29)
         // return 'Just now';
            
      //  const intervals = [31536000, 2592000, 604800, 86400, 3600, 60, 1]
      // let counter;
      // for (const i in intervals) {
      //     counter = Math.floor(seconds / intervals[i]);
      //     if (counter > 0)
      //         if (counter === 1) {
      //             return counter + ' ' + i + ' ago'; // singular (1 day ago)
      //         } else {
      //             return counter + ' ' + i + 's ago'; // plural (2 days ago)
      //         }
      // }

  
 
}

}