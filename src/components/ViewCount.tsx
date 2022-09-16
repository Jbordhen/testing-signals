import { count } from '../store'

const ViewCount = () => {
  return (
    <div>
      <h1>{count as any}</h1>
    </div>
  )
}

export default ViewCount
