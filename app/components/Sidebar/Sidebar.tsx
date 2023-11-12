"use client"

import React from 'react'
import styled from 'styled-components';
import { useGlobalState } from '@/app/context/globalProvider';
import Image from 'next/image';



const Sidebar = () => {

  const { theme } = useGlobalState();

  return (
    <SidebarStyled theme={theme}>
      <div className="profile">
        <div className="profile-overlay"></div>
        <div className="image">
          <Image src="/images/profile.jpg" alt="profile" width={70} height={70} className="profile-image" />
        </div>
        <h1>
          <span>Ahmad</span>
          <span>Ammar</span>
        </h1>
      </div>
      <ul className="nav-items">
        
      </ul>
    </SidebarStyled>
  )
}

const SidebarStyled = styled.nav`
  position: relative;
  background-color: ${(props) => props.theme.colorBg2};
  width: ${(props) => props.theme.sidebarWidth};
  border: 2px solid ${(props) => props.theme.borderColor2};
  border-radius: 1rem;

`;

export default Sidebar
