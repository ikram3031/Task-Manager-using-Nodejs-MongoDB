function litres(time) {
  if(time < 1){
    console.log('Z')
    return 0;
  }
  else{
    console.log(Math.floor(time/2))
    return Math.floor(time/2)
  }
}
litres(11.8)