import React from 'react';
import styled from 'styled-components';
import { Github} from '../context/context';
import { ExampleChart, Pie3D, Column3D, Bar3D, Doughnut2D } from './Charts';
const Repos = () => {
  const {Repos} = React.useContext(Github)
  const languages = Repos.reduce((total,items)=>{
    const {language,stargazers_count,} = items;
    if(!language) return total;
    if(!total[language]){
      total[language] = {label:language,value:1,stars:stargazers_count};
    }
    else{
      total[language] = {...total[language],value:total[language].value+1,stars:total[language].stars+1};
    }
    return total;

  
  },{});
  const Repose = Repos.reduce((total,items)=>{
    const {name,stargazers_count,forks,} = items;
    if(!name) return total;
    if(!total[name]){
      total[name] = {label:name,stars:stargazers_count,fork:forks};
    }
    else{
      total[name] = {...total[name],stars:total[name].stars+1,fork:total[name].fork+1};
    }
    return total;

  
  },{});
  const moststared = Object.values(Repose).sort((a,b)=>{return b.stars - a.stars}).slice(0,5).map((items)=>{return {...items,value:items.stars}});
  const mostforked = Object.values(Repose).sort((a,b)=>{return b.fork - a.fork}).slice(0,5).map((items)=>{return {...items,value:items.fork}});
  const mostused   = Object.values(languages).sort((a,b)=>{return b.value - a.value;}
  ).slice(0,5);

  const mostPolpular = Object.values(languages).sort((a,b)=>{return b.stars - a.stars}).slice(0,5).map((items)=>{return {...items,value:items.stars}});

  const chartData = [
    {label:'HTML',
  value:'15',},
  ];
  return<section className='section'>
    <Wrapper className='section-center'><Pie3D data={mostused}></Pie3D>
    <Column3D data={moststared}></Column3D>
    <Doughnut2D data={mostPolpular}/>
    <Bar3D data={mostforked}></Bar3D></Wrapper>
  </section> 

};

const Wrapper = styled.div`
  display: grid;
  justify-items: center;
  gap: 2rem;
  @media (min-width: 800px) {
    grid-template-columns: 1fr 1fr;
  }

  @media (min-width: 1200px) {
    grid-template-columns: 2fr 3fr;
  }

  div {
    width: 100% !important;
  }
  .fusioncharts-container {
    width: 100% !important;
  }
  svg {
    width: 100% !important;
    border-radius: var(--radius) !important;
  }
`;

export default Repos;
