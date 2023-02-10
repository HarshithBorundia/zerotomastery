const arr = [1,1,1,1,2,2,3,4,5,6,389,2340]
let i=0;
let count=0;
const double= [];
while(i<arr.length){ const inner =[]; let t=0;let j;
    for( j=i+1;j<arr.length;j++){
        if(arr[i]===arr[j]){
            inner.push(arr[j]);
            t++;}
        else{
            break;}
    }
       if(t){
           inner.push(arr[i]);console.log(inner);
           i=j;
           double[count]=inner;
           count=count+1;}
        else{
            double[count]=arr[i];
            i=i+1;
            count=count+1;
        }
                   }