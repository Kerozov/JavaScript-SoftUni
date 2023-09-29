function FindWordByEl(array, el){
return array.filter(function(el) {
return array.indexOf(el)
})
}

console.log(FindWordByEl(['qwert', 'tyuiop', 'asdfgh'], 'qw'))