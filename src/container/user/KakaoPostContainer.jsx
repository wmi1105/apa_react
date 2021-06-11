
import React, { useEffect, useState } from 'react';
import Postcode from 'component/user/KakaoPost';
import PostDetail from 'component/user/PostDetail';
import { withRouter } from 'react-router';

const KakaoPostContainer = ({history, onPage}) => {
    const [isOpenPost, setIsOpenPost] = useState(true);
    const [address, setAddress] = useState({
        old: "",
        load: "",
        extra: "",
    }); // 입력한 주소

  const onAddress = (val) => {
      setAddress({...val});
      setIsOpenPost(false);
  }

  const onSubmit = (val) => {
    //주소저장
    console.log(val)
    history.push('/user/info');
  }

  useEffect(() => {
      if (isOpenPost) onPage('post');
      else onPage('detail');
  }, [isOpenPost, onPage])

    return(
        <>
        {isOpenPost &&
            <Postcode 
                isOpenPost={isOpenPost}
                onAddress={onAddress}
            />
        }
        {!isOpenPost &&
            <PostDetail 
                address = {address}
                onClick={onSubmit}
            />
        }
    </>
    )
}

export default withRouter(KakaoPostContainer);