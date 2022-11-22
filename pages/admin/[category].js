import { Divider, Toolbar } from "@mui/material";
import { useRouter } from "next/router";
import QuestionListPage from "../../components/QuestionListPage";
import SideBar from "../../components/SideBar";
import styles from '../../styles/adminCategory.module.css'


export default function AdminCategoryPage() {

    const router = useRouter()
    const category = router.query.category
    console.log('category: ', category);

    return (<>
        <Toolbar><h3>Страница администратора</h3></Toolbar>
        <Divider />
        <div className={styles.main}>
            <SideBar props={category}></SideBar>
            {category == 'questions' ? <QuestionListPage /> : <></>}
            {/* {category == 'users' ? <UsersListPage /> : <></>}
            {category == 'settings' ? <USettingsPage /> : <></>} */}
        </div>
    </>
    )
}