import { Observable } from "rxjs";


export const getNumbers=new Observable(subscriber=>{
    subscriber.next(1)//emit 1
    subscriber.next(2)//emit 2
    subscriber.next(3)//emit 3
    setTimeout(()=>{
        subscriber.next(4)//emit 4
        subscriber.complete()//finalmente el observable completa y termina
    },2000)//espera 2 sec
})