import React, { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { withLayout } from '../../components/common/layout/Layout';
import useFetchData from '../../hooks/useFetchData';
import GroundDetailCard from '../../components/common/groundDetailPage/GroundDetailCard';
import GroundMissionList from '../../components/common/groundDetailPage/GroundMissionList';
import { RemainUserGrid } from '../../components/common/groundDetailPage/RemainUserGrid';
import { SuccessUserList } from '../../components/common/groundDetailPage/SuccessUserList';
import { ReviewContainer } from '../../components/common/groundDetailPage/ReviewContainer';
import api from '../../common/axios-config';

function GroundDetailPage() {
  const params = useParams();
  const ground = useFetchData(`/ground/${params.groundId}`);// 성공
  const fetchMissionList = () => useFetchData(`/mission/${params.groundId}`);

  const fetchUserList = () => useFetchData(`/userground/${params.groundId}`);
  const fetchIsAvailableGround = () => useFetchData(`/userground/available/${params.groundId}`);
  const fetchReward = () => useFetchData(`/userground/reward/${params.groundId}`);
  const fetchSuccessUserList = () => useFetchData(`/ground/${params.groundId}/user/success`);// 성공
  const fetchIsReviewableUser = () => useFetchData(`/user/me/ground/${params.groundId}/review/available`);
  const fetchReviewList = () => useFetchData(`/ground/${params.groundId}/review`);
  const createUserGround = () => api.post(`/userground/${params.groundId}`);
  const cancelUserGround = () => api.patch('/userground');
  const createUserMission = (missionId) => api.post(`/usermission/${missionId}`);
  const reviewUserGround = (reviewForm) => api.patch(`/userground/review/${params.groundId}`, reviewForm);

  const componentMap = new Map([
    ['GroundDetailCard', <GroundDetailCard
      ground={ground}
      fetchIsAvailableGround={fetchIsAvailableGround}
      createUserGround={createUserGround}
      cancelUserGround={cancelUserGround}
    />],
    ['GroundMissionList', <GroundMissionList
      ground={ground}
      fetchMissionList={fetchMissionList}
      createUserMission={createUserMission}
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
      { ground.status === 'GROUND_STANDBY' && (
      <>
        {componentMap.get('GroundDetailCard')}
        {componentMap.get('GroundMissionList')}
      </>
      )}
      { ground.status === 'GROUND_ONGOING' && (
      <>
        {componentMap.get('GroundMissionList')}
        {componentMap.get('RemainUserGrid')}
        {componentMap.get('GroundDetailCard')}
      </>
      )}
      { ground.status === 'GROUND_COMPLETED' && (
      <>
        {componentMap.get('SuccessUserList')}
        {componentMap.get('ReviewContainer')}
      </>
      )}
    </>
  );
}
export default withLayout(GroundDetailPage);
