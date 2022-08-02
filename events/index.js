import {EventEmitter} from 'events'

const event = new EventEmitter()

// const kopi = ({name}) =>{
//   console.log(`kopi ${name} tersedia`)
// }

// /*mendaftarkan event dengan .on parameter pertama nama event terserah, 
// parameter kedua fungsi yang dijadikan event*/
// event.on('coffe',kopi)

// /*memanggil event dengan .emit parameter pertama nama event yang dipanggil, 
// paramter kedua parameter dari fungsi yang didaftarkan*/
// event.emit('coffe', {name: 'lele' })

/*-----------------latihan event---------------------*/

// TODO 1
/*import module eventEmiter sudah*/

const birthdayEventListener = (name) => {
  console.log(`Happy birthday ${name}!`);
}

// TODO 2
/*variable event sudah*/

// TODO 3
event.on('birthday',birthdayEventListener)

// TODO 4
event.emit('birthday','lele')