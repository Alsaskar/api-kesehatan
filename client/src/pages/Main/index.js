import { useRouteMatch } from "react-router-dom";
import {Navigation, RootProvider} from "./hoc"
import {useMemo} from 'react'
import Router from './Router'
import Helmet from 'react-helmet'

import DashboardAdmin from "../Dashboard.Admin";
import AddRumahSakit from "../Input.RumahSakit";
import DashboardRumahSakit from "../Dashboard.RumahSakit";
import AddKamar from "../Input.Kamar";

const navigation = [
    {
        "title": "Admin",
        "text": "Admin",
        "component": DashboardAdmin,
        "path": "/admin",
        "icon": "blank",
        "exact": true,
        "permission": "admin"
    },
    {
        "title": "Tambah Rumah Sakit",
        "text": "Tambah Rumah Sakit",
        "component": AddRumahSakit,
        "path": "/add-rs",
        "icon": "blank",
        "exact": true,
        "permission": "admin"
    },
    {
        "title": "Rumah Sakit",
        "text": "Rumah Sakit",
        "component": DashboardRumahSakit,
        "path": "/rumah-sakit",
        "icon": "blank",
        "exact": true,
        "permission": "admin"
    },
    {
        "title": "Tambahkan Kamar",
        "text": "Tambahkan Kamar",
        "component": AddKamar,
        "path": "/add-kamar",
        "icon": "blank",
        "exact": true,
        "permission": "admin"
    }
]

const Main = () => {
    const {path} = useRouteMatch()
    const items = useMemo(() => {
        return navigation.filter(({ permission }) => {
            return permission;
        });
    }, [navigation])
 
    return(
        <RootProvider>
            <Helmet>
                <title>Aplikasi Layanan Kesehatan Publik</title>
            </Helmet>
            <Navigation base={path} navigation={items}>
                <Router />
            </Navigation>
        </RootProvider>
    )
}
 
export default Main