import React, {useEffect} from 'react'
import Calandar from '../components/calandar'
import { useLocation } from 'react-router-dom'
import { useScheduleContext } from '../context/scheduleContext'

export const Weeks = () => {
  const { updateTempMonth } = useScheduleContext();
  const {state} = useLocation()
  //
  useEffect(() => {
    updateTempMonth(state);
    // eslint-disable-next-line
  }, [state])
  //
  return (
    <section className='weeks'>
      <Calandar month={state}/>
    </section>
  )
}

export default Weeks
