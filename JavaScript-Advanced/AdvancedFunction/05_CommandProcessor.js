function solution(){
    let string = '';
  function append(input){
    string += input;;
  }
  function removeStart(n){
   string =  string.substr(n,  string.length -1);
  }
  function removeEnd(n){
    string =  string.substr(0, string.length - n);
  }
  function print(n){
     console.log(string);
  }
  return{
    append,
    removeStart,
    removeEnd,
    print
  }
}
let firstZeroTest = solution();

firstZeroTest.append('hello');
firstZeroTest.append('again');
firstZeroTest.removeStart(3);
firstZeroTest.removeEnd(4);
firstZeroTest.print();
