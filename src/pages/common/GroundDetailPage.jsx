import React, { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import tw from 'tailwind-styled-components/';
import { withLayout } from '../../components/common/layout/Layout';
import useFetchData from '../../hooks/useFetchData';
import GroundDetailCard from '../../components/common/groundDetailPage/GroundDetailCard';
import GroundMissionList from '../../components/common/groundDetailPage/GroundMissionList';
import { RemainUserGrid } from '../../components/common/groundDetailPage/RemainUserGrid';
import { SuccessUserList } from '../../components/common/groundDetailPage/SuccessUserList';
import { ReviewContainer } from '../../components/common/groundDetailPage/ReviewContainer';
import api from '../../common/axios-config';
import { groundStatus } from '../../common/global-constants';

function GroundDetailPage() {
  const params = useParams();
  const ground = useFetchData(`/ground/${params.groundId}`);// 성공
  const fetchMissionList = () => useFetchData(`/mission/${params.groundId}`); // checked
  const fetchUserList = () => useFetchData(`/ground/${params.groundId}/user`);
  const fetchIsAvailableGround = () => useFetchData(`/user/me/ground/${params.groundId}/available`); // new url
  const fetchReward = () => useFetchData(`/ground/${params.groundId}/reward`); // new url
  const fetchSuccessUserList = () => useFetchData(`/ground/${params.groundId}/user/success`);// 성공
  const fetchIsReviewableUser = () => useFetchData(`/user/me/ground/${params.groundId}/review/available`); // new url
  const fetchReviewList = () => useFetchData(`/ground/${params.groundId}/review`); // new url
  const createUserGround = () => api.post(`/user/me/ground/${params.groundId}`); // new url
  const cancelUserGround = () => api.delete(`user/me/ground/${params.groundId}`); // new url
  const reviewUserGround = (reviewForm) => api.post(`user/me/ground/${params.groundId}/review`, reviewForm); // new url
  const createUserLecture = (lectureId) => api.post(`user/me/lecture/${lectureId}`);

  const componentMap = new Map([
    ['GroundDetailCard', <GroundDetailCard
      ground={ground}
      fetchIsAvailableGround={fetchIsAvailableGround}
      createUserGround={createUserGround}
      cancelUserGround={cancelUserGround}
      createUserLecture={createUserLecture}
    />],
    ['GroundMissionList', <GroundMissionList
      status={ground.status}
      fetchMissionList={fetchMissionList}
    />],
    ['RemainUserGrid', <RemainUserGrid
      fetchUserList={fetchUserList}
      fetchReward={fetchReward}
    />],
    ['SuccessUserList', <SuccessUserList
      fetchSuccessUserList={fetchSuccessUserList}
    />],
    ['ReviewContainer', <ReviewContainer
      fetchReviewList={fetchReviewList}
      fetchIsReviewableUser={fetchIsReviewableUser}
      reviewUserGround={reviewUserGround}
    />],
  ]);

  return (
    <>
      { ground.status === groundStatus.standby && (
      <>
        <Title>그라운드 상세 정보</Title>
        {componentMap.get('GroundDetailCard')}
        <Title>그라운드 7일간의 미션</Title>
        {componentMap.get('GroundMissionList')}
      </>
      )}
      { ground.status === groundStatus.ongoing && (
      <>
        <Title>그라운드 7일간의 미션</Title>
        {componentMap.get('GroundMissionList')}
        <Title>참여자 진행 현황</Title>
        {componentMap.get('RemainUserGrid')}
        <Title>그라운드 상세 정보</Title>
        {componentMap.get('GroundDetailCard')}
      </>
      )}
      { ground.status === groundStatus.completed && (
      <>
        <Title>명예의 전당</Title>
        {componentMap.get('SuccessUserList')}
        <Title>그라운드 리뷰</Title>
        {componentMap.get('ReviewContainer')}
      </>
      )}
    </>
  );
}
export default withLayout(GroundDetailPage);

const Title = tw.h1`text-3xl my-8`;
