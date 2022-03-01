import Image from 'next/image'
import { useRouter } from 'next/router'
import rolls from '../../data/rolls.json'
import Document from '../../components/doc'
const RollDetail = () => {
  const router = useRouter()
  const detailedRoll = router.query.rolldetail
  const roll = rolls.find((v) => v.product_id === detailedRoll)

  return (
    <main>
      <h2 className="py-4 text-3xl font-light text-blue-400">Detailed roll</h2>
      <div className="grid gap-4 lg:grid-cols-3">
        <div>
          <Image
            src={roll.image}
            width={500}
            height={350}
            layout="responsive"
          />
        </div>
        <div className="grid gap-3 lg:gap-6">
          <div>
            {' '}
            <h3 className="font-medium text-gray-500">Name</h3>
            <p className="text-3xl font-bold">{roll.name}</p>
          </div>
          <div>
            <h3 className="font-medium text-gray-500">Description</h3>
            <p>{roll.description.slice(0, 170)}.</p>
          </div>
          <div>
            <h3 className="font-medium text-gray-500">Resources</h3>
            <Document />
            <span>Spec sheet</span>
          </div>
        </div>
      </div>
    </main>
  )
}

export default RollDetail
