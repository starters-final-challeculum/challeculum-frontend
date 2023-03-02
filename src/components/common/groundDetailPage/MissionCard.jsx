import React, { useRef, useState } from 'react';
import { faUpload } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import tw from 'tailwind-styled-components';
import api from '../../../common/axios-config';

const Card = tw.div`
  bg-neutral-500 rounded-lg p-4 h-96 w-72 text-white flex flex-col justify-between
`;

const Title = tw.h2`
  text-2xl font-medium mb-2
`;

const Text = tw.p`
  text-sm
`;

const Button = tw.button`
  bg-white text-emerald-700 font-medium py-1  px-4 rounded-md hover:bg-emerald-100
`;

const UploadArea = tw.div`
  flex items-center justify-center overflow-y-auto
`;

const UploadIcon = tw(FontAwesomeIcon)`
  text-white text-2xl mr-2
`;

const FileInput = tw.input`
  hidden
`;

const PreviewImage = tw.img`
  w-full h-30 object-contain my-2
`;

function GroundAssignment({ mission, ground, createUserMission }) {
  const [file, setFile] = useState(null);
  const fileInputRef = useRef();
  const submittedUserMission = api.get(`/user/me/mission/${mission.missionId}`); // new url
  const checkIsTodayMission = () => {
    const today = new Date().toLocaleDateString('ko-KR');
    const missionDate = new Date(Date.parse(mission.missionAt)).toLocaleDateString('ko-KR');
    console.log(today);
    console.log(missionDate);
    if (today === missionDate) return true;
    return false;
  };

  const handleFileChange = (e) => {
    const selectedFile = e.target.files[0];

    if (selectedFile && selectedFile.type.startsWith('image/')) {
      setFile(selectedFile);
    } else {
      setFile(null);
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!file) return;

    const formData = new FormData();
    formData.append('file', file);

    try {
      const { data } = await api.post(`/user/me/mission/${e.target.value}`, formData, {
        headers: {
          'Content-Type': 'multipart/form-data',
        },
      });
      alert('성공적으로 제출 되었습니다.');
    } catch (error) {
      alert(error);
    }
  };

  return (
    <Card>
      <div>
        <Title>
          {mission.missionAt}
        </Title>
        <div className="h-20 overflow-y-auto">
          <Text>{mission.assignment}</Text>
        </div>
      </div>
      { (ground.status === 'GROUND_ONGOING' && checkIsTodayMission()) && (
      <>
        <UploadArea>
          <button onClick={() => fileInputRef.current.click()}>
            {file ? (
              <>
                <PreviewImage
                  src={URL.createObjectURL(file)}
                  alt="Selected file"
                />
                <Text>{file.name}</Text>
              </>
            )
              : (
                <>
                  <UploadIcon icon={faUpload} />
                  <span>인증사진 업로드</span>
                </>
              )}
          </button>
          <FileInput type="file" name="file" ref={fileInputRef} onChange={handleFileChange} />
        </UploadArea>
        <Button value={mission.missionId} onClick={handleSubmit}>미션 제출하기</Button>
      </>
      )}
    </Card>
  );
}

export default GroundAssignment;
