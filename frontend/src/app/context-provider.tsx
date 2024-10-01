import { createContext, useState } from 'react'
import { Bike } from '../../types/bike'
 
const defaultBike: Bike = {
    _id: "1",
    name: "Your Bike",
    description: "My Really Cool Bike",
    components: {
        frame: undefined
    }
}

const defaultContext = {
    userBike: defaultBike,
    setUserBike: (bike: Bike) => { 
        console.log("User bike: ", bike)
    }
}

export const AppContext = createContext(defaultContext)
 
export default function ContextProvider({
  children,
}: {
  children: React.ReactNode
}) {
    const [userBike, setUserBike] = useState<Bike>(defaultBike)
    defaultContext.setUserBike = setUserBike;
    defaultContext.userBike = userBike;
  return <AppContext.Provider value={defaultContext}>{children}</AppContext.Provider>
}