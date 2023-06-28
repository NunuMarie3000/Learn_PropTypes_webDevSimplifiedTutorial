import PropTypes from 'prop-types'

// check to see if something is renderable
function Component() {
  // return renderable;
  return null
}
// function Component({ name, age }) {
//   return `In 5 years ${name} will be ${age + 5}`
// }

// Component.propTypes = {
//   // by default, all propTypes are optional, to make it required...
//   // name: PropTypes.string,
//   name: PropTypes.string.isRequired,
//   age: PropTypes.number.isRequired

//   // react specific prop types
// }

// // check if it's renderable
// Component.propTypes = {
//   //node means it's renderable, could be string, array, component, etc. anything that's renderable
//   // renderable: PropTypes.node

//   // to make sure it's an actual react component
//   renderable: PropTypes.element
// }

//make sure component only renders out one child component
Component.propTypes = {
  // we have to pass down a child to our component and can only have one child
  children: PropTypes.element.isRequired
}

export default Component