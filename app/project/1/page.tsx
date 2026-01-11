"use client";

import Link from "next/link";
import { useRouter } from "next/navigation";
import { BsArrowLeft } from "react-icons/bs";

const ProjectShortsMaker = () => {
  const navigate = useRouter();
  const handleGoBack = () => {
    navigate.back();
  };

  return (
    <div className="flex flex-col items-center justify-center overflow-auto">
      <div className="h-screen w-full">
        <div className="pt-40 pb-28 container mx-auto">
          <h2 className="h2">쇼츠메이커</h2>

          <span className="font-bold text-xl">[웹사이트]</span>
          <div className="flex gap-x-4 text-lg mb-10">
            <span>ShortsMaker</span>
            <Link
              href={"https://storymaker-iota.vercel.app/"}
              className="text-blue-300 hover:text-blue-500"
            >
              바로가기
            </Link>
          </div>

          <div>
            <span className="font-bold text-xl">[프로젝트 개요]</span>
            <p className="max-w-[70vw] mt-5">
              쇼츠메이커는 사용자가 원하는 키워드, 장르, 분위기 등을 선택하면
              그에 맞는 짧은 영상 스토리를 자동 생성해 주는 플랫폼입니다. 스토리
              제작에 익숙하지 않은 사용자도 쉽게 영상 스크립트를 만들 수 있도록
              돕는 것이 핵심 목적입니다. 이를 통해 생성형 AI를 활용한 콘텐츠
              제작 경험을 제공하며, 누구나 빠르게 아이디어를 영상 콘셉트로
              전환할 수 있도록 도와줍니다.
            </p>
          </div>

          <div className="my-10">
            <span className="font-bold text-xl">[주요 기능]</span>
            <ol>
              <li className="font-bold text-lg mt-5 list-decimal list-inside mb-3">
                AI 기반 단편 스토리 생성
              </li>
              <ul className="list-disc list-inside text-white/60">
                <li>
                  사용자가 길이(10~30초), 장르(공포, 감동, 반전 등)를 선택하면
                  그에 맞는 짧은 스토리를 생성합니다.
                </li>
                <li>
                  선택한 옵션에 따라 자동으로 내레이션 텍스트를 제작합니다.
                </li>
                <li>스토리는 수정하거나 다시 생성할 수 있습니다.</li>
              </ul>

              <li className="font-bold text-lg mt-5 list-decimal list-inside mb-3">
                스토리 저장 및 열람 기능
              </li>
              <ul className="list-disc list-inside text-white/60">
                <li>생성된 스토리를 개인 프로필에 저장할 수 있습니다.</li>
                <li>
                  내가 생성한 스토리를 모아 리스트 형태로 확인할 수 있습니다.
                </li>
              </ul>

              <li className="font-bold text-lg mt-5 list-decimal list-inside mb-3">
                좋아요 및 조회수 기록
              </li>
              <ul className="list-disc list-inside text-white/60">
                <li>스토리마다 조회수를 기록합니다.</li>
                <li>다른 사용자가 내 스토리에 좋아요를 남길 수 있습니다.</li>
                <li>내가 좋아요 한 스토리는 상태로 확인 가능합니다.</li>
              </ul>

              <li className="font-bold text-lg mt-5 list-decimal list-inside mb-3">
                회원 기반 관리
              </li>
              <ul className="list-disc list-inside text-white/60">
                <li>Supabase 인증을 활용한 로그인/회원 관리 기능 구현</li>
                <li>
                  로그인한 사용자만 스토리를 생성/공유/관람할 수 있습니다.
                </li>
              </ul>

              <li className="font-bold text-lg mt-5 list-decimal list-inside mb-3">
                반응형 UI & 편리한 UX
              </li>
              <ul className="list-disc list-inside text-white/60">
                <li>PC, 태블릿, 모바일 모두 매끄럽게 이용 가능</li>
                <li>Tailwind CSS 기반으로 UI 구성 및 애니메이션 연출</li>
              </ul>
            </ol>
          </div>

          <span className="font-bold text-xl">[담당 및 구현]</span>
          <div>*첫 개인 프로젝트</div>
          <ul className="list-disc list-inside mt-5 text-white/60">
            <li>
              <b className="text-white">스토리 생성 옵션 UI 구현</b> 및 UX 설계
            </li>
            <li>
              사용자의 선택 값을 저장하고 유지하기 위해{" "}
              <b className="text-white">Zustand</b> 활용
            </li>
            <li>
              Edge Function과 통신하여{" "}
              <b className="text-white">생성형 AI 기반 스토리 생성 API 호출</b>
            </li>
            <li>
              <b className="text-white">조회수 증가 및 좋아요 시스템</b> 구현
              (Supabase 업데이트)
            </li>
            <li>
              React Query를 사용한{" "}
              <b className="text-white">Infinite Scroll 기반 목록 페이지</b>{" "}
              구성
            </li>
            <li>
              공개/비공개 토글을 통한{" "}
              <b className="text-white">개인 스토리 관리 기능</b> 구현
            </li>
            <li>
              <b className="text-white">반응형 레이아웃 및 UI 컴포넌트 제작</b>
            </li>
          </ul>

          <div className="relative mt-10">
            <button
              onClick={handleGoBack}
              className="btn rounded-full border border-white/50 w-[170px] px-8 transition-all duration-300 flex items-center justify-center overflow-hidden hover:border-accent group"
            >
              <span className="group-hover:-translate-y-[120%] group-hover:opacity-0 transition-all duration-500">
                돌아가기
              </span>
              <BsArrowLeft className="-translate-y-[120%] opacity-0 group-hover:flex group-hover:-translate-y-0 group-hover:opacity-100 transition-all duration-300 absolute text-[22px]" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectShortsMaker;
