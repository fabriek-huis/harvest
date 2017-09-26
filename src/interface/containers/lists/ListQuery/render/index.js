/* ------------------------- External Dependencies -------------------------- */
import _ from 'lodash'
import React from 'react'
/* ------------------------- Internal Dependencies -------------------------- */
import { Flex } from 'particles'
import { UserProfile } from 'foundry'
/* ------------------------ Initialize Dependencies ------------------------- */
let itemApplyStyle = _.curry((layout,user)=> ({...user,...layout}))
/* ---------------------------- Module Package ------------------------------ */
const ListQuery = ({list, test, status, data, itemStyled}) => {
  const ListStyled = list && list.users ? _.map(list.users, _.curry(itemApplyStyle)(itemStyled)) : null;
  const ListFoundry = list && list.users && ListStyled ? _.map(ListStyled, UserProfile) : null
  return (
    <Flex direction={['row']} wrap='wrap'>
      {ListFoundry}
    </Flex>
  )
}
/* ---------------------------- Export Package ------------------------------ */
export default ListQuery
