import React, { useEffect } from 'react'
import styles from '../App.module.css';
import Layout from "../components/Layout"
import Navbar from "../components/Navbar/Navbar"
import Chat from "../components/Chat/Chat"
import { useNavigate } from "react-router-dom";
import { useAuth } from "../store/AuthContext";
import { messageActions } from '../store/messages';
import { themeActions } from '../store/theme';
import { useDispatch } from 'react-redux';

export default function LandingPage() {
  const { currentUser } = useAuth();
  const dispatch = useDispatch();

  useEffect(() => {

    async function fetchData() {



      const url = process.env.REACT_APP_SERVER_URL + "/api/data";

      const response = await fetch(url, {
        method: "POST",
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          email: currentUser.email,
        })
      });


      if (!response.ok) {
        throw new Error(response);
      }

      const results = await response.json();
      const randomMessage = results.messages[Math.floor(Math.random() * 3)];

      dispatch(messageActions.setmessage(randomMessage));
      dispatch(messageActions.setDelay(results.delay));
      dispatch(themeActions.settheme(results.themes));

    }

    fetchData();

  }, [])

  return (
    <div className={styles.container}>
      <Layout>
        <Navbar />
        <Chat />
      </Layout>
    </div>
  )
}
