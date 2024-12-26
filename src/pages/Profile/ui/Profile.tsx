import { useProfileStore } from "@modules/UserProfileLayout/store/profileStore"
import { componentByTab } from "../constants/componentByTab"
import AppTabs from "@shared/ui/AppTabs/AppTabs"
import { tabs } from "@modules/UserProfileLayout/constants/tabs"
import { SyntheticEvent } from "react"
import { EnumProfile } from "@modules/UserProfileLayout/enums/EnumProfile"

const Profile = () => {
    const profileStore = useProfileStore(state => state)

    const handleChangeCurrentTab = (_event: SyntheticEvent, value: EnumProfile) => {
        profileStore.changeCurrentTab(value)
    }

    return (
        <>
            <AppTabs
                tabs={tabs}
                handleChange={handleChangeCurrentTab}
                value={profileStore.currentTab}
            />
            {componentByTab[profileStore.currentTab] ?? <></>}
        </>

    )
}

export default Profile