import { Title } from "../Resume.styles";
import { Content, Details, Wrapper } from "./PatentsAndPublications.styles";
import Patent from "./patent/Patent";

const PatentsAndPublications = () => {
  return (
    <Wrapper>
      <Title>Patents and Publications</Title>
      <Content>
        <Patent publisher="Published by IBM">
          <Details>
            Solution for Storing/Retrieving Datasets Restricted by DFSMSdss
            to/from the Cloud with Non-Restricted Datasets
          </Details>
        </Patent>
        <Patent publisher="Published by IBM">
          <Details>
            Method of Using Nearby Wi-Fi Networks to Detect GPS Spoofing
          </Details>
        </Patent>
      </Content>
    </Wrapper>
  );
};

export default PatentsAndPublications;
