"use client";
import styled from "styled-components";
import Logo from "../atoms/Logo";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faInstagram } from "@fortawesome/free-brands-svg-icons";
import { faComment } from "@fortawesome/free-solid-svg-icons";
import Link from "next/link";

const FooterBox = styled.footer`
  background-color: #000000;
  color: #FFFFFF;
  text-align: center;
  display: inline-block;
  width: 100%;
  bottom: 0;
`;

const FooterNavContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 15vh;
`;

const Nav = styled.nav`
  ul{
    display: flex;
    list-style: none;
    padding: 0;
    margin-right: 4rem;
    li{
      margin: 0 20px;
    }
  }
`;

export default function Footer(){
  return(
    <FooterBox>
      <FooterNavContainer>
        <Logo color="#ffffff">Dorothy Picnic</Logo>
        <Nav>
          <ul>
            <li>
              <Link href="https://www.instagram.com/dorothy__picnic/?igsh=M2sxajAyMmZ5a3d4&utm_source=qr" target="_blank" className="Instagram Social">
                <FontAwesomeIcon icon={faInstagram} size="2x" color="white"/>
              </Link>
            </li>
            <li>
              <Link href="http://pf.kakao.com/_PPcaG" target="_blank" className="KakaoTalk Social">
                <FontAwesomeIcon icon={faComment} size="2x" color="white"/>
              </Link>
            </li>
          </ul>
        </Nav>
      </FooterNavContainer>
      <p>&copy; { new Date(). getFullYear() } Dorothy Picnic WebSite. All right reserved.</p>
    </FooterBox>
  )
}