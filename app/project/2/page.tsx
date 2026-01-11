"use client";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { BsArrowLeft } from "react-icons/bs";
const Project1 = () => {
  const navigate = useRouter();
  const handleGoBack = () => {
    navigate.back();
  };
  return (
    <div className="flex flex-col items-center justify-center overflow-auto">
      <div className="h-screen w-full ">
        <div className="pt-40 pb-28 container mx-auto">
          <h2 className="h2">FITFOLIO</h2>

          <span className="font-bold text-xl">[홈페이지]</span>
          <div className="flex gap-x-4  text-lg mb-10">
            <span>FITFOLIO</span>
            <Link
              href={"http://fitfolio1.s3-website.ap-northeast-2.amazonaws.com/"}
              className="  text-blue-300  hover:text-blue-500"
            >
              바로가기
            </Link>
          </div>

          <div>
            <span className=" font-bold text-xl">[프로젝트 개요] </span>
            <p className=" max-w-[70vw] mt-5 ">
              운동 센터를 찾을 때 가격 정보가 없어 직접 연락을 해야 하는 경우가
              많으셨죠? 실제로 가격 표시가 의무화되어 있음에도 불구하고, 많은
              곳에서 가격 정보를 제공하지 않아 운동을 시작하려는 분들이 어려움을
              겪고 있습니다. 저희 프로젝트는 이러한 문제점을 해결하기 위해
              탄생했습니다. 또한 운동하는 사람들끼리 정보를 공유하고 커뮤니티를
              형성하는 공간을 마련해, 함께 운동하는 즐거움과 동기부여도 얻을 수
              있습니다. 한 플랫폼에서 운동 센터의 정보를 확인하며, 동시에
              운동하는 사람들과 소통하고 교류할 수 있는 공간을 제공합니다. 이를
              통해 더 쉽고 빠르게 운동을 시작하실 수 있게 도와드리고자 합니다.
            </p>
          </div>
          <div className="my-10">
            <span className="font-bold text-xl">[주요 기능]</span>
            <ol>
              <li className="font-bold text-lg mt-5 list-decimal list-inside mb-3">
                개인 및 기업 SNS 기능
              </li>
              <ul className="list-disc list-inside text-white/60">
                <li>
                  사용자 및 기업 회원은 운동 관련 콘텐츠를 피드에 게시할 수
                  있습니다.
                </li>
                <li>
                  게시글에는 사진, 글, 태그, 댓글, 좋아요 등이 포함됩니다.
                </li>
                <li>
                  다른 사용자의 피드를 탐색하고 좋아요를 표시하거나 댓글을
                  작성할 수 있습니다.
                </li>
              </ul>
              <li className="font-bold text-lg mt-5 list-decimal list-inside mb-3">
                태그 및 상품 정보
              </li>
              <ul className="list-disc list-inside text-white/60">
                <li>
                  사용자는 게시물에 태그를 고르거나 임의로 등록할 수 있습니다.
                </li>
                <li>
                  사용자는 게시물에 원하는 상품의 정보, 가격, 사이즈 등을 태그로
                  추가할 수 있습니다.
                </li>
              </ul>
              <li className="font-bold text-lg mt-5 list-decimal list-inside mb-3">
                검색 및 검색 필터
              </li>
              <ul className="list-disc list-inside text-white/60">
                <li>
                  사용자는 ID(닉네임) 및 연관 태그를 사용하여 다른 사용자의
                  게시물을 검색할 수 있습니다.
                </li>
                <li>
                  검색 결과를 필터링하여 특정 지역, 운동 종목 또는 기업을 찾을
                  수 있습니다.
                </li>
              </ul>
            </ol>
          </div>

          <span className=" font-bold text-xl">[담당 및 구현] </span>
          <ul className="list-disc list-inside mt-5 text-white/60">
            <li>
              메인페이지, 마이페이지, 팔로우&팔로워 페이지의{" "}
              <b className="text-white">
                Axios를 통해 목록을 불러오는 것을 구현
              </b>
              했습니다.
            </li>

            <li>
              헤더에 검색시
              <b>자동완성 추천과 해당 데이터를 검색시 필터링 하는것을 구현</b>
              했습니다.
            </li>
            <li>
              푸터에 Emailjs를 사용하여 각 팀 멤버에게
              <b className="text-white"> 이메일 발송 기능을 구현</b>
              했습니다.
            </li>
            <li>
              모바일, 태블릿, PC에서 <b className="text-white">반응형 구현</b>
              했습니다.
            </li>
            <li>
              무한 스크롤이 필요한 페이지에서 react-intersection-observer를
              사용하여 페이지 하단 요소를 감시하고, <br />
              사용자가 스크롤해 해당 요소에 도달하면 새로운 콘텐츠를 불러오는
              함수를 실행하여 데이터를 불러오는
              <b className="text-white">무한스크롤을 구현</b>
              했습니다.
            </li>
            <li>
              전역으로 필요한 상태의 경우 props drilling을 해결하기 위해{" "}
              <b className="text-white">
                Redux-toolkit을 사용하여 전역으로 상태관리
              </b>
              를 했습니다.
            </li>
          </ul>

          <div className="relative mt-5">
            <button
              onClick={handleGoBack}
              className="btn rounded-full border border-white/50 w-[170px] px-8 transition-all duration-300 flex items-center justify-center overflow-hidden hover:border-accent group"
            >
              <span className="group-hover:-translate-y-[120%] group-hover:opacity-0 transition-all duration-500">
                돌아가기
              </span>
              <BsArrowLeft className="-translate-y-[120%] opacity-0 group-hover:flex  group-hover:-translate-y-0  group-hover:opacity-100 transition-all duration-300 absolute text-[22px]" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Project1;
