import React from 'react';
import { ListTitle, ProfileUl } from './style';


const ProfileList = ({ title, list, className }) =>(
  <article className={className}>
    <header>
      <ListTitle>{title}</ListTitle>
    </header>
    <ProfileUl>{list()}</ProfileUl>
  </article>)

export default ProfileList
