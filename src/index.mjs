import _ from 'lodash'
import defaults from '~/config/defaults'

console.log(defaults)

while (true) {
  if (_.random(0, 10, true) > 9.99999) {
    console.log('Running1!')
    console.log({...{hello: 'wolrd'}})
  }
}
