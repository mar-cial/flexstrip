import { useRouter } from 'next/router'
import rolls from '../../data/rolls.json'

const RollDetail = () => {
  const router = useRouter()
  const detailedRoll = router.query.rolldetail
  const roll = rolls.find((v) => v.product_id === detailedRoll)

  console.log(detailedRoll)
  console.log(roll)
  return (
    <div>
      <h2 className="text-3xl font-light text-blue-400">Detailed roll</h2>
      <p className="text-3xl font-bold">{roll.name}</p>
    </div>
  )
}

export default RollDetail
