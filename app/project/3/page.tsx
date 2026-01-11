"use client";
import Link from "next/link";
import { useRouter } from "next/navigation";
import React from "react";
import { BsArrowLeft } from "react-icons/bs";
const Project2 = () => {
  const navigate = useRouter();
  const handleGoBack = () => {
    navigate.back();
  };
  return (
    <div className="flex flex-col items-center justify-center overflow-auto">
      <div className="h-screen w-full ">
        <div className="pt-40 pb-28 container mx-auto">
          <h2 className="h2">SFACLOG</h2>

          <span className="font-bold text-xl">[홈페이지]</span>
          <div className="flex flex-col text-lg mb-10">
            <div className="flex gap-x-4 items-center">
              <span className="w-32">SFACLOG</span>
              <Link
                href={"https://sfaclog-web.vercel.app/main"}
                className="text-blue-300 hover:text-blue-500 flex-1"
              >
                바로가기
              </Link>
            </div>
            <div className="flex gap-x-4 items-center">
              <span className="w-32">디자인 시스템</span>
              <Link
                href={
                  "https://dev-design-system--65af68a0f0808a50db600133.chromatic.com/"
                }
                className="text-blue-300 hover:text-blue-500 flex-1"
              >
                바로가기
              </Link>
            </div>
          </div>

          <div className="flex flex-col">
            <span className=" font-bold text-xl">[프로젝트 개요] </span>
            <span className=" max-w-[70vw] mt-5 ">
              SFACLOG 는 스나이퍼팩토리의 SFAC 과 기록이라는 의미를 가진 LOG를
              결합하여 만들었습니다.
              <br />
              사용자들의 글쓰기 활동과 다양한 아이디어, 정보를 공유하고 편하게
              기록하고자 합니다.
              <br />
              또한, 우리의 로그들은 더 나은 세상을 만들어가는 여정의 출발점이자
              도전의 기록입니다.
              <br />
              스팩로그는 우리가 쓰는 코드의 뒷 이야기를 담아내고, 프로젝트마다
              새로운 도전에 부딪히며 얻는 성취의 순간들입니다.
              <br />
              로그의 세계에는 무수한 감동과 성장이 기다리고 있습니다. 스팩로그를
              통해 여러분의 이야기가 세상에 닿기를 기대합니다.
            </span>
          </div>
          <div className="my-10">
            <span className="font-bold text-xl">[주요 기능]</span>
            <ol>
              <li className="font-bold text-lg mt-5 list-decimal list-inside mb-3">
                기술적인 지식 공유 및 개발 커뮤니티 형성
              </li>
              <ul className="list-disc list-inside text-white/60">
                <li>
                  다양한 주제와 기술에 대한 글쓰기 및 댓글 기능을 제공하여
                  사용자들이 지식을 공유하고 토론할 수 있습니다.
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
                개인블로그 운영 및 개인 포트폴리오 한 곳에 구축 가능
              </li>
              <ul className="list-disc list-inside text-white/60">
                <li>
                  포트폴리오 관리 기능을 제공하여 사용자들이 자신의 프로젝트 및
                  경력을 체계적으로 관리할 수 있습니다.
                </li>
                <li>
                  사용자들은 간편한 방식으로 자신의 블로그를 운영하고 다양한
                  주제에 대해 글을 작성할 수 있습니다.
                </li>
              </ul>
            </ol>
          </div>

          <span className=" font-bold text-xl">[담당 및 구현] </span>
          <ul className="list-disc list-inside mt-5 text-white/60">
            <li>
              스팩로그{" "}
              <b className="text-white">회원가입 페이지 및 노드메일러</b>를 통한
              이메일 인증 구현했습니다.
            </li>

            <li>
              스팩로그 프로젝트 <b className="text-white">메인 페이지</b>를
              구현했습니다.
            </li>
            <li>
              스팩로그 프로젝트 <b className="text-white">글쓰기 페이지</b>를
              구현했습니다.
              <br />
              <ul className="ml-8">
                <li>
                  - 프로젝트 기본정보 부분은{" "}
                  <b className="text-white">드롭다운 형식</b>을 만들었고 모집
                  마감일의 경우 <b className="text-white">리액트 데이트피커</b>
                  를 커스텀해서 사용했습니다.
                </li>
                <li>
                  - 프로젝트 소개부분 이미지 업로드시{" "}
                  <b className="text-white">미리보기가 가능하게</b>{" "}
                  구현했습니다.(최대 3개)
                </li>
              </ul>
            </li>
            <li>
              스팩로그 프로젝트 <b className="text-white">상세페이지</b>를
              구현했습니다. (댓글 DB 연동X)
            </li>
            <li>
              스팩로그 프로젝트 <b className="text-white">글 수정 및 삭제</b>를
              구현했습니다.
            </li>
            <li>
              모든 데이터 송수신은 <b className="text-white">React-Query</b>를
              사용하여 <b className="text-white">불필요한 상태를 최소화</b>{" "}
              하였고 데이터 캐싱을 통한{" "}
              <b className="text-white">반복적인 비동기 데이터 호출을 방지</b>
              했습니다.
            </li>
            <li>
              <b className="text-white">포켓베이스로 백엔드 설정</b>
              <ul className=" ml-8">
                <li>- ERD 작성 및 포켓베이스 DB 설정</li>
              </ul>
            </li>
            <li>
              스토리북을 통한 <b className="text-white">디자인 시스템 구축</b>
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

export default Project2;
