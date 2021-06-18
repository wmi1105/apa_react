import Image from "component/common/Image";
import Section from "component/common/Section";
import React from "react";

const Detail = (props) => {
  return (
    <>
      <Section>
        <div id="contents">
          <article className="ntalk_view">
            <p className="img">
              <Image src="thum/thum_test2.png" alt="" />
            </p>

            <header>
              <p className="cate cate1">건강상식</p>
              <p className="subject">
                스마트폰을 너무 오래 하면 거북목 증후군이 생길 수 있어요.
              </p>
            </header>

            <section>
              <p>
                스마트폰이나 PC를 눈높이 보다 낮게 장시간 집중하다 보면 머리와
                목을 앞으로 내미는 잘못된 자세를 유지하게 됩니다.
              </p>
              <p>
                이로 인해 경추는 자연스레 뒤로 젖혀지고, 머리는 더 위로 들리면서
                목이 거북이처럼 쭉 빠지는 거북목증후군이 생길 수 있어요.
                거북목증후군은 목의 통증은 물론 어깨의 뻐근함, 두통과 만성적
                피로감이 나타나며 경추 디스크의 원인이 됩니다.
              </p>
              <p>
                거북목증후군은 잘못된 생활습관 때문에 뼈와 인대에 발생한
                질환으로 생활습관 관리를 통한 교정이 기본이 되며, 예방을
                위해서는 바른 자세와 스트레칭이 필요합니다.
              </p>
              <p className="img">
                <Image src="thum/thum_test3.png" alt="" />
              </p>
              <strong>
                위의 스트레칭 방법을 따라 꾸준히 실천하여 거북목을 예방해
                보세요.
              </strong>
              <p>
                스마트폰이나 PC를 눈높이 보다 낮게 장시간 집중하다 보면 머리와
                목을 앞으로 내미는 잘못된 자세를 유지다. 이로 인해 경추는
                자연스레 뒤로 젖혀지고, 머리는 더 위로 들리면서 목이 거북이처럼
                쭉 빠지는 거북목증후군이 생길 수 있어요. 거북목증후군은 목의
                통증은 물론 어깨의 뻐근함, 두통과 만성적 피로감이 나타나며 경추
                디스크의 원인이 됩니다.
              </p>
            </section>
          </article>

          <aside className="tag_area">
            <strong>#관련 질환정보</strong>
            <p>자세한 질환을 선택해보세요.</p>
            <ul className="tag">
              <li>
                <button type="button">#고혈압</button>
              </li>
              <li>
                <button type="button">#뇌졸증</button>
              </li>
              <li>
                <button type="button">#심부전</button>
              </li>
              <li>
                <button type="button">#처추측만증</button>
              </li>
              <li>
                <button type="button">#허리디스크</button>
              </li>
            </ul>
          </aside>
        </div>
      </Section>
    </>
  );
};

export default Detail;
