import AppTabs from "@shared/ui/AppTabs/AppTabs"
import { useProfileStore } from "../store/profileStore"
import { tabs } from "../constants/tabs"
import styles from "./ProfileLayout.module.css"
import { Outlet, useLocation, useNavigate } from "react-router-dom"
import { SyntheticEvent, useEffect } from "react"
import { EnumProfile } from "../enums/EnumProfile"
import { EnumRoutes } from "@shared/enums/EnumRoutes"

const ProfileLayout = () => {
    const profileStore = useProfileStore(state => state)
    const navigate = useNavigate()
    const { pathname } = useLocation()

    useEffect(() => {
        profileStore.changeCurrentTab(pathname.split("/")[2] as EnumProfile)
    }, [pathname])

    const handleChangeCurrentTab = (_ev: SyntheticEvent, value: EnumProfile) => {
        navigate(`${EnumRoutes.USER_PROFILE_PATH}/${value}`)
        profileStore.changeCurrentTab(value)
    }

    return (
        <>
            <AppTabs
                tabs={tabs}
                handleChange={handleChangeCurrentTab}
                value={profileStore.currentTab}
            />
            <section className={styles.section}>
                <Outlet />
            </section>
        </>

    )
}

export default ProfileLayout