import KanBanModule from "@modules/KanBanModule/ui/KanBanModule"
import { useKanBanStore } from "../store/kanBanStore"

const Home = () => {
    const kanBanStore = useKanBanStore()

    return (
        <KanBanModule
            kanbanStore={kanBanStore} 
        />
    )
}

export default Home