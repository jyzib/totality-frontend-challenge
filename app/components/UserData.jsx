import { currentUser } from "@clerk/nextjs";

const UserData = () => {
    const g  = currentUser()
    console.log(g)
  return (
    <div>
ok
    </div>
  )
}

export default UserData
