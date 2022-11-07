import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";
import Footer from "../components/Layout/Footer";
import ReactDOM from "react-dom/client";
import Search from "../components/Search";
import Drawer from "../components/Drawer";
import FarmerLeaderboard from "../components/Leaderboards/FarmerLeaderboard";
import ProfilePage from "../components/Profiles/ProfilePage";
import PrimarySearchAppBar from "../components/Layout/PrimarySearchAppBar";
import PageVisitsTable from "../components/Tables/PageVisitsTable";
import Hero from "../components/HomeSections/Hero";
import WhyGlean from "../components/HomeSections/WhyGlean";
import MeetTopVolunteers from "../components/HomeSections/MeetTopVolunteers";
import SignInSide from "../components/SignUp";
import SignUp from "../components/SignUp"
import Event from "../components/Event/Event.js";
import Navibar from "../components/NaviBar";


import { useEffect } from "react";

const HomePage = (props) => {

    useEffect(() => {
       if(props) console.log(props); 
    }, [props])

    return (
        props.cred &&
        <div>
            <Head>
                <title>Title</title>
                <meta name="description" content="Generated by create next app" />
                <meta name="viewport" content="width=device-width, initial-scale=1" />
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <main>
                <SignInSide setCredentials={props.setCred}/>
            </main>
        </div>
    )
}

export default HomePage;