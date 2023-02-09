import React from 'react';
import { Github } from '../context/context';
import styled from 'styled-components';
import { GoRepo, GoGist } from 'react-icons/go';
import { FiUsers, FiUserPlus } from 'react-icons/fi';

const UserInfo = () => {
  const {Githubuser}  = React.useContext(Github)
  const { public_repos,followers,following,public_gists} = Githubuser;
  const item = [
    {id:1,icon:<GoRepo className='icon'/>,lable:'repos',value:public_repos,color:'pink'},
    {id:2,icon:<FiUsers className='icon'/>,lable:'Followers',value:followers,color:'green'},
    {id:2,icon:<FiUserPlus className='icon'/>,lable:'Following',value:following,color:'purple'},
    {id:2,icon:<GoGist className='icon'/>,lable:'Gist',value:public_gists,color:'yellow'},
  ]



  return <section className='section'><Wrapper className='section-center'>
    {item.map((items)=>{
      return <Item key={items.id} {...items}/>
    })}</Wrapper></section>;
};
const Item = ({icon,lable,value,color})=>{
  return <article className='item'>
    <span className={color}>{icon}</span>
    <div>
      <h3>{value}</h3>
      <p>{lable}</p>
    </div>
  </article>
}

const Wrapper = styled.section`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
  gap: 1rem 2rem;
  @media (min-width: 640px) {
    grid-template-columns: repeat(auto-fill, minmax(260px, 1fr));
  }
  .item {
    border-radius: var(--radius);
    padding: 1rem 2rem;
    background: var(--clr-white);
    display: grid;
    grid-template-columns: auto 1fr;
    column-gap: 3rem;
    align-items: center;
    span {
      width: 3rem;
      height: 3rem;
      display: grid;
      place-items: center;
      border-radius: 50%;
    }
    .icon {
      font-size: 1.5rem;
    }
    h3 {
      margin-bottom: 0;
      letter-spacing: 0;
    }
    p {
      margin-bottom: 0;
      text-transform: capitalize;
    }
    .pink {
      background: #ffe0f0;
      color: #da4a91;
    }
    .green {
      background: var(--clr-primary-10);
      color: var(--clr-primary-5);
    }
    .purple {
      background: #e6e6ff;
      color: #5d55fa;
    }
    .yellow {
      background: #fffbea;
      color: #f0b429;
    }
  }
`;

export default UserInfo;
