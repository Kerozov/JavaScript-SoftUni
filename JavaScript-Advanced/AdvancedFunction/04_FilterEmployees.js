function Filter(input, criteria){
 let objs = JSON.parse(input);
 let criterias = criteria.split('-')
 let prop = criterias[0];
 let value = criterias[1];
  let output = objs.filter(p => p[prop] == value).map((person, index) => {
    const fullName = `${person.first_name} ${person.last_name}`;
    const email = person.email === 'null' ? 'null' : person.email;
    return `${index}. ${fullName} - ${email}`;
  }).join('\n');
  return output
}

console.log(Filter(`[{
    "id": "1",
    "first_name": "Ardine",
    "last_name": "Bassam",
    "email": "abassam0@cnn.com",
    "gender": "Female"
  }, {
    "id": "2",
    "first_name": "Kizzee",
    "last_name": "Jost",
    "email": "kjost1@forbes.com",
    "gender": "Female"
  },  
{
    "id": "3",
    "first_name": "Evanne",
    "last_name": "Maldin",
    "email": "emaldin2@hostgator.com",
    "gender": "Male"
  }]`, 
'gender-Female'
))