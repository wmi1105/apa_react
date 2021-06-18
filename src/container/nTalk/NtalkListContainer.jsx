import React, { useState } from "react";
import List from "component/nTalk/List";
import SortModal from "component/nTalk/SortModal";

const items = [
  {
    key : 1,
    category:'건강상식',
    label : '집콕생활, 비타민 D 결핍에 대처하는방법',
    img : 'thum/thum_test2.png',
    date : '2011.11.11',
    heart : false
  },
  {
    key : 2,
    category:'의약상식',
    label : '집콕생활, 비타민 D 결핍에 대처하는방법',
    img : 'thum/thum_test3.png',
    date : '2011.11.11',
    heart : true
  },{
    key : 3,
    category:'보건의료제도',
    label : '집콕생활, 비타민 D 결핍에 대처하는방법',
    img : 'thum/thum_test2.png',
    date : '2011.11.11',
    heart : false
  },
  {
    key : 4,
    category:'건강상식',
    label : '집콕생활, 비타민 D 결핍에 대처하는방법',
    img : 'thum/thum_test3.png',
    date : '2011.11.11',
    heart : false
  }
]

const NtalkListContainer = (props) => {
  const [sort, setSort] = useState("new");
  const [modalVisible, setModalVisible] = useState(false);

  const onClickSort = (val) => {
    setModalVisible(false);
    if(val === 'close') return false;
    
    setSort(val);
  }

  const onClickHeart = (key) => {
    //선택한 컨텐츠 찜하기 
    //storage에???
  }

  return (
    <>
      <List items={items} onClickSort={() => setModalVisible(true)} onClickHeart={onClickHeart}/>

      <SortModal
        targetId="filter_sort"
        visible={modalVisible}
        sort={sort}
        onClick={onClickSort}
      />
    </>
  );
};

export default NtalkListContainer;
