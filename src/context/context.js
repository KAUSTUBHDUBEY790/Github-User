import React, { useState, useEffect } from 'react';
import mockUser from './mockData.js/mockUser';
import mockRepos from './mockData.js/mockRepos';
import mockFollowers from './mockData.js/mockFollowers';
import axios from 'axios';

const rootUrl = 'https://api.github.com';

const Github = React.createContext();

//Info about the provider and consumer - Github.provider
const GithubProvider = ({children})=>{
    const [Githubuser,setGithubuser] = useState(mockUser);
    const [Repos,setRepos] = useState(mockRepos);
    const [Followers,setFollowers] = useState(mockFollowers);
    //request loading
    const [requests, setRequest] = useState(0);
    const [loading,setLoading] = useState(false);
    const [error,setError] = useState({show:false,msg:""})
    const searchuser= async (user)=>{
        toggleError();
        setLoading(true)
        const reponse = await axios(`${rootUrl}/users/${user}`).catch((err)=>console.log(err))
        if(reponse)
        {
            setGithubuser(reponse.data);
            const {login, followers_url} = reponse.data;
            //repos

            //followers
             
            await Promise.allSettled([axios(`${rootUrl}/users/${login}/repos?per_page=100`),axios(`${followers_url}?per_page=100`),]).then((reponse)=>{ 
                const [repos,followers] = reponse; 
                const status = 'fulfilled'; 
            if(repos.status==status){
                setRepos(repos.value.data);
            }
            if(followers.status==status){
                setFollowers(followers.value.data);
            }})

        }
        else{
            toggleError(true,"No User with that username")
        }
        request();
        setLoading(false)
    }
    const request=()=>{
        axios(`${rootUrl}/rate_limit`).then(({data})=>{let{rate:{remaining},}=data; setRequest(remaining); if(remaining==0){toggleError(true,"Sorry you exceeded your search limit.")}}).catch((err)=>console.log(err))
    }
    function toggleError(show=false,msg=""){
        setError({show,msg})
    }
    useEffect(request,[])
    return <Github.Provider value={{Githubuser,Repos,Followers,requests,error,searchuser,loading}}>{children}</Github.Provider>
}
export {Github,GithubProvider};


