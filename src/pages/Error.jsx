import React,{Component} from "react"
import Hero from '../components/Hero'
import Banner from "../components/Banner"
import { Link } from "react-router-dom"
export function Error(){
    return(
        <Hero>
            <Banner title="Error 404" subtitle="Page not found">
                <Link to="/" className="btn-primary">Home</Link>
            </Banner>
        </Hero>
    )
}