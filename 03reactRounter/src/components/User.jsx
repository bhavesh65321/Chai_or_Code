import { useParams } from "react-router-dom"

function User() 
{

    const {userid}=useParams()
  return (
    <div className="bg-gray-400 text-center text-wrap">User:{userid}</div>
  )
}

export default User