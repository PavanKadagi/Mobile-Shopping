
import React, { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'

export default function AdminProtected(props) {
    const {Component} = props;
    const navigate = useNavigate();
    useEffect(()=>{
        if(!localStorage.getItem('userLogin')){
            navigate('/')
        }
    },[])
  return (
    <>
    <Component/>
    </>
  )
}
