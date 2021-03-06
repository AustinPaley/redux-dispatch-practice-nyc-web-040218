export let state;


export function managePets(state = {pets: []}, action){
  switch(action.type){
    case "ADD_PET":
    // console.log(action)
      return {...state, pets: [...state.pets, action.pet]}
    case "REMOVE_PET":
      let removePet = state.pets.findIndex(pet => pet.id === action.id)
      return {...state, pets:[...state.pets.slice(0, removePet), ...state.pets.slice(removePet+1)]}
    default:
      return state
  }
}

export function dispatch(action){
  state = managePets(state, action)
  render()
}

export function render(){
  let container = document.getElementById('container')
  let pets = state.pets.map(pet => {
    return `<li>${pet.name}</li>`
  })
  container.innerHTML = `<ul>${pets}</ul>`
}
