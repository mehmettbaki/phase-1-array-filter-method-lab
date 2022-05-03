// Code your solution here
const drivers = ['Bobby', 'Sammy', 'Sally', 'Annette', 'Sarah', 'Bobby']

function findMatching(drivers, name) {
  return drivers.filter(
    (e) => e.toLowerCase() === name.toLowerCase()
  )
}

function fuzzyMatch(drivers, name) {
  return drivers.filter(
    (e) => e.toLowerCase().indexOf(name.toLowerCase()) === 0
  )
}

function matchName(drivers, name) {
  return drivers.filter(
    (e) => e.name.toLowerCase() === name.toLowerCase()
  )
}
