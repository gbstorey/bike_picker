import { createContext, useState } from 'react'
import { Bike } from '../../types/bike'
 
const defaultBike = {
    _id: "1",
    name: "Your Bike",
    description: "My Really Cool Bike",
    components: {
        frame: undefined
    }
}

export const AppContext = createContext<Bike>(defaultBike)
 
export default function ContextProvider({
  children,
}: {
  children: React.ReactNode
}) {
    const [userBike, setUserBike] = useState<Bike>(defaultBike)
  return <AppContext.Provider value={userBike}>{children}</AppContext.Provider>
}