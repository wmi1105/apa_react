import React, { useState } from "react";
import Container from "pages/inc/Container";
import NtalkDetailContainer from "container/nTalk/NtalkDetailContainer";
import { withRouter } from "react-router-dom";

const DetailPage = ({history}) => {
    const [shareModal, setShareModal] = useState(false);

    return(
        <Container
          wrap="ntalk"
          header={false}
          footer={false}
          nav={true}
          navOption={{
            headerId: "back",
            headerPath: () => history.push('/nTalk/list'),
            title: "건강N톡",
            share: true,
            onClickShare : () => setShareModal(true)
          }}
        >
          <NtalkDetailContainer share={shareModal} onShare={() => setShareModal(false)}/>
        </Container>
      );
}

export default withRouter(DetailPage);
