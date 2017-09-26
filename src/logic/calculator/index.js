import _ from 'lodash'
import library from './library'

const costCalculator = (name, values)=> {
  const calculator = _.filter(library, ()=> name)[0]
  if(!calculator.items) return null 

  const cart = calculator.items.filter((item)=> values[item.name] )
  const price = _.reduce(cart, (memoization, item)=> memoization + item.price.start, 0)

  return price

 }


 export default costCalculator