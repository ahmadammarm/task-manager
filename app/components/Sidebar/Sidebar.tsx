"use client"

import React from 'react'
import styled from 'styled-components';
import { useGlobalState } from '@/app/context/globalProvider';
import Image from 'next/image';

import menu from '@/app/utils/menu';
import Link from 'next/link';
import { usePathname, useRouter } from 'next/navigation';


const Sidebar = () => {

  const { theme } = useGlobalState();

  const pathname = usePathname();
  const router = useRouter();

  const handleClick = (link: string) => {
    router.push(link);
  };

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
        {menu.map((item) => {
          const link = item.link;
          return (
            <li
              key={item.id}
              className={`nav-item ${pathname === link ? "active" : ""}`}
              onClick={() => {
                handleClick(link);
              }}
            >
              {item.icon}
              <Link href={link}>{item.title}</Link>
            </li>
          );
        })}
      </ul>
      <button></button>
    </SidebarStyled>
  )
}

const SidebarStyled = styled.nav`
  position: relative;
  background-color: ${(props) => props.theme.colorBg2};
  width: ${(props) => props.theme.sidebarWidth};
  border: 2px solid ${(props) => props.theme.borderColor2};
  border-radius: 1rem;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  color: ${(props) => props.theme.colorGrey3};
  
  .profile {
    margin: 1rem;
    padding: 1rem 0.8rem;
    position: relative;
    border-radius: 1rem;
    cursor: pointer;
    font-weight: 600; 
    color: ${(props) => props.theme.colorGrey0};
    display: flex;
    align-items: center;

    .profile-overlay {
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      backdrop-filter: blur(10px);
      border-radius: 1rem;
      z-index: 0;
      background: ${(props) => props.theme.colorBg1};
      transition: all 0.5s linear;
      opacity: 0.2;
    }

    h1 {
      font-size: 1.2rem;
      display: flex;
      flex-direction: column;
      margin-left: 1rem;
      line-height: 1.4rem;
    }
    
    .image {
      position: relative;
    }
  }


`;

export default Sidebar
