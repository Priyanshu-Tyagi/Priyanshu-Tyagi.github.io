import "../styles/contactme.css";
import phone from '../img/phone.png'
import { data } from "./data/contactme";
import { Icon } from "@chakra-ui/react";

export default function ContactMe({ Desktop, Tablet, Mobile }) {
  return (
    <div id="ContactMe">
      {
        <Desktop>
          <div className="in-contact">
            <div className="divider">
              <div className="icon-div">
                {data.map((i) => (
                  <div key={i.name}>
                    <a href={i.link}>
                      <Icon viewBox="0 0 24 24" boxSize={7}>
                        <path fill="currentColor" d={i.path} />
                      </Icon>
                    </a>
                  </div>
                ))}
                <div style={{display:'flex'}}>
                  <img height="24" width='30' src={phone} alt="phone" />
                  <p>+91 7210940400</p>
                </div>
              </div>
            </div>
            <h2 className="contact-text">Designed and build by Priyanshu Tyagi.</h2>
          </div>
        </Desktop>
      }
      {
        <Tablet>
          <div className="in-contact">
            <div className="divider">
              <div className="icon-div">
                {data.map((i) => (
                  <div key={i.name}>
                    <a href={i.link}>
                      <Icon viewBox="0 0 24 24" boxSize={7}>
                        <path fill="currentColor" d={i.path} />
                      </Icon>
                    </a>
                  </div>
                ))}
                <div style={{display:'flex'}}>
                  <img height="24" width='30' src={phone} alt="phone" />
                  <p style={{fontSize:".8rem"}}>+91 7210940400</p>
                </div>
              </div>
            </div>
            <h2 className="contact-text">Designed and build by Priyanshu Tyagi.</h2>
          </div>
        </Tablet>
      }
      {
        <Mobile>
          <div className="in-contact">
            <div className="divider">
              <div className="M-icon-div">
                {data.map((i) => (
                  <div key={i.name}>
                    <a href={i.link}>
                      <Icon viewBox="0 0 24 24" boxSize={6}>
                        <path fill="currentColor" d={i.path} />
                      </Icon>
                    </a>
                  </div>
                ))}
                <div style={{display:'flex', textAlign:"center"}}>
                  <img height="18" width='24' src={phone} alt="phone" />
                  <p style={{fontSize:".7rem"}}>+91 7210940400</p>
                </div>
              </div>
            </div>
            <h2 className="M-contact-text">Designed and build by Priyanshu Tyagi.</h2>
          </div>
        </Mobile>
      }
    </div>
  );
}
