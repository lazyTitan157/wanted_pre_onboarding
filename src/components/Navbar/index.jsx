import React from 'react';
import * as styled from './NavbarElements';
import { ReactComponent as Bell } from '../../assets/bell_icon.svg';
import { ReactComponent as Macro } from '../../assets/macro_icon.svg';

const Navbar = () => {
	
  return (
    <styled.NavWrap>
      <styled.NavInner>
	    <styled.HambergerImage class="menuList" src="https://static.wanted.co.kr/images/icon-menu.png" />
		<styled.LogoImage src="https://s3.ap-northeast-2.amazonaws.com/static.wanted.co.kr/images/logo_wanted_black.png"/>
        <styled.MainMenu>
          {MAINMENU.map((element, index) => {
            return (
              <styled.MainMenuLink
                key={index}
              >
                {element}
              </styled.MainMenuLink>
            );
          })}
		  
        </styled.MainMenu>
        <styled.RightMenu>
          <styled.SearchBtn>
            <Macro />
          </styled.SearchBtn>
          <styled.BellBtn>
			<Bell />
          </styled.BellBtn>
          <styled.ProfileBtn>
            <styled.Profile src="https://s3.ap-northeast-2.amazonaws.com/wanted-public/profile_default.png" />
            <styled.NewPoint>N</styled.NewPoint>
          </styled.ProfileBtn>
          <styled.EnterPrise>기업 서비스</styled.EnterPrise>
        </styled.RightMenu>
      </styled.NavInner>
      
    </styled.NavWrap>
  );
};

export default Navbar;

const MAINMENU = ['채용', '이벤트', '직군별 연봉', '이력서', '커뮤니티', '프리랜서', 'AI 합격예측'];