import logo from "../img/logo.png";
import data from "./data/navdata";
import "../styles/navbar.css";
import {
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  IconButton,
  Text,
} from "@chakra-ui/react";
import { HamburgerIcon } from "@chakra-ui/icons";

export default function Navbar({ Desktop, Tablet, Mobile }) {
  return (
    <div>
      <div id="main-nav-div">
        {
          <Desktop>
            <div className="logo-div">
          <img width="40%" src={logo} alt="123" />
        </div>
          </Desktop>
        }
        {
          <Tablet>
            <div className="logo-div">
          <img width="30%" src={logo} alt="123" />
        </div>
          </Tablet>
        }
        {
          <Mobile>
            <div className="logo-div">
          <img width="25%" src={logo} alt="123" />
        </div>
          </Mobile>
        }
        
        {
          <Desktop>
            <div className="nav-items">
              {data.map((i) => (
                <a key={i.item} href={i.scroll}>
                  <h2 className="nav-text">{i.item}</h2>
                </a>
              ))}
            </div>
          </Desktop>
        }
        {
          <Tablet>
            <Menu>
              <MenuButton
                as={IconButton}
                aria-label="Options"
                icon={<HamburgerIcon boxSize={7} />}
                variant="filled"
              />
              <MenuList
                rootProps={{ width: "100%" }}
                bgColor="#fdbec6"
                border="none"
              >
                {data.map((i) => (
                  <a key={i.item} href={i.scroll}>
                    <MenuItem
                      margin={"auto"}
                      maxW={"max-content"}
                      _focus={{ bg: "none" }}
                    >
                      <Text
                        fontFamily="'Playfair Display', serif"
                        color="#333333"
                        fontSize="2xl"
                        textAlign={"center"}
                      >
                        {i.item}
                      </Text>
                    </MenuItem>
                  </a>
                ))}
              </MenuList>
            </Menu>
          </Tablet>
        }
        {
          <Mobile>
            <Menu>
              <MenuButton
                as={IconButton}
                aria-label="Options"
                icon={<HamburgerIcon boxSize={5} />}
                variant="filled"
              />
              <MenuList
                rootProps={{ width: "100%" }}
                bgColor="#fdbec6"
                border="none"
              >
                {data.map((i) => (
                  <a key={i.item} href={i.scroll}>
                    <MenuItem
                      margin={"auto"}
                      maxW={"max-content"}
                      _focus={{ bg: "none" }}
                    >
                      <Text
                        fontFamily="'Playfair Display', serif"
                        color="#333333"
                        fontSize="2xl"
                        textAlign={"center"}
                      >
                        {i.item}
                      </Text>
                    </MenuItem>
                  </a>
                ))}
              </MenuList>
            </Menu>
          </Mobile>
        }
      </div>
    </div>
  );
}
