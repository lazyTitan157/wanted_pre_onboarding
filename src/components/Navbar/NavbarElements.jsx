import styled from 'styled-components';
import './Navbar.css';

export const NavWrap = styled.nav`
  position: fixed;
  top: 0;
  width: 100%;
  height: 50px;
  background-color: #fff;
  border-bottom: 1px solid ${props => props.theme.grayBorder};
  z-index: 100;
`;

export const NavInner = styled.ul`
  ${props => props.theme.flexBetween};
  width: 70%;
  margin: 0 auto;
`;

export const HambergerImage = styled.img`
  alt: "로고이미지"
`;

export const LogoImage = styled.img`
`;

export const Logo = styled.li`
  width: 15%;
  height: 50px;
  width:17px;height:14px;object-fit:contain;
  a {
    color: #000;
    font-weight: 600;
    text-decoration: none;
    img {
      width: 150px;
    }
  }
`;

export const MainMenu = styled.li`
  text-align: center;
`;

export const MainMenuLink = styled.a`
  padding: 20px 20px 12px 20px;
  color: #000;
  font-weight: 600;
  font-size: 14px;
  text-decoration: none;
  cursor: pointer;
  :hover {
    border-bottom: 2px solid ${props => props.theme.blueTitle};
  }
`;

export const RightMenu = styled.li`
  ${props => props.theme.flexBetween}
  width:24%;
`;

export const MenuBtn = styled.button`
  position: relative;
  padding: 5px 8px;
  background: none;
  border: none;
  outline: none;
  cursor: pointer;
  svg {
    font-size: 16px;
  }
`;

export const SearchBtn = styled.button`
  position: relative;
  padding: 5px 8px;
  background: none;
  border: none;
  outline: none;
  cursor: pointer;
  svg {
    font-size: 16px;
  }
`;

export const BellBtn = styled.button`
  display: ${props => (props.userToken === '' ? 'none' : 'block')};
  position: relative;
  padding: 5px 8px;
  background: none;
  border: none;
  outline: none;
  cursor: pointer;
  svg {
    font-size: 16px;
  }
`;

export const ProfileBtn = styled.button`
  display: ${props => (props.userToken === '' ? 'none' : 'block')};
  position: relative;
  padding: 5px 8px;
  background: none;
  border: none;
  outline: none;
  cursor: pointer;
`;


export const EnterPrise = styled.div`
  padding: 5px 10px;
  border: 1px solid ${props => props.theme.grayBorder};
  border-radius: 20px;
  color: ${props => props.theme.mainGray};
  font-size: 14px;
`;

export const Profile = styled.img`
  width: 30px;
  height: 30px;
  border: 1px solid #e1e2e3;
  border-radius: 50px;
`;

export const NewPoint = styled.span`
  position: absolute;
  top: 2px;
  right: 2px;
  width: 15px;
  height: 15px;
  border-radius: 5px;
  background-color: ${props => props.theme.blueTitle};
  color: #fff;
  font-size: 4px;
  text-align: center;
  line-height: 15px;
`;


export const NewText = styled.span`
  position: absolute;
  top: 2px;
  right: 2px;
  width: 15px;
  height: 15px;
  border-radius: 5px;
  background-color: ${props => props.theme.blueTitle};
  color: #fff;
  font-size: 4px;
  text-align: center;
  line-height: 15px;
`;